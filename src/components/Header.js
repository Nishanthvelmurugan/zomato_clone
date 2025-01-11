import React from 'react';
import '../sty/Header.css';

const Header = () => {
    return (<div className='max-width header'>
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt='zomato logo' className='header-logo'/>
        <div className='header-right'>
            <div className='header-location'>
                <div className='location-wrapper'>
                    <div className='location-icon-name'>
                        <div className='location-icon'>
                            <i class="fa-solid fa-location-dot absolute-center"></i>
                        </div>
                        <div>Vellore</div>
                    </div>

                    <div>
                        <i class="fa-solid fa-caret-down absolute-center"></i>
                    </div>
                    <div className='location-separator'></div>
                    <div className='header-search-bar'>
                        <i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
                        <input placeholder='Search for restaurant, cuisine or dish'className='search-box'/>
                    </div>
                </div>
            </div>
        </div>

        <div className='profile-wrapper'>
                    <img src="https://th.bing.com/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?rs=1&pid=ImgDetMain" alt="profile" className='header-profile-img'></img>
                    <span className='user-name'>Nishanth</span>
                    <i className="fa-solid fa-caret-down absolute-center profile-option-icon"></i>

        </div>
    </div>
    )
};

export default Header;