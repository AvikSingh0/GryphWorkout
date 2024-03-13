import * as React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
  ScrollView,
  FlatList,
  Switch,
  TouchableOpacity,
} from 'react-native';

const Settings = () => {
  const [weightUnit, setWeightUnit] = React.useState(false); 
  const [distanceUnit, setDistanceUnit] = React.useState(false); 

  const toggleSwitchWeight = () => setWeightUnit(previousState => !previousState);
  const toggleSwitchDistance = () => setDistanceUnit(previousState => !previousState);

  const onNotificationPress = () => {
    console.log('Notification Settings Pressed');
  };
  const onExportPress = () => {
    console.log('Export Settings Pressed');
  };
  const onImportPress = () => {
    console.log('Import Settings Pressed');
  };

  const onPrivPolPress = () => {
    console.log('Privacy Policy Settings Pressed');
  };
  const onAboutUsPress = () => {
    console.log('About Us Settings Pressed');
  };


  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.headerText}>General Settings</Text>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Change Weight Unit</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={weightUnit ? "rgba(250, 204, 49, 0.7)" : "white"}
            onValueChange={toggleSwitchWeight}
            value={weightUnit}
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Change Distance Unit</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={distanceUnit ? "rgba(250, 204, 49, 0.7)" : "white"}

            onValueChange={toggleSwitchDistance}
            value={distanceUnit}
          />
        </View>

        <TouchableOpacity style={styles.settingRow} onPress={onNotificationPress}>
          <Text style={styles.settingText}>Notification Settings</Text>
          <Text style={styles.chevron}>&gt;</Text>
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.headerText}>Import/Export Data</Text>
        </View>

        <TouchableOpacity style={styles.settingRow} onPress={onExportPress}>
          <Text style={styles.settingText}>Export Data</Text>
          <Text style={styles.chevron}>&gt;</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow} onPress={onImportPress}>
          <Text style={styles.settingText}>Import Data</Text>
          <Text style={styles.chevron}>&gt;</Text>
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.headerText}>About</Text>
        </View>
        
        <TouchableOpacity style={styles.settingRow} onPress={onPrivPolPress}>
          <Text style={styles.settingText}>Privacy Policy</Text>
          <Text style={styles.chevron}>&gt;</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow} onPress={onAboutUsPress}>
          <Text style={styles.settingText}>About Us</Text>
          <Text style={styles.chevron}>&gt;</Text>
        </TouchableOpacity>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Version</Text>
          <Text>1.0.1</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    paddingVertical: 22, 
    paddingBottom : 34,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(150, 2, 36, 1)',
    paddingBottom: 10,
    borderBottomWidth: 1,
    
  },
  sectionHeader: {
    backgroundColor: 'rgba(250, 204, 49, 0.7) ',
    paddingVertical: 9,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 18,
   
    color: 'black',
  },

  settingText: {
    fontSize: 15,
    color: 'dimgray',
  },

  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  chevron: {
    fontSize: 18,
    paddingRight: 10,
  },
});

export default Settings;
