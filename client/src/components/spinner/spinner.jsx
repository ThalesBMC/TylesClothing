import React from 'react'
import {SpinnerOverlay} from "./spinner.styles"
import Logo from "../with-spinner/loaf-fidget-spinner2.svg"
const Spinner = ()=>(
    <SpinnerOverlay>
       <img src={Logo} alt="loading..." />
    </SpinnerOverlay>
)

export default Spinner