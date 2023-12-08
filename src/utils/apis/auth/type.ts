import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, {
    message: "Email is required",
  }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  nama: z.string().min(1, { message: "Nama minimal 1 huruf atau lebih" }),
  username: z.string().min(1, { message: "username is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  dateOfBirth: z
    .string()
    .min(1, { message: "Nama minimal 1 angka atau lebih" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  retypePassword: z.string().min(1, { message: "Password is required" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
