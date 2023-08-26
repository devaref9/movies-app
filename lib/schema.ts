import { z } from "zod";

export const FormDataSchema = z.object({
  username: z
    .string()
    .nonempty("Username is required.")
    .min(6, { message: "Username must be at least 6 characters." }),
  email: z
    .string()
    .nonempty("Email is required.")
    .email("This is not a valid email."),
  password: z
    .string()
    .nonempty("Password is required.")
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    )
    .min(8, "Must be at least 8 characters in length"),
});
