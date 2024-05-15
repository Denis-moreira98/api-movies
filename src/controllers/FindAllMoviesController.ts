import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

class FindAllMoviesController {
   async findAllMovies(req: Request, res: Response) {
      try {
         const movies = await MovieModel.find();

         if (movies.length <= 0) {
            return res
               .status(200)
               .json({ message: "Nenhum filme cadastrado!" });
         }

         res.status(200).json(movies);
      } catch (e: any) {
         Logger.error(`Erro no sistema: ${e.message}`);
         return res.status(500).json({ error: "Por favor, tente mais tarde!" });
      }
   }
}

export default FindAllMoviesController;
