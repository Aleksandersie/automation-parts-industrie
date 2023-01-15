import React from 'react'
import s from './smallCard.module.scss'

interface ISmallCard {
    name: string
    imageUrl: string
    price: number
}

const SmallCard: React.FC<ISmallCard> = ({ name, imageUrl, price }) => {
    return (
        <div className={s.cardBody}>
            <p className={s.itemName}>{name}</p>
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <p className={s.priceValue}>{price}€</p>
            <div className={s.buyBtn}>Zum Shop</div>
            <div className={s.bottomText}>
                schnell lieferbar <br /> sello24.de
            </div>
        </div>
    )
}

export default SmallCard
