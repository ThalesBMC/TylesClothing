
import React from 'react'
import "./top-button.scss"




const TopButton=({position})=>{

  const scrollToTop = () => {
        window.scrollTo(0, 0)
      }

   
    return(
      <div className="bottom" onClick={() => scrollToTop()}>  
        <div> &#129045;</div>
        <div className="apagar">TOP</div>
      </div>)
    }
export default TopButton
 