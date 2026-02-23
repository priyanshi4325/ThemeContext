import { useContext } from "react";
import ThemeContext from "./ThemeContent";

export default function Content(){
    const {theme} = useContext(ThemeContext);

    const styles = {
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        marginTop: "10px"
    }

    return(
        <div style={styles}>
            <h2>{theme.toUpperCase()}{" "}THEME</h2>
            <p>This text is controlled by useContext.</p>
        </div>
    )
}