import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const SubMenu = ({item}) =>{

    const [submenu, setSubmenu] = useState(false);

    const showMenu = () => setSubmenu(!submenu);

    return (
        <>
        <NavLink to={item.path} className="menuLink" onClick={item.subMenu && showMenu}>
            <div>
                {item.icon}
                <label>{item.title}</label>
            </div>
            <div>
                {item.subMenu && submenu ? item.iconOpen : item.subMenu ? item.iconClose : null}
            </div>
        </NavLink>
        {submenu && item.subMenu.map((item, index) => {
            return (
                <NavLink to={item.path} className="dropMenu" key={index}>
                    {item.icon}
                    <label>{item.title}</label>
                </NavLink>
            )
        })}
        </>
    )
}

export default SubMenu;