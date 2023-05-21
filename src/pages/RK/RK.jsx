import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/Footer/Footer"
import Button from "./Button";
import Quiz2 from "../../components/Test2/Test2";
import Quiz3 from "../../components/Test2/Test3";


const RP = () => {
    const [showComponentA, setShowComponentA] = useState(false);
    const [showComponentB, setShowComponentB] = useState(false);

    const handleShowComponentA = () => {
        setShowComponentA(true);
        setShowComponentB(false);
    };

    const handleShowComponentB = () => {
        setShowComponentA(false);
        setShowComponentB(true);
    };

    return (
        <div className='lesson'>
            <Navbar />
            <div className="head">
                <h4>РК</h4>
            </div>
            <div className="docView">
                <div className="wrapper">
                    <Button label="Тест РК 1" handleClick={handleShowComponentA} />
                    <Button label="Тест РК 2" handleClick={handleShowComponentB} />
                    {showComponentA && <Quiz2 />}
                    {showComponentB && <Quiz3 />}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RP