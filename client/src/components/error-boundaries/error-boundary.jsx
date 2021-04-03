import React from 'react'
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from "./error-boundary.styles"
class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state={
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return{
            hasError: true
        }
    }
    componentDidCatch(error,info){
        console.error(error)
    }
    render() {
        if(this.state.hasError) {
            return(
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/QIxIKBH.png"/>
                    <ErrorImageText>This page is probably a Ghost</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary