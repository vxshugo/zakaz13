import React from 'react'
import './main.css'
import background from './backgroundImage.png';

const Main = () => {
  return (
    <div className="main">
      <div className="main-background" style={{backgroundImage: `url(${background})`}} />
      <div className="main-container">
        <div className="main-content">
          <div className="main-text">
            Заманауи технологиялық тігін жабдықтарында жұмыс
          </div>
          <div className="main-text-2">
            Жұмысты атқарған <span style={{color: "#FDD400"}}>Алыпысбаева С.А.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main