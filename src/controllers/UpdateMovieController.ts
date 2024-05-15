import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

class UpdateMovieController {
   async updateMovie(req: Request, res: Response) {
      try {
         const id = req.params.id;
         const data = req.body;

         const movie = await MovieModel.findById(id);
         if (!movie) {
            return res.status(404).json({ error: "O filme não existe!" });
         }

         await MovieModel.updateOne({ _id: id }, data);
         return res.status(200).json(data);
      } catch (e: any) {
         Logger.error(`Erro no sistema: ${e.message}`);
         return res.status(500).json({ error: "Por favor, tente mais tarde!" });
      }
   }
}

export default UpdateMovieController;
