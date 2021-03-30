import React,{useLayoutEffect,lazy, Suspense} from "react";
import {Route} from 'react-router-dom'
import { fetchCollectionsStart } from './../../redux/shop/shop.actions';
import { connect } from 'react-redux';

import Spinner from "../../components/spinner/spinner"
// If you want to get some props that is with {match} in the class you just do this.props
const CollectionsOverviewContainer = lazy(()=> import("../../components/collection-overview/collection-overview.container"))
const CollectionPageContainer = lazy(()=> import("../collection/collection.container"))


// uselayouteffect para que caso o programa leia do cache a collections e o useEffect no caso iria recarregar, mas o 
// layouteffect espera pagina carregar por completa para renderizar ai o cache nao faz o o fetchcollections ser chamado 2 vezes.
const ShopPage =({ fetchCollectionsStart, match })=>{
  useLayoutEffect(()=>{
    fetchCollectionsStart();
  },[fetchCollectionsStart])

  

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner/>}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    
    </div>
  );
  }
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);