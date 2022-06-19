import "./input.scss";
import {ChangeEvent, CSSProperties, forwardRef, ForwardRefRenderFunction, HTMLInputTypeAttribute} from "react";

interface InputInterface {
    label: string;
    id?: string,
    disabled?: boolean;
    value?: string;
    name?: string;
    style?: CSSProperties;
    type?: HTMLInputTypeAttribute;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputInterface> = (
    {
        label,
        disabled,
        value,
        name,
        onChange,
        id,
        type,
        ...rest
    },
    ref
) => {


    return (
        <div className="formGroup">
            <label htmlFor={name} className="label">
                <p className="inMoblie">{label}</p>
            </label>
            <input
                type={type}
                onChange={onChange}
                disabled={disabled}
                className="input"
                value={value}
                name={name}
                id={name}
                ref={ref}
                {...rest}
            />
        </div>
    );
};

export const Input = forwardRef(InputBase);
