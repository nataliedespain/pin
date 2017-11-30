import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import moment from 'moment';
import axios from 'axios';

const ProfilePost = ({ post }) => {
  return (
    <View>
      <View>
        <Text style={styles.timeAgo}>{moment(post.created_at).fromNow()}</Text>
        <View style={styles.cityPhotoContainer}>
          <Image
            source={{ uri: post.photo }}
            style={styles.cityPhoto}
          >
            <View style={styles.cityPhotoOverlay} />
          </Image>
          <Text style={styles.cityPhotoText}>{post.city}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cityPhotoContainer: {
    width: 335,
    height: 210,
    position: 'relative',
    marginTop: 10,
    marginBottom: 25,
  },
  cityPhoto: {
    flex: 1,
    borderRadius: 10,
  },
  cityPhotoOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.3
  },
  cityPhotoText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 25,
    fontWeight: '600'
  },
  timeAgo: {
    color: '#CCCCCC'
  }
});

export default ProfilePost;
