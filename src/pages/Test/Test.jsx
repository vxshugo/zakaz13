import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/Footer/Footer"
import Quiz4 from "../../components/Test2/Test4";


const Test = () => {

    return (
        <div className='lesson'>
            <Navbar />
            <div className="head">
                <h4>Емтихан сұрақтары</h4>
            </div>
            <div className="docView">
                <div className="wrapper">
                    <Quiz4/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Test