import { model, Schema } from "mongoose";

const movieSchema = new Schema(
   {
      title: { type: "string" },
      rating: { type: "string" },
      description: { type: "string" },
      director: { type: "string" },
      stars: { type: "string" },
      poster: { type: "string" },
   },
   {
      timestamps: true,
   }
);

export const MovieModel = model("Movie", movieSchema);
