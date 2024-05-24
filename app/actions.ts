"use server";
import { z } from "zod";

const formSchema = z.object({
    username: z.string().min(5, "Username should be at least 5 characters long."),
    email: z.string().email().regex(/@zod\.com$/, "Only @zod.com emails are allowed"),
    password: z.string().min(10, "Password should be at least 10 characters long.").regex(/\d/, "Password should contain at least on number (0123456789)")
});

type FormState = {
    fieldErrors: Record<string, string[]>;
    errors: string[];
    loginSuccessful: boolean;
};

export async function createAccount(formData: FormData): Promise<FormState> {
    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    };

    const result = formSchema.safeParse(data);
    if (!result.success) {
        const errorData = result.error.flatten();
        return { fieldErrors: errorData.fieldErrors, errors: [result.error.message], loginSuccessful: false };
    } else {
        return { fieldErrors: {}, errors: [], loginSuccessful: true };
    }
}
