import {ReactNode} from "react";
import  "./button.scss"


interface ButtonInterface {
    children: ReactNode;
    onClick?: () => void;
    type: "primary" | "secondary" | "tertiary" | "danger";
}

export function Button({children, type, onClick}: ButtonInterface) {

    const colors = {
        primary: "#52CB45",
        secondary: "#5A27FA",
        tertiary: "#303065",
        danger: "#FF0000"
    }

    return (
        <button
            className="button"
            style={{
                background: colors[type],
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}