import React from 'react'
import '../sty/tabOption.css'

const tabs = [
    {
        id: 1,
        name: 'Dining Out',
        active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
        back_drop: "#E5F3F3",
        nonactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
        },
        
    {
        id: 2,
        name: 'Delivery',
        active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
        back_drop: "#FCEEC0",
        nonactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
        },

    {
        id: 3,
        name: 'Night Life',
        active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        back_drop: "#EDF4FF",
        nonactive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
    }
];

const TabOption = ({activeTab, setActiveTab}) => {
    return <div className='tab-option'>
        <div className='max-width options-wrapper'>
            {tabs.map((tab) => {
                return <div onClick={() => setActiveTab(tab.name)} className= {`tab-item absolute-center curser-pointer ${activeTab===tab.name && "active-tab"}`}>
                    <div className='tab-image-container absolute-center' style={{backgroundColor: `${activeTab===tab.name ? tab.back_drop : ""}`}}>
                        <img className= "tab-image" alt= {tab.name} src={activeTab===tab.name ? tab.active_img : tab.nonactive_img}/>
                    </div>
                    <div className='tab-name'>{tab.name}</div>
                </div>
            })}
        </div>
    </div>
}

export default TabOption;