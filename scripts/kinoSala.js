let trenutnaProjekcija = 0;

function validirajPodatke(podaci) {
    if (!podaci || !podaci.projekcije || podaci.projekcije.length === 0) {
        return false;
    }

    const dozvoljeniStatusi = ["slobodno", "zauzeto", "rezervisano"];

    for (let projekcija of podaci.projekcije) {
        for (let sjediste of projekcija.sjedista) {
            if (!dozvoljeniStatusi.includes(sjediste.status)) {
                return false;
            }
        }
    }

    return true;
}

function prikaziSalu(podaci) {
    const salaDiv = document.getElementById("sala");
    salaDiv.innerHTML = "";

    if (!validirajPodatke(podaci)) {
        salaDiv.textContent = "Podaci nisu validni!";
        return;
    }

    const projekcija = podaci.projekcije[trenutnaProjekcija];

    const info = document.createElement("div");
    info.className = "gornje-info";
    info.innerHTML = `
        <h2>${projekcija.film}</h2>
        <p>Vrijeme projekcije: ${projekcija.vrijeme}</p>
        <p>Broj sale: ${projekcija.sala}</p>
    `;
    salaDiv.appendChild(info);

    const platno = document.createElement("div");
    platno.className = "platno";
    platno.textContent = "PLATNO";
    salaDiv.appendChild(platno);

    const okvir = document.createElement("div");
    okvir.className = "sala-okvir";

    const grid = document.createElement("div");
    grid.className = "sjedista-grid";

    let trenutniRed = "";

    projekcija.sjedista.forEach(function(sjediste) {
        if (sjediste.red !== trenutniRed) {
            trenutniRed = sjediste.red;

            const oznakaReda = document.createElement("div");
            oznakaReda.className = "red-oznaka";
            oznakaReda.textContent = sjediste.red;
            grid.appendChild(oznakaReda);
        }

        const div = document.createElement("div");
        div.className = "sjediste " + sjediste.status;
        div.textContent = sjediste.broj;

        div.addEventListener("click", function() {
            if (sjediste.status === "slobodno") {
    sjediste.status = "rezervisano";
    sacuvajPodatke(podaci);
    prikaziSalu(podaci);
}
        });

        grid.appendChild(div);
    });

    okvir.appendChild(grid);

    const legenda = document.createElement("div");
    legenda.className = "legenda";
    legenda.innerHTML = `
        <div><span class="oznaka slobodno"></span> Slobodno</div>
        <div><span class="oznaka zauzeto"></span> Zauzeto</div>
        <div><span class="oznaka rezervisano"></span> Rezervisano</div>
    `;
    okvir.appendChild(legenda);

    salaDiv.appendChild(okvir);

    const dugmad = document.createElement("div");
    dugmad.className = "dugmad-projekcije";

    const prethodna = document.createElement("button");
    prethodna.textContent = "Prethodna projekcija";
    prethodna.addEventListener("click", function() {
        if (trenutnaProjekcija > 0) {
            trenutnaProjekcija--;
            prikaziSalu(podaci);
        }
    });

    const sljedeca = document.createElement("button");
    sljedeca.textContent = "Sljedeća projekcija";
    sljedeca.addEventListener("click", function() {
        if (trenutnaProjekcija < podaci.projekcije.length - 1) {
            trenutnaProjekcija++;
            prikaziSalu(podaci);
        }
    });

    dugmad.appendChild(prethodna);
    dugmad.appendChild(sljedeca);
    salaDiv.appendChild(dugmad);
}

function inicijalizujKinoSalu(podaci) {
    prikaziSalu(podaci);
}
function sacuvajPodatke(podaci) {
    localStorage.setItem("kinoPodaci", JSON.stringify(podaci));
}

function ucitajPodatke(pocetniPodaci) {
    const sacuvaniPodaci = localStorage.getItem("kinoPodaci");

    if (sacuvaniPodaci) {
        return JSON.parse(sacuvaniPodaci);
    }

    return pocetniPodaci;
}