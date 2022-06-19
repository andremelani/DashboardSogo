import "./title.scss"

interface TitleProps {
    text: string;
    size: "small" | "medium" | "large";
}

export function Title({text, size}: TitleProps) {

    const sizeFont = {
        small: "0.80rem",
        medium: "1.1rem",
        large: "1.5rem"
    }

    return (
        <div
            className="containerTitle"
        >
            <p style={{
                color: "#002743",
                fontWeight: 800,
                fontSize: sizeFont[`${size}`],
                fontFamily: "Visby Round CF, Medium"
            }}>
                {text}
            </p>
            <div className="separador"></div>
        </div>
    )
}