// @ts-nocheck

import { use } from "react";
import ThemeContext from "../../context/ThemeContext";
import ThemeButton from '../UI/ThemeButton/ThemeButton'

export default function Footer() {
   //const value = useContext(ThemeContext)
   const themeContext = use(ThemeContext)
    return (
        
        <p className={`text-${themeContext.color}`}>
            Stopka
            <ThemeButton />
        </p>
        
             
    )
}