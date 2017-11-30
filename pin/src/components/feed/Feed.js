import React from 'react';
import { StyleSheet, Text, View, ScrollView, AsyncStorage } from 'react-native';
import moment from 'moment';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as feedActions from '../../actions/feed';
import * as usersActions from '../../actions/users';

import Post from './Post';

class Feed extends React.Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    AsyncStorage.getItem('@user:id', (res) => {
      console.log(res);
    });
    this.props.feedActions.getFeed(2);
    this.props.usersActions.getUsers();
  }
  normalize = (arr) => {
    let final = [];
    for (let item of arr) {
      if (item.length > 0) {
        for (let post of item) {
          final.push(post);
        }
      }
    }
    return final.sort((a, b) => moment(a.created_at).format('x') - moment(b.created_at).format('x')).reverse();
  }
  getNameById = (id) => {
    const name = this.props.users.users.filter(user => user.id === id)[0].name;
    return name;
  }
  render() {
     return (
       <ScrollView style={styles.container}>
          {this.props.users.isFetching || this.props.feed.isFetching ?
            <Text>Loading</Text>
          :
            this.normalize(this.props.feed.feed).map(post => (
              <Post
                key={post.id}
                post={post}
                user={this.getNameById(post.user_id)}
                navigation={this.props.navigation}
              />
            ))
         }
       </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20
  }
});

const mapStateToProps = (state) => {
  return {
    feed: state.feed,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    feedActions: bindActionCreators(feedActions, dispatch),
    usersActions: bindActionCreators(usersActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
