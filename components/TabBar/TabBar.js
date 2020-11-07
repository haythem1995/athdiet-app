import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Image,
    TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { AppStyles } from "../../AppStyles";



class TabBar extends Component {
     constructor(props) {
        super(props);
    };
   
  
    render() {
        const { routeName } = this.props.navigation.state;

        //  alert("props"+JSON.stringify(routeName) );
        return (
                <View style={styles.tabContainer}>
                    <View style={styles.tabContent}>
                 
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(routeName)}>
                            {
                                routeName === 'Home'
                                ?
                                <MaterialCommunityIcons  name="home" size={28} color={AppStyles.color.primary} />
                                :
                                <MaterialCommunityIcons  name="home" size={28} color={AppStyles.color.gray} />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(routeName)}>
                            {
                                routeName == 'Search'
                                ?
                                <FontAwesomeIcons  name="search" size={28} color={AppStyles.color.primary} />
                                :
                                <FontAwesomeIcons  name="search"  size={28} color={AppStyles.color.gray} />
                            }
                        </TouchableOpacity>

                      
                        
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
                            {
                                routeName == 'Menu'
                                ?
                                <MaterialCommunityIcons style={styles.iconWithShadow}  name="food" size={28} color={AppStyles.color.primary}/>
                                :
                                <MaterialCommunityIcons style={styles.iconWithShadow}  name="food" size={28} color={AppStyles.color.gray} />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                            {
                                routeName == 'Profile'
                                ?
                                <MaterialCommunityIcons  name="account-circle-outline" size={28}color={AppStyles.color.primary} />
                                :
                                <MaterialCommunityIcons style={styles.iconWithShadow}   name="account-circle-outline" size={28} color={AppStyles.color.gray}/>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }

}

const styles = StyleSheet.create({
    tabContainer : {
        height :  50,
        width : '100%',
        backgroundColor : AppStyles.color.white,
        justifyContent : 'center',
        alignItems : 'center',
    },
    tabContent : {
        width : '80%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    iconWithShadow : {
         ...Platform.select({
        //     ios: {
        //         shadowColor: '#000',
        //         shadowOffset: {width: 0, height: 2},
        //         shadowOpacity: 0.3,
        //     },
             android: {
                 elevation: 2
             },
         }),
    },
    
});


export default TabBar;
