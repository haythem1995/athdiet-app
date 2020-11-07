import React, { Component } from 'react';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { View, Text, StyleSheet } from 'react-native';
import StepOne from './StepOne'
import StepToo from './StepToo'
import StepThree from './StepThree'
import StepFour from './StepFour';
import StepFive from './Stepfive';
import { AppStyles } from '../../AppStyles';
import axios from '../../Utils/api'
import {   Overlay } from 'react-native-elements';
import Spinner from '../Components/Spinner'

export default class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sexe: "homme",
            taille: "150",
            poid: "60",
            poidC: "60",
            sportLevel: "3 à 5 séances par semaine",
            vegeterienEtat: "Oui",
            menu: "Keto",
            loading:false ,

        }

 
    }

    Shecked = (value) => {
        this.setState({
            sexe: value
        })
    }

    tailleUser = (itemValue) => {
        this.setState({
            taille: itemValue
        })
    }

    poidsUser = (itemV) => {
        this.setState({
            poid: itemV
        })
    }
    poidsCUser = (itemValue) => {
        this.setState({
            poidC: itemValue
        })
    }
    sportLev = (value) => {
        this.setState({
            sportLevel: value
        })
    }
    vegeterien = (value) => {
        this.setState({
            vegeterienEtat: value
        })
    }
    menuType = (value) => {
        this.setState({
            menu: value
        })
    }

    createUser = () => { 
        this.setState({loading:true})
            let User = {
            firstName: this.props.route.params.user.firstName,
            password: this.props.route.params.user.password,
            email: this.props.route.params.user.email,
            lastName: this.props.route.params.user.lastName,
            poids: this.state.poid,
            poidsCible: this.state.poidC,
            taille: this.state.taille,
            keyyActiviteSportive: this.state.sportLevel,
            menu: this.state.menu,
            vegeterien: this.state.vegeterienEtat,
            gender: this.state.sexe
}
 
axios.post("users/create",User).then(response=> 
    {
                console.log(response)
                this.setState({loading:false})
   
this.props.navigation.navigate('Acceuil')

}

            
            ).catch(error=>console.log("error",error))
          ;
    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
                  <Overlay isVisible={this.state.loading} fullScreen={true} overlayStyle={{justifyContent:"center",alignSelf:"center",backgroundColor:"transaparent",borderColor:"red"}} >
 
                        <Spinner />

                                    </Overlay>
                <ProgressSteps>
                    <ProgressStep
                        key={0}
                        nextBtnText={"Suivant"}
                        nextBtnStyle={styles.ButtonContenu}
                        nextBtnTextStyle={styles.nextBtnTextStyle}
                    >
                        <View>
                            <StepOne
                                sexe={this.state.sexe}
                                Shecked={this.Shecked} />
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        key={1}
                        nextBtnText={"Suivant"}
                        nextBtnStyle={styles.ButtonContenu}
                        nextBtnTextStyle={styles.nextBtnTextStyle}
                        previousBtnText={"Précédent"}
                        previousBtnStyle={styles.ButtonContenu}
                        previousBtnTextStyle={styles.nextBtnTextStyle}
                    >
                        <View>
                            <StepToo
                                taille={this.state.taille}
                                poid={this.state.poid}
                                poidC={this.state.poidC}
                                poidsUser={this.poidsUser}
                                tailleUser={this.tailleUser}
                                poidsCUser={this.poidsCUser} />
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        key={2}
                        nextBtnText={"Suivant"}
                        nextBtnStyle={styles.ButtonContenu}
                        nextBtnTextStyle={styles.nextBtnTextStyle}
                        previousBtnText={"Précédent"}
                        previousBtnStyle={styles.ButtonContenu}
                        previousBtnTextStyle={styles.nextBtnTextStyle}
                    >
                        <View>
                            <StepThree
                                sportLevel={this.state.sportLevel}
                                sportLev={this.sportLev} />
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        key={3}
                        nextBtnText={"Suivant"}
                        nextBtnStyle={styles.ButtonContenu}
                        nextBtnTextStyle={styles.nextBtnTextStyle}
                        previousBtnText={"Précédent"}
                        previousBtnStyle={styles.ButtonContenu}
                        previousBtnTextStyle={styles.nextBtnTextStyle}
                    >
                        <View>
                            <StepFour
                                vegeterienEtat={this.state.vegeterienEtat}
                                vegeterien={this.vegeterien}
                            />
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        key={4}
                        finishBtnText={"Valider"}
                        nextBtnStyle={styles.ButtonContenu}
                        nextBtnTextStyle={styles.nextBtnTextStyle}
                        previousBtnText={"Précédent"}
                        previousBtnStyle={styles.ButtonContenu}
                        previousBtnTextStyle={styles.nextBtnTextStyle}
                        onSubmit={() => this.createUser()}
                    >
                        <View>
                            <StepFive
                                menu={this.state.menu}
                                menuType={this.menuType} />
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    ButtonContenu: {
        backgroundColor: AppStyles.color.primary,
        textAlign: 'center',
        padding: 8,
        borderRadius: 8,
        width: 110,
    },
    nextBtnTextStyle: {
        color: 'white',
        height: 25,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold"
    },
    container1: {
        flexDirection: "row",
        alignItems: "center",
    },
});
