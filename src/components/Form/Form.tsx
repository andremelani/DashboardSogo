import { FormEvent, ReactNode} from "react";
import  "./form.scss"


interface FormInterface {
    children: ReactNode;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export function Form({children, onSubmit}: FormInterface) {
    return (
        <form
            onSubmit={onSubmit}
            className="form"
        >
            {children}
        </form>
    );
}