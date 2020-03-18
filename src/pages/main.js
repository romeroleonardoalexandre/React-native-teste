import React, { Component } from 'react'
//import api from '../services/api.js'

import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'

export default class Main extends Component {
    static navigationOptions = {
        title: "React Native Teste"
    }

    // observa alteracao as variaveis 
    state = {
        docs:[
            {
                _id:"10",
                title: "Primeiro",
                description: "Primeiro teste de listagem",
                url: "https://github.com/facebook/react-native",
            },
            {
                _id:"2",
                title: "Segundo",
                description: "Segundo teste de listagem",
                url: "https://github.com/facebook/react-native",
            },
            {
                _id:"3",
                title: "Terceiro",
                description: "Terceiro teste de listagem",
                url: "https://github.com/facebook/react-native",
            },
            {
                _id:"4",
                title: "Quarto",
                description: "Quarto teste de listagem",
                url: "https://github.com/facebook/react-native",
            },
            {
                _id:"5",
                title: "Quinto",
                description: "Quinto teste de listagem",
                url: "https://github.com/facebook/react-native",
            }
        ],
        moreDocs:[
            {
                _id:"6",
                title: "Sexto",
                description: "sexto teste de listagem",
                url: "https://github.com/facebook/react-native",
            },
            {
                _id:"7",
                title: "Setimo",
                description: "Setimo teste de listagem",
                url: "https://github.com/facebook/react-native",
            },
            {
                _id:"8",
                title: "Oitavo",
                description: "Oitavo teste de listagem",
                url: "https://github.com/facebook/react-native",
            }
        ],
        page: 1,
        productInfo:{
            "total": 9,
            "limit": 5,
            "page": "1",
            "pages": 2
        }
    }

    componentDidMount(){
        this.loadProducts()
    }

    loadProducts = async (page = 1) =>{
        //const response = await api.get(`/products?page=${page}`)

        //const { docs, ...productInfo } = response.data

        //console.log(docs)

        /*this.setState({
            docs:[... this.state.docs, ...docs],
            productInfo,
            page
        })*/

        this.setState({
            docs:[... this.state.docs, ...this.moreDocs],
            productInfo,
            page
        })
        
    }

    renderItem = ({item}) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("Product", { product: item})
                }
            }>
            </TouchableOpacity>
        </View>
    )

    loadMore = () => {
        const{ page, productInfo } = this.state
        if(page === productInfo.pages) return
        const pageNumber = page + 1
        this.loadProducts(pageNumber)
    }

    render() {
        
        return (<View>
            <FlatList 
            data={this.state.docs} 
            keyExtractor={item=> item._id} 
            renderItem={this.renderItem} 
            contentContainerStyle={StyleSheet.productContainer}
            onEndReached={this.loadMore}
            onEndReachedThreshold={0.1}>

            </FlatList>
        </View>)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fafafa"
    },
    list: {
        padding:20
    },
    productContainer:{
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius:5,
        padding:20,
        marginBottom:20
    },
    productTitle:{
        fontSize:18,
        fontWeight: "bold",
        color: "#333"
    },
    productDescription:{
        fontSize:16,
        color: "#999",
        marginTop:5,
        lineHeight: 24
    },
    peoductButton:{
        height:42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'#DA552F',
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
    }


})