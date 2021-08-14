const express = require('express');
const { exp } = require('prelude-ls');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/exchange', (req, res) => {
    let sourceCurrency = req.body.sourceCurrency;
    let sourceAmount = req.body.sourceAmount;
    let targetCurrency = req.body.targetCurrency;
    let newTarget = convert();

    function convert() {
        if (sourceCurrency == "IDR" && targetCurrency == "USD") {
            return sourceAmount * 0.00007
        } else if (sourceCurrency == "IDR" && targetCurrency == "JPY") {
            return sourceAmount * 0.0076
        } else if (sourceCurrency == "IDR" && targetCurrency == "MYR") {
            return sourceAmount * 0.0003
        } else if (sourceCurrency == "JPY" && targetCurrency == "IDR") {
            return sourceAmount * 131.07
        } else if (sourceCurrency == "JPY" && targetCurrency == "USD") {
            return sourceAmount * 0.0091
        } else if (sourceCurrency == "JPY" && targetCurrency == "MYR") {
            return sourceAmount * 0.039
        } else if (sourceCurrency == "MYR" && targetCurrency == "IDR") {
            return sourceAmount * 3.390
        } else if (sourceCurrency == "MYR" && targetCurrency == "USD") {
            return sourceAmount * 0.24
        } else if (sourceCurrency == "MYR" && targetCurrency == "JPY") {
            return sourceAmount * 25.97
        } else {
            return console.error("currency not found");
        }
    }

    res.json({
        sourceCurrency: sourceCurrency,
        sourceAmount: sourceAmount,
        targetCurrency: targetCurrency,
        targetAmount: newTarget,
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});