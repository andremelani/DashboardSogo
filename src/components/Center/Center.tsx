import {CSSProperties, ReactNode} from "react";
import "./center.scss"

interface CenterProps {
  children: ReactNode;
  style?: CSSProperties;
}

export function Center({children, style}: CenterProps) {
    return (
        <div style={style} className="container">
            {children}
        </div>
    )
}