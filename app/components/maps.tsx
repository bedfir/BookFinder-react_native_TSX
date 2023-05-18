import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Region, LatLng } from 'react-native-maps';

interface MapsProps {
  coordinates: LatLng[];
}

const Maps: React.FC<MapsProps> = ({ coordinates }) => {
  const initialRegion: Region = {
    latitude: coordinates[0].latitude,
    longitude: coordinates[0].longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {coordinates.map((coordinate, index) => (
          <Marker key={index} coordinate={coordinate} />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height, // Set a default height based on window height
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Maps;
