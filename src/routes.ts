import { Router } from "express";

//controllers
import CreateMovieController from "./controllers/CreateMovieController";
import FindMovieByIdController from "./controllers/FindMovieByIdController";

// Middlewares
import { validate } from "./middlewares/handleValidation";
import { movieCreateValidation } from "./middlewares/movieValidation";
import FindAllMoviesController from "./controllers/FindAllMoviesController";
import RemoveMovieController from "./controllers/RemoveMovieController";

const router = Router();

router.post(
   "/movie",
   movieCreateValidation(),
   validate,
   new CreateMovieController().creteMovie
);
router.get("/movie/:id", new FindMovieByIdController().findMovieById);
router.get("/movies", new FindAllMoviesController().findAllMovies);
router.delete("/movie/:id", new RemoveMovieController().removeMovie);

export { router };
