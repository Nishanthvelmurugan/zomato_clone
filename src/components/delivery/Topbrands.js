import React from 'react'
import Nextarrow from '../slick/Nextarrow'
import Previarrow from '../slick/Previarrow';
import "../sty1/Topbrands.css"
import Slider from 'react-slick';

const topBrands = [
        { name: "Mehfil", time: "34 min", cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d76be28e0885f4563a1dbaf3a45f4b74_1635882663.png?output-format=webp" },
        { name: "Pista House Bakery", time: "23 min", cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f0751237a0f648cf23571ee0909add421726051487.png?output-format=webp" },
        { name: "Pista House", time: "27 min", cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d48b21eea54ece0505a506cce1fd30331726048934.png?output-format=webp" },
        { name: "KFC", time: "30 min", cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726681832.png?output-format=webp" },
        { name: "Shah Ghouse Hotel & Restaurant", time: "23 min", cover: "https://b.zmtcdn.com/data/brand_creatives/logos/8e611fa769c66049e2af45b00b1d8d52_1635882594.png?output-format=webp" },
        { name: "Domino's Pizza", time: "25 min", cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252531.png?output-format=webp"},
        { name: "Cream Stone Ice Cream", time: "18 min", cover: "https://b.zmtcdn.com/data/brand_creatives/logos/8c0e702a0831f5a8b108cd7edbc48d67_1728976747.png?output-format=webp" },
        { name: "Burger King", time: "28 min", cover: "https://b.zmtcdn.com/data/brand_creatives/logos/a6927d83d9185b7788814049b4a9fc8c_1726607812.png?output-format=webp" },
        { name: "McDonald's", time: "31 min", cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5c1c97764d187c1e4dc1dbdea54c7318_1726684167.png?output-format=webp" },
        { name: "Scoops Ice Cream", time: "19 min", cover: "https://b.zmtcdn.com/data/brand_creatives/logos/fad2c2110ea6f86357fa4628712903631731434423.png?output-format=webp" }
];

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <Nextarrow />,
    prevArrow: <Previarrow />
};

const Topbrands = () => {
    return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>

        {topBrands.map((brand) => {
            return <div>
                <div className='top-brand-cover'>
                    <img src={brand.cover} className='top-brand-img' alt={brand.cover}/>
                </div>
                <div className='top-brand-name'>{brand.name}</div>
                <div className='time'>{brand.time}</div>
            </div>
        })}
        </Slider>
    </div>)
}

export default Topbrands