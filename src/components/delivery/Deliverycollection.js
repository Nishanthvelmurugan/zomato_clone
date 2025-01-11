import React from 'react'
import Nextarrow from '../slick/Nextarrow'
import Previarrow from '../slick/Previarrow';
import Slider from 'react-slick';
import Itemslide from './Itemslide';

const deliveryItems = [
  {
    id: 1,
    name: 'Birynai',
    cover: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png"
  },
  {
    id: 2,
    name: 'Chicken',
    cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
  },
  {
    id: 3,
    name: 'Pizza',
    cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
  },
  {
    id: 4,
    name: 'Veg Meal',
    cover: "https://b.zmtcdn.com/data/dish_photos/bda/9cdab6d5f275b8d2532e3878134ddbda.jpg"
  },
  {
    id: 5,
    name: 'Fried Rice',
    cover: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
  },
  {
    id: 6,
    name: 'Thali',
    cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
  },
  {
    id: 7,
    name: 'Cake',
    cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
  },
  {
    id: 8,
    name: 'South Indian',
    cover: "https://b.zmtcdn.com/data/o2_assets/e1b5ebed94e25d832f8dea96824537521678798686.png"
  },
  {
    id: 9,
    name: 'Burger',
    cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
  },
  {
    id: 10,
    name: 'Paratha',
    cover: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
  },
  {
    id: 11,
    name: 'Dosa',
    cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
  },{
    id: 12,
    name: 'Noodles',
    cover: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
  }
]

//slick code from cdn website
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <Nextarrow />,
  prevArrow: <Previarrow />
};

const Deliverycollection = () => {
  return (
    <div className='delivery-collection'>
      <div className='max-width'>
        <div className='collection-title'>Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <Itemslide item={item}/>;
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Deliverycollection