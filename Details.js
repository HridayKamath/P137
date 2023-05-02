import React, Component from react
import {
    View,
    Text,
    SafeAreaView,
    Flatlist,
    Alert,
    StyleSheet
}

export default class DetailsScreen extends Component {
    constructor(props){
    super(props);
    this.state = {
    listData: [],
    url: "http://localhost:5000"
    }
    }
    ComponentDidMount(){
    this.getPlanet()
    }

    getPlanets = () => {
    const{url} = this.state;
    axios.get(url)
    .then( response => {
    return this.setState(({
    listData: response.data.data
    }));
    })
    .catch(error => {
    Alert.alert("Error")
    })
    }

    render(){
    return{
        <view>
            <text>
                Home Screen
            </text>
        </view>
    }
    }
}

renderItem = ({item, index}) => (
    <ListItem>
    key = Index
    title = "Planet"
    subtitle = "Distance from Earth"
    titleStyle = {styles.title}
    containerStyle =   {styles.listContainer}
    bottomDivider
    chevron
    on Press = {() ==> 
                this.props.navigation(planet_name)}
        
)

return (
    <View style = {styles.Container}>
    <SafeAreaView/>
    <View style={styles.upperContainer}
    >
    <textStyle = {styles.headertext}> Planets World </Text>
    <View style = {styles.lowercontainer}>
    <FlatList
    keyExctractor = {this.keyExtractor}
    data = {this.state.listdata}
    renderItem = {this.renderItem}
    </View>
    </View>
)

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#edc988"
},
upperContainer: {
flex: 0.1,
justifyContent: "center",
alignItems: "center"
},
headerText: {
fontSize: 30,
fontWeight: "bold",
color: "#132743"
},
lowerContainer: {
flex: 0.9
},
emptyContainer: {
flex: 1,
justifyContent: "center",
alignItems: "center"
},
emptyContainerText: {
fontSize: 20
},
title: {
fontSize: 18,
fontWeight: "bold",
color: "#d7385e"
},
listContainer: {
backgroundColor: "#eeecda"
}
});