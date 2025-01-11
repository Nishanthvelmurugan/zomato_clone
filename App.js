// import React from "react"
// import ReactDOM from "react-dom/client"
// import Header from "./src/components/header"

// const heading1 = React.createElement("h1", {id: "heading1"}, "welocme to react")
// const heading2 = React.createElement("h2", {id: "heading2"}, "hello nish")
// //babel(compiler) -> jsx code to react code i.e-> React.createElement -> React Element(objects) => HTML element
// const heading = <h1>hello!</h1> //jsx code - javascript xml
// const container = React.createElement("div", {id: "container"}, [heading1, heading2, heading])
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Header from './src/components/Header';

// const script = () => {
//     return (
//         <div>
//             <Header />
//             <div>This is app</div>
//         </div>
//     );
// };

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import DiningOut from "./src/components/DiningOut";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import NightLife from "./src/components/NightLife";
import TabOption from "./src/components/TabOption";
import Delivery from "./src/components/delivery/Delivery";
import DeliveryCollection from "./src/components/delivery/Deliverycollection";

const App = () => {
    const [activeTab, setActiveTab] = useState("Delivery");

    return (
        <div>
            <Header />
            <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    );
};

const getCorrectScreen = (tab) => {
    switch(tab) {
        case "Delivery":
            return <Delivery />;

        case "Dining Out":
            return <DiningOut />

        case "Night Life":
            return <NightLife />

        default:
            return <Delivery />
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);