import React from 'react'
import g from '../../app.module.scss'
import s from './img.module.scss'
// @ts-ignore
import img from './Rectangle 1.png'
const TopImg = () => {
    return (
        <div className={s.back}>
            <div className={g.container}>
                <img src={img} alt="" width={1200} height={400} />
            </div>
        </div>
    )
}

export default TopImg
