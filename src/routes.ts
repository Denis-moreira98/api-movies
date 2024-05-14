import { Router } from "express";

//controllers
import CreateMovieController from "./controllers/CreateMovieController";

// Middlewares
import { validate } from "./middlewares/handlevalidation";
import { movieCreateValidation } from "./middlewares/movieValidation";

const router = Router();

router.post(
   "/movie",
   movieCreateValidation(),
   validate,
   new CreateMovieController().creteMovie
);

export { router };
