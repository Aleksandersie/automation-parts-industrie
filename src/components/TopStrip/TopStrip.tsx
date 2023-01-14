import React from 'react'
import s from './style.module.scss'
import g from '../../app.module.scss'
const TopStrip = () => {
    return (
        <div className={s.topStrip}>
            <div className={`${g.container}`}>
                <div className={s.stripContainer}>
                    <div className={s.logo}>
                        <p className={s.firstLetter}>Automation</p>
                        <p className={s.firstLetter}>Parts</p>
                        <p className={s.firstLetter}>Industrie</p>
                    </div>
                    <div className={s.login}>Login or Register</div>
                </div>
            </div>
        </div>
    )
}

export default TopStrip
