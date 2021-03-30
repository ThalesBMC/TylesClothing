import React,{useEffect} from 'react'
import { connect } from "react-redux";
import { setSuccess } from '../../redux/success/sucess.actions'
import "./success-message.scss"
import { ReactComponent as Logo } from './success.svg';
const SuccessMessage=({dispatch,setSuccess})=>{
    useEffect(()=>{
        return()=>{
            setSuccess(false)
        };
    },[setSuccess]);

    return(
        <div className="center">
            <div className="alert success">
                <span className="closebtn" onClick={setSuccess}>&times;</span>  
                <strong>Success!</strong> Your payment was approved!
            </div>
            <Logo />
        </div>
        
    )
    }
const mapDispatchToProps = (dispatch) => ({
    setSuccess: () => dispatch(setSuccess()),
  });


export default connect(null, mapDispatchToProps)(SuccessMessage);