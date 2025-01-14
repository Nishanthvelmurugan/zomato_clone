import React from 'react'
import Filters from '../Filters'
import Deliverycollection from './Deliverycollection'
import Topbrands from './Topbrands'
import Explore from '../Explore'

const Delivery = () => {
  return (
    <div className='max-width'>
      <Filters />
      <Deliverycollection />
      <Topbrands />
      <Explore />
    </div>
  )
}

export default Delivery