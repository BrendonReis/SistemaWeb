const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { request } = require('express');

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "banco"
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length == 0) {
            db.query("INSERT INTO usuarios (email, password) VALUES (? , ?)", [email, password], (err, response) => {
                if (err) {
                    return res.send(err);
                }

                return res.send({ msg: "Cadastrado realizado com sucesso!" })
            }
            );
        } else {
             return res.send({ msg: "Usuario já cadastrado!" })
        }
    });
});

app.post("/Login", (req, res) => {

    const email = req.body.emailLogin;
    const password = req.body.passwordLogin;

    db.query("SELECT * FROM usuarios WHERE email = ? AND password = ?", [email, password], (err, result) => {
        if (err) {
            return res.status(400).json({ err: err.array()});
        }
        if (result.length > 0) {
            return res.send({ msg: "Usuário logado com sucesso! Bem vindo.", ok: true });
        } else {
            return res.send({ msg: "Usuário não encontrado ou Senha incorreta!", ok: false});
        }
        
    })
});

app.post("/formulario", (req, res) => {

    const name = req.body.name;
    const especialidade = req.body.especialidade;
    const convenio = req.body.convenio;
    const medico = req.body.medico;
    const date = req.body.date;
    const hour = req.body.hour;
    const emailForm = req.body.emailForm;
    const tell = req.body.tell;
    const obs = req.body.obs;

    db.query("SELECT * FROM agendamento WHERE (name, especialidade, convenio, medico, date, hour, emailForm, tell, obs) = (?,?,?,?,?,?,?,?,?)", [name, especialidade, convenio, medico, date, hour, emailForm, tell, obs], (err, result) => {
        if (err) {
            
            res.send(err);
        }
        if (result.length == 0) {
            db.query("INSERT INTO agendamento (name, especialidade, convenio, medico, date, hour, emailForm, tell, obs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [name, especialidade, convenio, medico, date, hour, emailForm, tell, obs], (err, response) => {
                if (err) {
                    return res.send(err);
                }

                return res.send({ msg: "Formulário Cadastro com Sucesso!" })
            }
            );
        } else {
             return res.send({ msg: "Formulário já cadastrado no banco de dados!" })
        }
    });
});


app.listen(3001, () => {
    console.log("BEM VINDO A SWMPACH")
});