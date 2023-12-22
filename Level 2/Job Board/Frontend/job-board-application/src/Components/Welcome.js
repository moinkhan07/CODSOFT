import React from 'react'
import welcome from '../Assets/welcome.png';

const Welcome = () => {
  return (
    <div id='welcome'>
        <div id='welcomeData'>
            <div id='leftWelcome'>
                <p>4536+ Jobs listed</p>
                <h1>Find your Dream Job</h1>
                <p className='informationWelcome'>We provide online instant cash loans with quick approval that suit your term length</p>
                <button>Upload Your Resume</button>
            </div>
            <div id='rightWelcome'>
                <img src={welcome} alt='welcome' />
            </div>
        </div>
    </div>
  )
}

export default Welcome