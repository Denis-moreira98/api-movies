import { Router } from "express";

//controllers
import CreateMovieController from "./controllers/CreateMovieController";
import FindMovieByIdController from "./controllers/FindMovieByIdController";

// Middlewares
import { validate } from "./middlewares/handleValidation";
import { movieCreateValidation } from "./middlewares/movieValidation";

const router = Router();

router.post(
   "/movie",
   movieCreateValidation(),
   validate,
   new CreateMovieController().creteMovie
);
router.get("/movie/:id", new FindMovieByIdController().findMovieById);

export { router };
