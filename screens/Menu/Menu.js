import React, {useEffect, useState, Fragment} from 'react';
import {View, StyleSheet, Dimensions, Text, ImageBackground, ScrollView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import HomeScreen from '../Home/HomeScreen';
import CategoriesScreen from '../Categories/CategoriesScreen';
import Moment from 'moment';
import Day1Screen from './Plan/Day1Screen';
import Day2Screen from './Plan/Day2Screen';
import Day3Screen from './Plan/Day3Screen';
import Day4Screen from './Plan/Day4Screen';
import Day5Screen from './Plan/Day5Screen';
import Day6Screen from './Plan/Day6Screen';
import Day7Screen from './Plan/Day7Screen';
import {AppStyles} from '../../AppStyles';
import NewPlan from './NewPlan';
import Spinner from '../Components/Spinner';
import {Overlay} from 'react-native-elements';

const initialLayout = {width: Dimensions.get('window').width};

export default function Menu(props, {navigation, route}) {
  const [index, setIndex] = useState(0);
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendWeek = (startDay, endDay) => {
    console.log(Moment(startDay).format());
    setRoute([
      {
        time: startDay,
        key: 'Day1Screen',
        title:
          'Lundi \n ' + Moment(startDay).startOf('isoWeek').format('DD/MM'),
      },
      {
        key: 'Day2Screen',
        title:
          'Mardi \n ' +
          Moment(startDay).startOf('isoWeek').add(1, 'days').format('DD/MM'),
      },
      {
        key: 'Day3Screen',
        title:
          'Mercredi \n ' +
          Moment(startDay).startOf('isoWeek').add(2, 'days').format('DD/MM'),
      },
      {
        key: 'Day4Screen',
        title:
          'Jeudi \n ' +
          Moment(startDay).startOf('isoWeek').add(3, 'days').format('DD/MM'),
      },
      {
        key: 'Day5Screen',
        title:
          'Vendredi \n ' +
          Moment(startDay).startOf('isoWeek').add(4, 'days').format('DD/MM'),
      },
      {
        key: 'Day6Screen',
        title:
          'Samedi\n ' +
          Moment(startDay).startOf('isoWeek').add(5, 'days').format('DD/MM'),
      },
      {
        key: 'Day7Screen',
        title:
          'Dimanche\n ' +
          Moment(startDay).startOf('isoWeek').add(6, 'days').format('DD/MM'),
      },
    ]);
    {
      setLoading(true);
      setTimeout(() => {
        setData(['test']);
        setLoading(false);
      }, 3000);
    }
  };
  const [routes, setRoute] = useState([
    {
      key: 'Day1Screen',
      title:
        'Lundi \n ' +
        Moment().startOf('isoWeek').add(1, 'days').format('DD/MM'),
    },
    {
      key: 'Day2Screen',
      title:
        'Mardi \n ' +
        Moment().startOf('isoWeek').add(1, 'days').format('DD/MM'),
    },
    {
      key: 'Day3Screen',
      title:
        'Mercredi \n ' +
        Moment().startOf('isoWeek').add(2, 'days').format('DD/MM'),
    },
    {
      key: 'Day4Screen',
      title:
        'Jeudi \n ' +
        Moment().startOf('isoWeek').add(3, 'days').format('DD/MM'),
    },
    {
      key: 'Day5Screen',
      title:
        'Vendredi \n ' +
        Moment().startOf('isoWeek').add(4, 'days').format('DD/MM'),
    },
    {
      key: 'Day6Screen',
      title:
        'Samedi\n ' +
        Moment().startOf('isoWeek').add(5, 'days').format('DD/MM'),
    },
    {
      key: 'Day7Screen',
      title:
        'Dimanche\n ' +
        Moment().startOf('isoWeek').add(6, 'days').format('DD/MM'),
    },
  ]);

  const renderScene = ({navigation, route}) => {
    return <Day1Screen navigation={props.navigation} route={route} />;
  };
  // const renderScene  = SceneMap({
  //   Day1Screen:Day1Screen   ,
  //   Day2Screen:Day1Screen    ,
  //   Day3Screen: Day1Screen   ,
  //   Day4Screen: Day1Screen   ,
  //   Day5Screen:Day1Screen   ,
  //   Day6Screen: Day1Screen   ,
  //   Day7Screen: () => ,
  // });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({route, focused, color}) => (
        <Text style={{color, fontWeight: 'bold', fontStyle: 'italic'}}>
          {route.title}
        </Text>
      )}
      scrollEnabled={true}
      indicatorStyle={{backgroundColor: 'white'}}
      style={styles.tabContainer}
    />
  );
  return (
    <ImageBackground source={require('../../assets/icons/4541.jpg') }style={styles.image}>
    <Fragment>
      <Overlay
        isVisible={loading}
        fullScreen={true}
        overlayStyle={{
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: 'transaparent',
          borderColor: 'red',
        }}>
        <Spinner />
      </Overlay>
      {Data.length !== 0 ? (
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      ) : (
        <NewPlan sendWeek={(startDay, endDay) => sendWeek(startDay, endDay)} />
      )}
    </Fragment>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  container: {
    height: 50,
    backgroundColor: '#673ab7',
  },
  tabContainer: {
    backgroundColor: AppStyles.color.primary,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    justifyContent: "center"
},
});
