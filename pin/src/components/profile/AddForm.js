import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Form from 'react-native-form';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as citiesActions from '../../actions/cities';

class AddForm extends React.Component {

  handleAdd = () => {
    let formData = this.refs.addForm.getValues();
    this.props.citiesActions.addCity({...formData, user_id: this.props.user});
    this.forceUpdate();
    this.props.toggleAdd();
  }

  render() {
     return (
       <View style={styles.formContainer}>
         <Form ref="addForm">
           <TextInput
             type="TextInput"
             style={styles.input}
             autoCorrect={false}
             placeholder="City"
             name="city"
           />
           <TextInput
             type="TextInput"
             style={styles.input}
             autoCorrect={false}
             placeholder="Start Date"
             name="start_date"
           />
           <TextInput
             type="TextInput"
             style={styles.input}
             autoCorrect={false}
             placeholder="End Date"
             name="end_date"
           />
           <TextInput
             type="TextInput"
             style={styles.input}
             autoCorrect={false}
             placeholder="Photo URL"
             name="photo"
           />
         </Form>
         <TouchableOpacity style={styles.button} onPress={() => this.handleAdd()}>
           <Text style={styles.buttonText}>Add</Text>
         </TouchableOpacity>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    paddingLeft: 40,
    paddingRight: 40
  },
  input: {
    borderWidth: 0,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    marginTop: 5,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  button: {
    width: 50,
    height: 35,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 3,
    alignSelf: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    marginTop: 5,
    fontWeight: '600'
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    citiesActions: bindActionCreators(citiesActions, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddForm);
