import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./slider.scss"
import { withRouter } from "react-router-dom";
class DemoCarousel extends Component {
    //if I need a carrousel
    // the data came from filter that is in the collection preview but i can change...
    //it was const filtered= items.filter()
    // so i can put in that way and put filtered.map that will work fine.
    render() {
        return (
            <Carousel stopOnHover interval={5000} transitionTime={1000} centerMode centerSlidePercentage={35} emulateTouch autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} useKeyboardArrows className="tamanho">
                <div onClick={() => this.props.history.push("shop/jackets")}>
                    <img src={this.props.filtered[0].imageUrl} alt="teste2"  className="teste" />
                </div>
                <div onClick={() => this.props.history.push("shop/sneakers")}>   
                    <img src={this.props.filtered[1].imageUrl} alt="teste1" className="teste"/>

                </div>
                <div onClick={() => this.props.history.push("shop/hats")}>
                    <img src={this.props.filtered[2].imageUrl} alt="teste3" className="teste" />
                   
                </div>
                <div onClick={() => this.props.history.push("shop/hats")}>
                    <img src={this.props.filtered[3].imageUrl} alt="teste4" className="teste" />
                   
                </div>
                
            </Carousel>
        );
    }
}
export default withRouter(DemoCarousel);