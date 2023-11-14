import { Dishes } from "../../models/Dishes"

export const getCategoryButtons = (details: Dishes) => {
  const categoryArray = details.map(detail => detail.category)
  const categoryArrayNoDuplicates = Array.from(new Set(categoryArray))
  return categoryArrayNoDuplicates.map(category => {
    return {
      label: `Stampa ${category}`,
      value: category,
    }
  })
}