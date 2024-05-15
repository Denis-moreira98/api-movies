import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

class RemoveMovieController {
   async removeMovie(req: Request, res: Response) {
      try {
         const id = req.params.id;
         const movie = await MovieModel.findById(id);

         if (!movie) {
            return res.status(404).json({ error: "filme não existe!" });
         }

         await movie.deleteOne({ _id: id });
         return res
            .status(200)
            .json({ message: "Filme removido com sucesso!" });
      } catch (e: any) {
         Logger.error(`Erro no sistema: ${e.message}`);
         return res.status(500).json({ error: "Por favor, tente mais tarde!" });
      }
   }
}

export default RemoveMovieController;
