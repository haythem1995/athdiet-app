import React, { Component } from 'react';
import { Text, View, FlatList, Image, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { List } from 'react-native-paper';

const Day4Screen = () => {

  return (
    <ScrollView >
      <List.Section>
        <List.Accordion
          title="Breakfast"
          titleStyle={{ color: "black", fontWeight: "bold" }}
          style={{ borderColor: "#D2D6C8", borderRadius: 2, borderWidth: 1, margin: 20, }}
          left={props => <List.Icon {...props} icon={({ size, color }) => (
            <Image
              source={require('../../../assets/omelette.png')}
              style={{ width: 50, height: 50, }}
            />
          )}
          />}
        >

          <List.Item
            title="OMLETTE"
            description="258 kcal"
            style={{ margin: 20, }}
            left={props => <List.Icon {...props} icon={({ size, color }) => (
              <Image
                source={require('../../../assets/breakfast-omelette-with-tomatoes-avocado-blue-cheese-green-.jpg')}
                style={{ width: 50, height: 50, }}
              />
            )} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
        </List.Accordion>
        <List.Accordion
          title="Snacks"
          titleStyle={{ color: "black", fontWeight: "bold" }}
          style={{ borderColor: "#D2D6C8", borderRadius: 2, borderWidth: 1, margin: 20, }}
          left={props => <List.Icon {...props} icon={({ size, color }) => (
            <Image
              source={require('../../../assets/fruits.png')}
              style={{ width: 50, height: 50, }}
            />
          )} />}>
          <List.Item
            title="MEATBALLS"
            description="258 kcal"
            style={{ margin: 20, }}
            left={props => <List.Icon {...props} icon={({ size, color }) => (
              <Image
                source={{ uri: 'https://nitrocdn.com/PrlAvIEwjPuLQptSzQbBXJlkSkiPNCGe/assets/static/optimized/rev-9ba1f42/wp-content/uploads/2020/01/KetoBreakfastMeatballs-scaled.jpg' }}
                style={{ width: 50, height: 50, }}
              />
            )} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />

          <List.Item
            title="MEATBALLS"
            description="258 kcal"
            style={{ margin: 20, }}
            left={props => <List.Icon {...props} icon={({ size, color }) => (
              <Image
                source={{ uri: 'https://nitrocdn.com/PrlAvIEwjPuLQptSzQbBXJlkSkiPNCGe/assets/static/optimized/rev-9ba1f42/wp-content/uploads/2020/01/KetoBreakfastMeatballs-scaled.jpg' }}
                style={{ width: 50, height: 50, }}
              />
            )} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          titleStyle={{ color: "black", fontWeight: "bold" }}
          style={{ borderColor: "#D2D6C8", borderRadius: 2, borderWidth: 1, margin: 20, }}
          left={props => <List.Icon {...props} icon={({ size, color }) => (
            <Image
              source={require('../../../assets/lunch.png')}
              style={{ width: 50, height: 50, }}
            />
          )} />}>
          <List.Item
            title="MEATBALLS"
            description="258 kcal"
            style={{ margin: 20, }}
            left={props => <List.Icon {...props} icon={({ size, color }) => (
              <Image
                source={{ uri: 'https://nitrocdn.com/PrlAvIEwjPuLQptSzQbBXJlkSkiPNCGe/assets/static/optimized/rev-9ba1f42/wp-content/uploads/2020/01/KetoBreakfastMeatballs-scaled.jpg' }}
                style={{ width: 50, height: 50, }}
              />
            )} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <List.Item
            title="MEATBALLS"
            description="258 kcal"
            style={{ margin: 20, }}
            left={props => <List.Icon {...props} icon={({ size, color }) => (
              <Image
                source={{ uri: 'https://nitrocdn.com/PrlAvIEwjPuLQptSzQbBXJlkSkiPNCGe/assets/static/optimized/rev-9ba1f42/wp-content/uploads/2020/01/KetoBreakfastMeatballs-scaled.jpg' }}
                style={{ width: 50, height: 50, }}
              />
            )} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <List.Item
            title="MEATBALLS"
            description="258 kcal"
            style={{ margin: 20, }}
            left={props => <List.Icon {...props} icon={({ size, color }) => (
              <Image
                source={{ uri: 'https://nitrocdn.com/PrlAvIEwjPuLQptSzQbBXJlkSkiPNCGe/assets/static/optimized/rev-9ba1f42/wp-content/uploads/2020/01/KetoBreakfastMeatballs-scaled.jpg' }}
                style={{ width: 50, height: 50, }}
              />
            )} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
        </List.Accordion>
        <List.Accordion
          title="Snacks"
          titleStyle={{ color: "black", fontWeight: "bold" }}
          style={{ borderColor: "#D2D6C8", borderRadius: 2, borderWidth: 1, margin: 20, }}
          left={props => <List.Icon {...props} icon={({ size, color }) => (
            <Image
              source={require('../../../assets/fruits.png')}
              style={{ width: 50, height: 50, }}
            />
          )} />}>
          <List.Item
            title="MEATBALLS"
            description="258 kcal"
            style={{ margin: 20, }}
            left={props => <List.Icon {...props} icon={({ size, color }) => (
              <Image
                source={{ uri: 'https://nitrocdn.com/PrlAvIEwjPuLQptSzQbBXJlkSkiPNCGe/assets/static/optimized/rev-9ba1f42/wp-content/uploads/2020/01/KetoBreakfastMeatballs-scaled.jpg' }}
                style={{ width: 50, height: 50, }}
              />
            )} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <List.Item
            title="MEATBALLS"
            description="258 kcal"
            style={{ margin: 20, }}
            left={props => <List.Icon {...props} icon={({ size, color }) => (
              <Image
                source={{ uri: 'https://nitrocdn.com/PrlAvIEwjPuLQptSzQbBXJlkSkiPNCGe/assets/static/optimized/rev-9ba1f42/wp-content/uploads/2020/01/KetoBreakfastMeatballs-scaled.jpg' }}
                style={{ width: 50, height: 50, }}
              />
            )} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <List.Item
            title="MEATBALLS"
            description="258 kcal"
            style={{ margin: 20, }}
            left={props => <List.Icon {...props} icon={({ size, color }) => (
              <Image
                source={{ uri: 'https://nitrocdn.com/PrlAvIEwjPuLQptSzQbBXJlkSkiPNCGe/assets/static/optimized/rev-9ba1f42/wp-content/uploads/2020/01/KetoBreakfastMeatballs-scaled.jpg' }}
                style={{ width: 50, height: 50, }}
              />
            )} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          titleStyle={{ color: "black", fontWeight: "bold" }}
          style={{ borderColor: "#D2D6C8", borderRadius: 2, borderWidth: 1, margin: 20, }}
          left={props => <List.Icon {...props} icon={({ size, color }) => (
            <Image
              source={require('../../../assets/soup.png')}
              style={{ width: 50, height: 50, }}
            />
          )} />}>
          <List.Item
            title="MEATBALLS"
            description="258 kcal"
            style={{ margin: 20, }}
            left={props => <List.Icon {...props} icon={({ size, color }) => (
              <Image
                source={{ uri: 'https://nitrocdn.com/PrlAvIEwjPuLQptSzQbBXJlkSkiPNCGe/assets/static/optimized/rev-9ba1f42/wp-content/uploads/2020/01/KetoBreakfastMeatballs-scaled.jpg' }}
                style={{ width: 50, height: 50, }}
              />
            )} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <List.Item
            title="MEATBALLS"
            description="258 kcal"
            style={{ margin: 20, }}
            left={props => <List.Icon {...props} icon={({ size, color }) => (
              <Image
                source={{ uri: 'https://nitrocdn.com/PrlAvIEwjPuLQptSzQbBXJlkSkiPNCGe/assets/static/optimized/rev-9ba1f42/wp-content/uploads/2020/01/KetoBreakfastMeatballs-scaled.jpg' }}
                style={{ width: 50, height: 50, }}
              />
            )} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <List.Item
            title="MEATBALLS"
            description="258 kcal"
            style={{ margin: 20, }}
            left={props => <List.Icon {...props} icon={({ size, color }) => (
              <Image
                source={{ uri: 'https://nitrocdn.com/PrlAvIEwjPuLQptSzQbBXJlkSkiPNCGe/assets/static/optimized/rev-9ba1f42/wp-content/uploads/2020/01/KetoBreakfastMeatballs-scaled.jpg' }}
                style={{ width: 50, height: 50, }}
              />
            )} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />


        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
}
export default Day4Screen;