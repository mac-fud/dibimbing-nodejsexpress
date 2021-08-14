// DAY 20 & 21

// express
const express = require("express");
const { copyFileSync } = require("fs");

const app = express();
app.use(express.json());

const port = 3000;

function bmi(beratBadan, tinggiBadan) {
    return beratBadan / Math.pow((tinggiBadan / 100), 2);
}

function index(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25 ) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30  ) {
        return "OverWeight";
    } else {
        return "Obesity";
    }
};

//express
// let avengers = [{
//     name: 'Iron Man',
//     beratBadan: 85,
//     tinggiBadan: 175,
// },
// {
//     name: 'Captain America',
//     beratBadan: 86,
//     tinggiBadan: 183,
// },
// {
//     name: 'Thor',
//     beratBadan: 90,
//     tinggiBadan: 178,
// },
// {
//     name: 'Dr.Strange',
//     beratBadan: 73,
//     tinggiBadan: 181,
// },
// {
//     name: 'Hulk',
//     beratBadan: 300,
//     tinggiBadan: 250,
// },];

//app.get("/avengers", (req, res) => {
// let name = req.query.name;
// let beratBadan = req.query.beratBadan;
// let tinggiBadan = req.query.tinggiBadan;
app.post("/avengers", (req, res) => {
    let name = req.body.name;
    let beratBadan = req.body.beratBadan;
    let tinggiBadan = req.body.tinggiBadan;

    //query string
    // let avengersWithBMI = [];

    //query string
    // if (name != null && beratBadan != null && tinggiBadan != null) {
    //     avengers.push({
    //         name: name,
    //         beratBadan: beratBadan,
    //         tinggiBadan: tinggiBadan,
    //     })
    // }

    //Perubahan objek lama ditambah data baru pada express
    // for (a of avengers) {
    //     let newBmi = bmi(a.beratBadan, a.tinggiBadan)
    //     a.bmi = newBmi.toFixed(1);
    //     a.kategori = index(newBmi);
    // };

    // push data baru tanpa mengubah data lama
    // avengers.forEach(a => {
    //     let newBMI = bmi(a.beratBadan, a.tinggiBadan);
    //     let kategori = index(newBMI)

    //     avengersWithBMI.push({
    //         name: a.name,
    //         beratBadan: a.beratBadan,
    //         tinggiBadan: a.tinggiBadan,
    //         bmi: newBMI.toFixed(1),
    //         kategori: kategori,
    //     });
    // });

    // console.log(JSON.stringify(avengers))

    //express
    // res.json(avengers);

    //query string
    // let limit = req.query.limit;
    // res.json(avengers.slice(0, limit));
    // res.json(avengersWithBMI);

    let newBmi = bmi(beratBadan, tinggiBadan);
    let kategori = index(newBmi);

    res.json({
        name: name,
        beratBadan: beratBadan,
        tinggiBadan: tinggiBadan,
        bmi: newBmi,
        kategori: kategori,
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
