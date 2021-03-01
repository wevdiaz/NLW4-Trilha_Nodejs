import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { AppError } from "../errors/AppError";

class AnswerController {

    async execute(req: Request, res: Response) {
        const { value } = req.params;
        const { u } = req.query;

        const surveyUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveyUsersRepository.findOne({
            id: String(u)
        });

        if(!surveyUser) {
            throw new AppError("Survey User does not exists!");           
        }

        surveyUser.value = Number(value);

        await surveyUsersRepository.save(surveyUser);

        return res.json(surveyUser);
    }
}

export { AnswerController }