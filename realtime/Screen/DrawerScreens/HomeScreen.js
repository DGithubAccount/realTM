import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <View style={styles.MainView}>
        <View style={styles.subMainView}>
          <Text style={styles.subMainViewText}>
            Home Screen
            {'\n\n'}
            Dashbord
          </Text>
        </View>
        <Text style={styles.bottomViewText}>Bottom Line{'\n'}text line</Text>
        <Text style={styles.footerLink}>realtime-ctms.com</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  SafeAreaViewStyle: {flex: 1},
  MainView: {flex: 1, padding: 16},
  subMainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subMainViewText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
  bottomViewText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerLink: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});
