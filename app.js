const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))
app.use(express.static('SubStylesheet'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/external', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/external.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/NoStylesheet', function (req, res) {
    res.sendFile(path.join(__dirname + '/Substylesheet/Nostylesheet.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/Stylesheet1', function (req, res) {
    res.sendFile(path.join(__dirname + '/Substylesheet/Stylesheet1.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/Stylesheet2', function (req, res) {
    res.sendFile(path.join(__dirname + '/Substylesheet/Stylesheet2.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/Stylesheet3', function (req, res) {
    res.sendFile(path.join(__dirname + '/Substylesheet/Stylesheet3.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/Stylesheet4', function (req, res) {
    res.sendFile(path.join(__dirname + '/Substylesheet/Stylesheet4.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/main', function (req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
    //__dirname : It will resolve to your project folder.
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))