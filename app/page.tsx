"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import useFormState from "./useFormState";
import { createAccount } from "./actions";
import { EnvelopeIcon, KeyIcon, UserIcon } from "@heroicons/react/16/solid";

type FormState = {
    fieldErrors: Record<string, string[]>;
    errors: string[];
    loginSuccessful: boolean;
};

export default function Login() {
    const [state, handleSubmit] = useFormState<FormState>(createAccount, { fieldErrors: {}, errors: [], loginSuccessful: false });

    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 mt-20 *:font-medium">
                <h1 className="text-center text-2xl">🔥</h1>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <FormInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    errors={state.fieldErrors?.email}>
                    <span className="mr-2"><EnvelopeIcon className="h-4 w-4" /></span>
                </FormInput>

                <FormInput
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                    errors={state.fieldErrors?.username}>
                    <span className="mr-2"><UserIcon className="h-4 w-4" /></span>
                </FormInput>

                <FormInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    errors={state.fieldErrors?.password}>
                    <span className="mr-2"><KeyIcon className="h-4 w-4" /></span>
                </FormInput>

                <FormButton text="Log in" />

                {state.loginSuccessful && state.errors.length === 0 && (
                    <div className="bg-green-500 rounded-md w-full h-10 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-3 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h1 className="text-l font-semibold text-justify">Welcome back!</h1>
                    </div>
                )}
            </form>
        </div>
    );
}
