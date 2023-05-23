import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
const App = ()=> {
    return(
        <div>
            {/* <h2>Hi Shubham!!!</h2> */}
            <Navbar/>
            <HeroSection />
            <CardSection />
            <AppSection />
            <Footer />
        </div>
    )
}

export default App;