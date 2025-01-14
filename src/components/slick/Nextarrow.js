import React from 'react'
import "../sty1/Itemslide.css"

const Nextarrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className='na'>
        <div className={className} style={{ ...style,
            background: "rgb(208 206 206)",
            borderRadius: "50%",
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            padding: "4px"}
        } onClick={onClick}/>
    </div>);
}

export default Nextarrow