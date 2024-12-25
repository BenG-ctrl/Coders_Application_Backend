import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().email("Email is invalid"),
  password: z.string().min(8, "password must be 8 characters minimum"),
});

export const userSingupSchema = z.object({
  name: z.string().min(2, "name must be atleast 2 characters long"),
  email: z.string().email("Email is invalid"),
  password: z.string().min(8, "password must be 8 characters minimum"),
});

const Subject = ["math", "chemistry", "physics"];
export const challengeCreateSchema = z.object({
  title: z.string().min(2, "name must be atleast 2 characters long"),
  Category: z.enum(Subject),
  description: z.string().max(500),
});
