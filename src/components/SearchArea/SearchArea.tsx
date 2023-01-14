import React from 'react'
import s from './search.module.scss'
import g from '../../app.module.scss'
const SearchArea = () => {
    return (
        <div className={s.body}>
            <div className={g.container}>
                <div className={s.searchBlock}>
                    <input type="text" className={s.input} />
                    <div className={s.btn}>Search</div>
                </div>
                <div className={s.searchRes}></div>
            </div>
        </div>
    )
}

export default SearchArea
