import React, { useState } from 'react'
import "../sty/filters.css"

const deliveryFilters = [
    {
        id: 1,
        name: "Filter",
        img: <i className="fa-solid fa-sliders"></i>
    },
    {
        id: 2,
        name: "Rating 4.0+",
        img: <i class="fa-solid fa-star"></i>
    },
    {
        id: 3,
        name: "Delivery Time",
        img: <i class="fa-solid fa-truck"></i>
    },
    {
        id: 4,
        name: "Cuisines",
        img: <i class="fa-solid fa-bowl-food"></i>
    }
]

const Filters = () => {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const handleFilter = (filterName) => {
        setSelectedFilter(filterName)
    }

    return <div className='filter-wrapper'>
        <div className='max-width options'>
            {deliveryFilters.map((filter) => {
                return <div onClick={() => handleFilter(filter.name)}
                className='absolute-center filters' key={filter.id}>
                    <span className='filter-img'>{filter.img}</span>{filter.name}</div> //Since the icons are React components we should use the KEY and span tag
        })}</div>
    </div>

}

export default Filters