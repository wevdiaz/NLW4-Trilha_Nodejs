import 'reflect-metadata';
import express from 'express';
import "./database";

const app = express();

app.get("/", (req, res) => {
    return res.json({message: "NLW04 - Trilha Nodejs"})
});

app.post("/", (req, res) => {
    return res.json({ message: "Os dados foram salvos com sucesso!"})
});

app.listen(3333, () => console.log("Server is working!"));

