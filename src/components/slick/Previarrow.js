import React from 'react'

const Previarrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style,
            background: "rgb(208 206 206)",
            borderRadius: "50%",
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            padding: "4px"}} onClick={onClick}/>
    );
}

export default Previarrow