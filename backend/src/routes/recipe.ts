import { Request, Response } from "express"
import { RecipeModel } from "../models"

export const recipeMiddleware = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params
  const recipe = await RecipeModel.findById(id)
  if (recipe) {
    res.send(recipe)
  } else {
    res.status(404).send({ message: "Recipe not found" })
  }
}
