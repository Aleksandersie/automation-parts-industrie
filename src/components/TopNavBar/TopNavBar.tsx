import React from 'react'
import global from '../../app.module.scss'
import s from './navBar.module.scss'
const TopNavBar = () => {
    const category = ['Home', 'Products', 'About', 'Contacts']

    return (
        <div className={s.navColor}>
            <div className={global.container}>
                <ul className={s.ul}>
                    {category.map((el) => (
                        <li className={s.button}>{el}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TopNavBar
