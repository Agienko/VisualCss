import React from "react";
import { NavLink } from "react-router-dom";
import s from './UppMenu.module.css'

const UppMenu = ({...props}) => (
    <div className={s.UppMenu_wrapper}>

        <header className={s.UppMenu_header}>
           <h2> Visual CSS </h2>
        </header>

        <ul className={s.UppMenu_ul} >
        {props.state.menuList.map(item => 
            <NavLink to={item.path} key={item.id}> 
                <li className={ item.id === props.state.selectedIndex ? s.li_selected : s.UppMenu_li} 
                    onClick={() => props.changePage(item.id)}>
                    {item.content} 
                </li> 
            </NavLink>)}
        </ul>

    </div> 
    )
export default UppMenu