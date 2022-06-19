import {ReactNode} from "react";
import  "./card.scss"


interface CardInterface {
    children: ReactNode;
    type: "primary" | "secondary" | "tertiary";
}

export function Card({children, type}: CardInterface) {
    const colors = {
        primary: "#52CB45",
        secondary: "#5A27FA",
        tertiary: "#303065"
    }

    return (
        <div
            className="card"
            style={{
                background: colors[type],
            }}
        >
            {children}
        </div>
    );
}