import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/users';
import * as followActions from '../../actions/follow';
import * as citiesActions from '../../actions/cities';
import * as toggleActions from '../../actions/toggleAdd';

import Title from '../common/Title';
import ProfilePost from './ProfilePost';
import AddForm from './AddForm';

class Profile extends React.Component {
  static navigationOptions = {

  };
  componentDidMount() {
    this.props.usersActions.getUser(2);
    this.props.followActions.getFollowers(2);
    this.props.followActions.getFollowing(2);
    this.props.citiesActions.getCities(2);
  }
  filterCitiesByUser = (id) => {
    console.log(id);
    return this.props.cities.cities.filter(city => city.user_id === id);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.users.isFetching && this.props.cities.isFetching ? null :
          <View>
            {console.log(this.props)}
            <View style={styles.topContainer}>
              <View style={styles.userPic}>
                <View style={styles.userPicCircle}/>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.user}>{this.props.users.user.name}</Text>
                <Text style={styles.userLocation}>{this.props.users.user.location}</Text>
                <View style={styles.userFollows}>
                  <View style={styles.follows}>
                    <Text style={styles.followText}>Followers</Text>
                    <Text style={styles.followNum}>{this.props.follow.followers.length}</Text>
                  </View>
                  <View style={[styles.follows, { borderRightWidth: 0 }]}>
                    <Text style={styles.followText}>Following</Text>
                    <Text style={styles.followNum}>{this.props.follow.following.length}</Text>
                  </View>
                </View>
                <View style={styles.traveling}>
                  <Text style={styles.travelingFont}>Traveling</Text>
                  <View style={styles.switchContainer}>
                    {this.props.users.user.is_traveling ?
                      <TouchableHighlight underlayColor="white" onPress={() => this.props.usersActions.toggleTraveling(this.props.users.user.id, this.props.users.user)}>
                        <View style={[styles.switch, { backgroundColor: '#6FCF97', marginLeft: 22 }]} />
                      </TouchableHighlight>
                    :
                      <TouchableHighlight underlayColor="white" onPress={() => this.props.usersActions.toggleTraveling(this.props.users.user.id, this.props.users.user)}>
                        <View style={styles.switch} />
                      </TouchableHighlight>
                    }
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.citiesContainer}>
              <Title text="Cities" />
              {this.filterCitiesByUser(this.props.users.user.id).map(city => (
                <ProfilePost key={city.id} post={city} />
              ))}
            </View>
            <View style={styles.formContainer}>
              <TouchableHighlight underlayColor="white" onPress={() => this.props.toggleActions.toggleAdd()}>
                <View style={styles.addButton}>
                  <Text style={styles.addButtonText}>Add a City</Text>
                </View>
              </TouchableHighlight>
              {this.props.toggleAdd ?
                <AddForm user={this.props.users.user.id} toggleAdd={this.props.toggleActions.toggleAdd} />
                : null}
            </View>
          </View>
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
    width: '50%'
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
  },
  addButton: {
    width: 100,
    height: 35,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 3,
    alignSelf: 'center',
  },
  addButtonText: {
    alignSelf: 'center',
    marginTop: 5,
    fontWeight: '600'
  },
  formContainer: {
    marginBottom: 50
  }
});

const mapStateToProps = (state) => {
  return {
    users: state.users,
    follow: state.follow,
    cities: state.cities,
    toggleAdd: state.toggleAdd
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    usersActions: bindActionCreators(usersActions, dispatch),
    followActions: bindActionCreators(followActions, dispatch),
    citiesActions: bindActionCreators(citiesActions, dispatch),
    toggleActions: bindActionCreators(toggleActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
