import { Router } from "express";

//controllers
import CreateMovieController from "./controllers/CreateMovieController";
import FindMovieByIdController from "./controllers/FindMovieByIdController";
import FindAllMoviesController from "./controllers/FindAllMoviesController";
import RemoveMovieController from "./controllers/RemoveMovieController";
import UpdateMovieController from "./controllers/UpdateMovieController";

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
router.get("/movies", new FindAllMoviesController().findAllMovies);
router.delete("/movie/:id", new RemoveMovieController().removeMovie);
router.patch(
   "/movie/:id",
   movieCreateValidation(),
   validate,
   new UpdateMovieController().updateMovie
);

export { router };
