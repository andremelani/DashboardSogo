import "../Input/input.scss";
import {ChangeEvent, CSSProperties, forwardRef, ForwardRefRenderFunction} from "react";
import InputMask from "react-input-mask";

interface InputInterface {
    label: string;  
    id?: string,
    disabled?: boolean;
    value?: string;
    name?: string;
    style?: CSSProperties;
    type: "cpf" | "cep" | "date";
    mask:string;
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
        mask,
        ...rest
    },
    ref
) => {

    const format = {
        cpf:"999.999.999-99",
        cep:"99999-999",
        date:"99/99/9999"
    }


    return (
        <div className="formGroup">
            <label htmlFor={name} className="label">
                <p className="inMoblie">{label}</p>
            </label>
            <InputMask
                mask={format[type]}
                onChange={onChange}
                disabled={disabled}
                className="input"
                value={value}
                name={name}
                id={name}
                inputRef={ref}
                {...rest}
            />
        </div>
    );
};

export const MaskInput = forwardRef(InputBase);
