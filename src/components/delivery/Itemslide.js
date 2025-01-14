import React from 'react';
import '../sty1/Itemslide.css'

const Itemslide = ({item}) => {
    return (
        <div>
    <div className='slick-item-cover'>
        <img src={item.cover} className='slick-item-img' alt={item.name}/>
        </div>
        <div className='slick-item-name'>{item.name}</div>
    
    </div>)
}

export default Itemslide