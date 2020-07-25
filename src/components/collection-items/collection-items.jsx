import React,{useLayoutEffect} from "react";
import CustomButton from "../button/button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./collection-items.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

//The CustomButton Receives the classname because the collection itemsStyle needs to use with the scss otherwise it wont need.
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  useLayoutEffect(()=>{
    AOS.init({duration : 2000}
  )},[])

  return (
    <div data-aos='flip-right' data-aos-duration="2500" className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted className="custom-button" > 
        ADD TO CART
      </CustomButton>
      
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
