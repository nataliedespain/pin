import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import moment from 'moment';
import axios from 'axios';

const Post = ({ post, user, navigation }) => {
  return (
    <View>
      <View style={styles.bar}>
        <View style={styles.userPic} />
        <View style={styles.textContainer}>
          <TouchableHighlight underlayColor="white" onPress={() => navigation.navigate('User', { user: post.user_id })}>
            <Text style={styles.userText}>{user}</Text>
          </TouchableHighlight>
          <Text style={styles.timeText}>{moment(post.created_at).fromNow()}</Text>
        </View>
      </View>
      <View>
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
  bar: {
    flexDirection: 'row'
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#CCCCCC'
  },
  textContainer: {
    paddingLeft: 10
  },
  userText: {
    fontWeight: '600',
    paddingTop: 2
  },
  timeText: {
    color: '#CCCCCC'
  },
  cityPhotoContainer: {
    width: 335,
    height: 210,
    position: 'relative',
    marginTop: 10,
    marginBottom: 25
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
  }
});

export default Post;
