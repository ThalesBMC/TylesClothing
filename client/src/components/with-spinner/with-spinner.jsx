import React from 'react'
import Spinner from "../spinner/spinner.jsx"

// this is a high order component that receives a component and does something 

const  WithSpinner = WrappedComponent => ({isLoading, ...otherProps})=> {
    return isLoading ? (
      <Spinner/>
       
    ):(
        <WrappedComponent {...otherProps}/> 
    
    )
    }



export default WithSpinner




//
