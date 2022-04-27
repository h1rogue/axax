import React from 'react'
import "./about.css"
import img from "../../img/location.png"

function About() {
  return (
    <div className='about'> 
    <div className='about-l'>
        <div className='about-wrapper'>
        <div className='wrapped'>
        <div className='left-ed'>
        <div className='ed'>Education</div>
        <div className='height'></div>
        <div className='col'>National Institute Of Technology Silchar</div>
        <div className='location'>
        <img src={img} className='img'/>
        </div>
        <div className='date'>Silchar, Assam  2017-2021</div>
        <div className='cpi'>Computer Science & Engineering (CPI: 7.5)</div>
        <div className='height'/>
        <div className='col'>Army Public School Basistha</div>
        <div className='location'>
        <img src={img} className='img'/>
        </div>
        <div className='date'>Guwahati, Assam 2015-2017</div>
        <div className='cpi'>Class 12 <div className='science'>(SCIENCE)</div> - 93.4% </div>
        <div className='cpi'>Class 10 - 9.8 CGPA</div>
        </div>
        <div className='right-ed'>
        <div className='ed'>Work Experience</div>
        <div className='height'></div>
        <div className='col'>Deskneed Office and Supplies</div>
        <div className='location'>
        <img src={img} className='img'/>
        </div>
        <div className='date'>Guwahati, Assam  May 2019-Jul 2019</div>
        <div className='cpi'>Android developer intern.</div>
        <div className='para'>- Built an android app for delivery tracking and attendance management. </div>
        <div className='height'/>
        <div className='col'>MakeMyTrip</div>
        <div className='location'>
        <img src={img} className='img'/>
        </div>
        <div className='date'>Bangalore, Karnataka Jun 2021 - present</div>
        <div className='cpi'>Software Engineer</div>
        <div className='para'>- Worked in commons team which included task for adding new features to the home screen. </div>
        <div className='para'>- Worked in the flights team.</div>
        <div className='para'>- Handled b2b sector of flights for iOS.</div>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default About