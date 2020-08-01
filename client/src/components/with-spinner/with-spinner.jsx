import React from 'react'
import {SpinnerOverlay} from "./with-spinner.styles"
import { ReactComponent as Logo } from './rocket.svg';
// this is a high order component that receives a component and does something 

const  WithSpinner = WrappedComponent => {
    const Spinner=({isLoading, ...otherProps})=> {
    return isLoading ? (
    <SpinnerOverlay>
        <Logo/>
    </SpinnerOverlay>
       
    ):(
        <WrappedComponent {...otherProps}/> 
    
    )
    }
    return Spinner;
}

export default WithSpinner




//
