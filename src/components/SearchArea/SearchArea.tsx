import React from 'react'
import s from './search.module.scss'
import g from '../../app.module.scss'
import SmallCard from '../SmallCard/SmallCard'
import { testGoods } from '../../testGoods'
const SearchArea = () => {
    return (
        <div className={s.body}>
            <div className={g.container}>
                <div className={s.searchBlock}>
                    <input type="text" className={s.input} />
                    <div className={s.btn}>Search</div>
                </div>
                <div className={s.searchRes}>
                    <div className={s.resultWrap}>
                        {testGoods.map((el) => (
                            <SmallCard
                                key={el.id}
                                name={el.name}
                                imageUrl={el.imgUrl}
                                price={el.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchArea
