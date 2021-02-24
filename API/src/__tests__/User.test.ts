import  request  from 'supertest';
import { app } from "../app";

describe("Users", () => {

    request(app).post("/users").send({
        email: "joao@example.com.br",
        name: "João Silva"
    });
});