import React, {useState} from 'react'
import { useTranslation } from "react-i18next"

function SwitchLang() {
    const [ activeBtn, setActiveBtn ] = useState("vi")
    const { i18n } = useTranslation();

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language);
        setActiveBtn(language)
    };

    return (
        <div className="header__top-item--switchLang">
            <button
                className={`button ${activeBtn === "vi" && "button-active"}`}
                onClick={() => handleChangeLanguage("vi")}
                style={{borderRadius: "8px 0 0 8px"}}
            >VI</button>
            <button
                className={`button ${activeBtn === "en" && "button-active"}`}
                onClick={() => handleChangeLanguage("en")}
                style={{borderRadius: "0 8px 8px 0"}}
            >EN</button>
        </div>
    )
}

export default SwitchLang
