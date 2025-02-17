import React from 'react'
import ExploreCard from './ExploreCard'
import './sty1/exploreSection.css'

const ExploreSection = ({list=[], collectionName}) => {
    return (
    <div className='max-width explore-section'>
        <div className='collection-title'>{collectionName}</div>
        <div className='explore-grid'>
        {list.length > 0 ? (
                    list.map((restaurant) => {
                        return <ExploreCard key={restaurant.id} restaurant={restaurant} />;
                    })
                ) : (
                    <div>No restaurants available</div>
                )}
            </div>
        </div>
    )
}

export default ExploreSection