import React, { useState, useContext } from "react";

const LangContext = React.createContext();
const UpdateLangContext = React.createContext();

export const useLanguage = () => {
    return useContext(LangContext);
};

export const useUpdateLang = () => {
    return useContext(UpdateLangContext);
};

export const LangProvider = ({ children, value }) => {
    //INITIAL LANGUAGE SELECTION 
    const defualtLang = localStorage.getItem("lang") === null ? 'en' : localStorage.getItem("lang")
    const [lang, setLang] = useState(defualtLang);
    // function switchhLang(){
    //     console.log(value)
    //     console.log("Triggred!!")
    //     setLang(value === 'en'? 'ar' : 'en') 
    //     console.log(lang)
    // }
    console.log(lang)
    return (
        <LangContext.Provider value={lang}>
            <UpdateLangContext.Provider value={setLang}>
                {children}
            </UpdateLangContext.Provider>
        </LangContext.Provider>
    );
};

export default LangProvider;