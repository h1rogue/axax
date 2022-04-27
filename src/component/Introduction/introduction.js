import React from 'react'
import "./introduction.css"
import img from "../../img/background.png"

function Introduction() {
  return (
    <div className='intro'>
        <div className='intro-l'>
            <div className='intro-l-wrapper'>
                <div className='intro-title'>Hello, I am</div>
                <div className='name'>Hirak Jyoti Borah</div>
                <div className='subject-wrapper'>
                <div className='subject' style={{fontWeight: '700',fontSize: '25px'}}>iOS developer </div>
                <div className='subject' style={{fontWeight: '300',fontSize: '23px'}}>C++ programmer </div>
                <div className='subject' style={{fontWeight: '200',fontSize: '20px'}}>Flutter developer</div>
                </div>
            </div>
        </div>
        <div className='intro-r'>
                <img src={img} className='intro-r-img'/>
        </div>
    </div>
  )
}

export default Introduction