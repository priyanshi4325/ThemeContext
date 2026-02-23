import { useContext } from "react";
import ThemeContext from "./ThemeContent";

export default function Navbar(){
    const {toggleTheme} = useContext(ThemeContext);

    return(
        <div>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    )
}