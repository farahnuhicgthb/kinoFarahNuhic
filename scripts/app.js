function generisiSjedista(statusi) {
    const redovi = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const sjedista = [];
    let indeks = 0;

    redovi.forEach(function(red) {
        for (let broj = 1; broj <= 10; broj++) {
            sjedista.push({
                red: red,
                broj: broj,
                status: statusi[indeks]
            });
            indeks++;
        }
    });

    return sjedista;
}

const podaci = {
    projekcije: [
        {
            film: "Mission Impossible 8",
            vrijeme: "19:30",
            sala: 3,
            sjedista: generisiSjedista([
                "slobodno", "slobodno", "slobodno", "rezervisano", "rezervisano", "rezervisano", "slobodno", "zauzeto", "slobodno", "slobodno",
                "rezervisano", "zauzeto", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno", "rezervisano", "zauzeto", "slobodno",
                "rezervisano", "rezervisano", "zauzeto", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno",
                "rezervisano", "slobodno", "slobodno", "slobodno", "rezervisano", "zauzeto", "slobodno", "slobodno", "zauzeto", "zauzeto",
                "rezervisano", "rezervisano", "slobodno", "zauzeto", "rezervisano", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno",
                "slobodno", "slobodno", "slobodno", "rezervisano", "rezervisano", "rezervisano", "rezervisano", "zauzeto", "slobodno", "zauzeto",
                "rezervisano", "slobodno", "slobodno", "rezervisano", "rezervisano", "zauzeto", "rezervisano", "rezervisano", "slobodno", "zauzeto",
                "rezervisano", "slobodno", "slobodno", "slobodno", "zauzeto", "slobodno", "rezervisano", "zauzeto", "slobodno", "slobodno"
            ])
        },
        {
            film: "John Wick 5",
            vrijeme: "17:00",
            sala: 1,
            sjedista: generisiSjedista([
                "zauzeto", "slobodno", "slobodno", "rezervisano", "slobodno", "zauzeto", "slobodno", "slobodno", "rezervisano", "slobodno",
                "slobodno", "slobodno", "zauzeto", "zauzeto", "slobodno", "slobodno", "rezervisano", "slobodno", "zauzeto", "slobodno",
                "rezervisano", "slobodno", "slobodno", "zauzeto", "slobodno", "rezervisano", "slobodno", "slobodno", "zauzeto", "slobodno",
                "slobodno", "zauzeto", "slobodno", "slobodno", "rezervisano", "slobodno", "zauzeto", "slobodno", "slobodno", "rezervisano",
                "slobodno", "slobodno", "rezervisano", "zauzeto", "slobodno", "slobodno", "slobodno", "zauzeto", "rezervisano", "slobodno",
                "zauzeto", "slobodno", "slobodno", "slobodno", "rezervisano", "rezervisano", "slobodno", "zauzeto", "slobodno", "slobodno",
                "slobodno", "rezervisano", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "rezervisano", "slobodno",
                "rezervisano", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "rezervisano", "slobodno", "zauzeto", "slobodno"
            ])
        }
    ]
};

const ucitaniPodaci = ucitajPodatke(podaci);
inicijalizujKinoSalu(ucitaniPodaci);