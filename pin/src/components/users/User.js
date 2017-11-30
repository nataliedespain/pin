import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/users';
import * as followActions from '../../actions/follow';
import * as citiesActions from '../../actions/cities';

import Title from '../common/Title';
import ProfilePost from '../profile/ProfilePost';

class User extends React.Component {
  static navigationOptions = {
    
  };
  componentDidMount() {
    const user = this.props.navigation.state.params.user;
    this.props.usersActions.getUsers();
    this.props.followActions.getAllFollows();
    this.props.citiesActions.getCities(user);
  }
  filterCitiesByUser = (id) => {
    return this.props.cities.cities.filter(city => city.user_id === id);
  }
  getUserById = (id) => {
    return this.props.users.users.filter(user => user.id === id)[0];
  }
  getUserFollowers = (id) => {
    return this.props.follow.follows.filter(follow => follow.following_id === id).length;
  }
  getUserFollowing = (id) => {
    return this.props.follow.follows.filter(follow => follow.follower_id === id).length;
  }
  isCurrentUserFollowing = (follower, following) => {
    if (this.props.follow.follows.filter(follow => follow.follower_id === follower && follow.following_id === following).length > 0) return true;
    return false;
  }
  findFollow = (follower, following) => {
    return this.props.follow.follows.filter(follow => follow.follower_id === follower && follow.following_id === following)[0].id;
  }
  handleUnfollow = (follower, following) => {
    this.props.followActions.unfollowUser(this.findFollow(follower, following))
    this.forceUpdate();
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.users.isFetching && this.props.cities.isFetching && this.props.follow.isFetching ? null :
          <View>
            <View style={styles.topContainer}>
              <View style={styles.userPic}>
                <View style={styles.userPicCircle}/>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.user}>{this.getUserById(this.props.navigation.state.params.user).name}</Text>
                <Text style={styles.userLocation}>{this.getUserById(this.props.navigation.state.params.user).location}</Text>
                <View style={styles.userFollows}>
                  <View style={styles.follows}>
                    <Text style={styles.followText}>Followers</Text>
                    <Text style={styles.followNum}>{this.getUserFollowers(this.props.navigation.state.params.user)}</Text>
                  </View>
                  <View style={styles.follows}>
                    <Text style={styles.followText}>Following</Text>
                    <Text style={styles.followNum}>{this.getUserFollowing(this.props.navigation.state.params.user)}</Text>
                  </View>
                  <View style={[styles.follows, { borderRightWidth: 0 }]}>
                    <View style={styles.followButton}>
                      {this.isCurrentUserFollowing(2, this.props.navigation.state.params.user) ?
                        <TouchableHighlight underlayColor="white" onPress={() => this.handleUnfollow(2, this.props.navigation.state.params.user) }>
                          <Icon style={styles.minus} name="minus" size={25} color="black" />
                        </TouchableHighlight>
                      :
                        <TouchableHighlight underlayColor="white" onPress={() => this.props.followActions.followUser(2, this.props.navigation.state.params.user)}>
                          <Icon style={styles.plus} name="plus" size={25} color="black" />
                        </TouchableHighlight>
                      }
                    </View>
                  </View>
                </View>
                <View style={styles.traveling}>
                  <Text style={styles.travelingFont}>Traveling</Text>
                  <View style={styles.switchContainer}>
                    {this.getUserById(this.props.navigation.state.params.user).is_traveling ?
                      <View style={[styles.switch, { backgroundColor: '#6FCF97', marginLeft: 22 }]} />
                    :
                      <View style={styles.switch} />
                    }
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.citiesContainer}>
              <Title text="Cities" />
              {this.filterCitiesByUser(this.props.navigation.state.params.user).map(city => (
                <ProfilePost key={city.id} post={city} />
              ))}
            </View>
          </View>
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  topContainer: {
    width: '100%',
    height: 175,
    flexDirection: 'row',
  },
  userPic: {
    width: '40%',
    height: 175,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userPicCircle: {
    width: 100,
    height: 100,
    borderRadius: 125/2,
    backgroundColor: '#CCCCCC',
  },
  userInfo: {
    width: '60%',
    padding: 10
  },
  user: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  userLocation: {
    color: '#CCCCCC',
    fontSize: 18,
    paddingTop: 5
  },
  userFollows: {
    borderTopColor: '#EEEEEE',
    borderTopWidth: 1,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  follows: {
    borderRightColor: '#EEEEEE',
    borderRightWidth: 1,
    width: '33%'
  },
  followText: {
    fontSize: 10,
    alignSelf: 'center'
  },
  followNum: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 3
  },
  followButton: {
    width: 37,
    height: 37,
    borderRadius: 18.5,
    borderColor: 'black',
    borderWidth: 3,
    alignSelf: 'center',
    alignItems: 'center'
  },
  plus: {
    marginTop: 3.5
  },
  minus: {
    marginTop: 3.5
  },
  traveling: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  travelingFont: {
    fontSize: 16,
    marginTop: 5
  },
  switchContainer: {
    width: 50,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#EEEEEE',
    marginRight: 5
  },
  switch: {
    marginLeft: 3,
    marginTop: 3,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EB5757'
  },
  citiesContainer: {
    alignSelf: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    users: state.users,
    follow: state.follow,
    cities: state.cities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    usersActions: bindActionCreators(usersActions, dispatch),
    followActions: bindActionCreators(followActions, dispatch),
    citiesActions: bindActionCreators(citiesActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
