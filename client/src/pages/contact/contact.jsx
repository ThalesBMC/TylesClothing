import React from 'react'
import { ReactComponent as Logo } from './github.svg';
import { ReactComponent as Logo2 } from './linkedin.svg';
import { ReactComponent as Logo3 } from './gmail.svg';
import "./contact.scss"
const ContactPage=()=>(
    <div className="centerIcon">
        <div>
        <a  href="https://github.com/ThalesBMC"><Logo className="hoverIcon"/></a> 
        </div>
        <div>
        <a  href="https://www.linkedin.com/in/thalesbmc/"><Logo2 className="hoverIcon"/></a> 
        </div>
        <div>
        <a  href="mailto: thalesbmc@gmail.com"><Logo3 className="hoverIcon"/></a> 
        </div>
        
    </div>
  
    
)


export default ContactPage;