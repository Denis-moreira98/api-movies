import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

class CreateMovieController {
   async creteMovie(req: Request, res: Response) {
      try {
         const data = req.body;
         const movie = await MovieModel.create(data);
         return res.status(201).json(movie);
      } catch (error: any) {
         Logger.error(`Erro no sistema: ${error.message}`);
         return res.status(500).json({ error: "Por favor, tente mais tarde!" });
      }
   }
}

export default CreateMovieController;
