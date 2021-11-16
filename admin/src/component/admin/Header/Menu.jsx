import React from 'react';
import { MenuData } from './MenuData';
import SubMenu from './SubMenu';

const Menu = () => {
    
    return (
        <>
        <div className="menu">
            <div className="menu_content">
                {MenuData.map((item, index) => {
                    return <SubMenu item={item} key={index} />;
                })}

            </div>
        </div>
        </>
    )
}

export default Menu;