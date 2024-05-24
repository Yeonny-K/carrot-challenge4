import { useState } from "react";

type UseFormStateResult<T> = [T, (event: React.FormEvent<HTMLFormElement>) => void];

function useFormState<T>(action: (formData: FormData) => Promise<T>, initialState: T): UseFormStateResult<T> {
    const [state, setState] = useState(initialState);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const result = await action(formData);
        setState(result);
    };

    return [state, handleSubmit];
}

export default useFormState;
