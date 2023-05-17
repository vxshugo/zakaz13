import React from 'react'
import Catalog from '../../components/Catalog/Catalog'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/main/Main'
import Navbar from '../../components/navbar/Navbar'
import "./mainPage.css"
import Header from '../../components/Header/Header'
const MainPage = () => {
    return (
        <div>
            <Header/>
            <Navbar />
            <Main />
            <div className='Catalog__block'>
                <h2>Жинақтар</h2>
                <div className='catalog__flex'>
                    <Catalog link={"/razdel/test"} name={"Тест"} option={"Тест сұрақтары"}/>
                    <Catalog link={"/razdel/praktika"} name={"Практика"} option={"ПРАКТИКАЛЫҚ ЖҰМЫС"}/>
                    <Catalog link={"/razdel/lesson"} name={"Лекция"} option={"Тігін шаруашылығы бойынша лекция"}/>
                    <Catalog link={"/razdel/srs"} name={"СРС"} option={""}/>
                    <Catalog link={"/razdel/rp"} name={"РК"} option={""}/>
                    <Catalog link={"/razdel/mainTest"} name={"Емтихан сұрақтары"} option={""}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage