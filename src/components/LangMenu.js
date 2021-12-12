import '../Styles/LangMenu.css'
import { useState } from 'react';
import { MdOutlineLanguage} from 'react-icons/md';
import {IoIosArrowDown} from 'react-icons/io';
import {useUpdateLang } from '../context/langContext';


export default function LangMenu() {
    const defualtLang = localStorage.getItem("lang")
    const [showMenu, setShowMenu] = useState('false')

    //FOR THE DROP DOWN MENU HIGHLIGHT EFFECT
    const [engSelected, setEngSelected] = useState(defualtLang === 'en'? 'true': 'false')
    const [arSelected, setArSelected] = useState(defualtLang === 'ar'? 'true': 'false')

    const updatLang = useUpdateLang();
    // updatLang(defualtLang)

    const iconClicked = () => {
        showMenu === 'true' ? setShowMenu('false') : setShowMenu('true')
    }

    const EngClicked = () => {
        setEngSelected('true')
        setArSelected('false')
        localStorage.setItem("lang", "en")
        // setLang('en')
        updatLang('en')
        // props.updateLang('en')
        setTimeout(() => {
            setShowMenu('false')
        }, 2000);
    }
    const ArClicked = () => {
        setArSelected('true')
        setEngSelected('false')
        localStorage.setItem("lang", "ar")
        updatLang('ar')
        // props.updateLang('ar')
        setTimeout(() => {
            setShowMenu('false')
        }, 2000);
    }
    return (
        <div className='LangMenu'>
            <div className="LangPicker" onClick={iconClicked}>
                <MdOutlineLanguage className="LangPickerIcons" size={30}/> 
                <IoIosArrowDown className="LangPickerIcons" size={24}/>
            </div>
            <div className='LangOptions' display={showMenu}>
                <div className='LangOptionsText' onClick={EngClicked} display={engSelected}> <b>English</b> </div>
                <div className='LangOptionsText' onClick={ArClicked} display={arSelected}> <b>العربية</b> </div>
            </div>
        </div>
    )
}
