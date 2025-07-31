import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function HomeScreen() {
  const video = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        {/* Video displays in full landscape format - portrait cropping to be implemented */}
        <Video
          ref={video}
          style={styles.video}
          source={require('../assets/video/sample-video.mp4')}
          useNativeControls={true}
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.isLoaded) {
              setIsPlaying(status.isPlaying);
              if (status.durationMillis) {
                setDuration(status.durationMillis / 1000);
              }
            }
          }}
        />
      </View>
      
      <View style={styles.timelineContainer}>
        <Text style={styles.placeholder}>Timeline Area</Text>
        <Text style={styles.subtext}>
          {duration > 0 ? `Duration: ${duration.toFixed(1)}s` : 'Loading...'}
        </Text>
        
        {/* Play/Pause button for testing */}
        <TouchableOpacity 
          style={styles.playButton}
          onPress={() => {
            if (isPlaying) {
              video.current?.pauseAsync();
            } else {
              video.current?.playAsync();
            }
          }}
        >
          <Text style={styles.buttonText}>
            {isPlaying ? 'Pause' : 'Play'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: screenWidth,
    height: screenWidth * 9/16, // 16:9 aspect ratio for landscape video
    alignSelf: 'center',
  },
  timelineContainer: {
    height: 150,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  placeholder: {
    color: '#666',
    fontSize: 16,
  },
  subtext: {
    color: '#999',
    fontSize: 14,
    marginTop: 5,
  },
  playButton: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});