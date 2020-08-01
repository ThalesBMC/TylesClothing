import React from 'react'   
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.jsx'
import "./collections-overview.scss"
import { selectCollectionsForPreview} from '../../redux/shop/shop.selector'
import TopButton from "../top-button/top-button"
const CollectionsOverview =({collections})=>(
    <div>
        <div className='collections-overview'>  
            {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
        </div>
        <TopButton/>
    </div>

)
const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview}
  )
export default  connect(mapStateToProps)(CollectionsOverview)