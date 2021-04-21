import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import StudiesScreen from './DrawerScreens/StudiesScreen';
import HelpCenterScreen from './DrawerScreens/HelpCenterScreen';
import MyDocumentsScreen from './DrawerScreens/MyDocumentsScreen';
import MyStipendsScreen from './DrawerScreens/MyStipendsScreen';
import NotificationsScreen from './DrawerScreens/NotificationsScreen';
import StudyCalenderScreen from './DrawerScreens/StudyCalenderScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StudyCalenderScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="StudyCalenderScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5a6c78',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="StudyCalenderScreen"
        component={StudyCalenderScreen}
        options={{
          title: 'Study Calender Screen',
        }}
      />
    </Stack.Navigator>
  );
};
const NotificationsScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="NotificationsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5a6c78',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          title: 'Notifications Screen',
        }}
      />
    </Stack.Navigator>
  );
};
const MyStipendsScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="MyStipendsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5a6c78',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="MyStipendsScreen"
        component={MyStipendsScreen}
        options={{
          title: 'My Stipends Screen',
        }}
      />
    </Stack.Navigator>
  );
};
const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#5a6c78',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5a6c78',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
};

const StudiesScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="StudiesScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5a6c78',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="StudiesScreen"
        component={StudiesScreen}
        options={{
          title: 'Studies Screen',
        }}
      />
    </Stack.Navigator>
  );
};
const HelpCenterScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="HelpCenterScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5a6c78',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="HelpCenterScreen"
        component={HelpCenterScreen}
        options={{
          title: 'Help Center Screen',
        }}
      />
    </Stack.Navigator>
  );
};

const MyDocumentsScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="MyDocumentsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5a6c78',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="MyDocumentsScreen"
        component={MyDocumentsScreen}
        options={{
          title: 'My Documents Screen',
        }}
      />
    </Stack.Navigator>
  );
};
const DrawerNavigatorRoutes = props => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Dashboard'}}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="StudiesScreenStack"
        options={{drawerLabel: 'Studies'}}
        component={StudiesScreenStack}
      />
      <Drawer.Screen
        name="StudyCalenderScreenStack"
        options={{drawerLabel: 'Study Calender'}}
        component={StudyCalenderScreenStack}
      />
      <Drawer.Screen
        name="NotificationsScreenStack"
        options={{drawerLabel: 'Notifications'}}
        component={NotificationsScreenStack}
      />
      <Drawer.Screen
        name="MyDocumentsScreenStack"
        options={{drawerLabel: 'My Documents'}}
        component={MyDocumentsScreenStack}
      />
      <Drawer.Screen
        name="MyStipendsScreenStack"
        options={{drawerLabel: 'My Stipends'}}
        component={MyStipendsScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Settings and Privacy'}}
        component={settingScreenStack}
      />
      <Drawer.Screen
        name="HelpCenterScreenStack"
        options={{drawerLabel: 'Help Center'}}
        component={HelpCenterScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
