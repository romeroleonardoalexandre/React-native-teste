import React from 'react'
import Webview from "react-native"
const Product = ({navigation}) =>(
    <Webview source={{uri: navigation.state.params.product.url}} />

)
Product.navigationOptions = ({navigation}) => ({
    title: navigation.state.params.product.title
})
export default Product