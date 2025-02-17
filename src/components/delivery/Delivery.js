import React from 'react'
import Filters from '../Filters'
import Deliverycollection from './Deliverycollection'
import Topbrands from './Topbrands'
import ExploreSection from '../ExploreSection'
import { restaurants } from '../../data/restaurants'


const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div className='max-width'>
      <Filters />
      <Deliverycollection />
      <Topbrands />
      <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in your location"/>
    </div>
  )
}

export default Delivery