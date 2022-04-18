import React from 'react'
import { GrMapLocation, GrContactInfo, GrMail, GrGithub } from "react-icons/gr";

const Contact = () => {
  return (
    <div>
        <h1 className='App-name'>
             <br /><span>Name: MARTA ASSEFA</span>
        </h1>


        <div className="app-contact-de">
            <div className="row">
                <GrMapLocation  className="icon" />
                <p>Addis Ababa, Ethiopia</p>
            </div>

            <div className="row">
                <GrContactInfo  className="icon"/>
                <p>(+251) 931204023</p>
            </div>

            <div className="row">
               <GrMail  className="icon"/>
                <p>martaassefa@gmail.com</p>
            </div>

            <div className="row">
                <GrGithub className='icon'/>
                <p>https://github.com/Marta233</p>
            </div>
            
        </div>
    </div>
  )
}

export default Contact