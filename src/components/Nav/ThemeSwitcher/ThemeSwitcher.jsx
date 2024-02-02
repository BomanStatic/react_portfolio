import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleTheme, selectIsDarkmode } from "../../../store/theme/themeSlice";
import "./ThemeSwitcher.css";
function ThemeSwitcher() {
    const theme = useSelector(selectIsDarkmode);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleTheme());
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme ? "dark" : "light");
    }, [theme]);
    return (
        <button className="theme__btn" aria-label="Change theme" onClick={handleClick}>
            {theme && <iconify-icon icon="ph:moon-bold" height="1.7rem"></iconify-icon>}
            {!theme && <iconify-icon icon="ph:sun-bold" height="1.7rem"></iconify-icon>}
        </button>
    );
}

export default ThemeSwitcher;
