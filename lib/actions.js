"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const isInvalidText = (text) => !text || text.trim() === "";

const isInvalidMeal = (meal) => {
  return Object.entries(meal).some((key, val) => {
    if (key !== "image") {
      if (key !== "email") {
        return isInvalidText(val);
      }
      return isInvalidText(val) || !val.includes("@");
    }
    !val || val.size === 0;
  });
};

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  console.log(meal);

  if (isInvalidMeal(meal)) {
    return {
      message: "Invalid input.",
    };
  }
  await saveMeal(meal);
  redirect("/meals");
}
