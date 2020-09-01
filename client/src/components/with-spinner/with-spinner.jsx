import React from 'react'
import {SpinnerOverlay} from "./with-spinner.styles"
import Logo from "./Blue and Green Logistics Service Provider Logo (1).gif"
// this is a high order component that receives a component and does something 

const  WithSpinner = WrappedComponent => {
    const Spinner=({isLoading, ...otherProps})=> {
    return isLoading ? (
        <SpinnerOverlay>
            <img src={Logo} alt="loading..." />
        </SpinnerOverlay>
 
       
    ):(
        <WrappedComponent {...otherProps}/> 
    
    )
    }
    return Spinner;
}

export default WithSpinner




//
