import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateUser} from './actions/user-action';
import {bindActionCreators} from 'redux'

import './App.css';

class App extends Component {
  onUpdateUser = (e) => {
    this.props.onUpdateUser('Asabeneh')
  }
  handleOnChange =(e) =>{
    this.props.onUpdateUser(e.target.value)
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Welcome {this.props.user}</h1>
        <button onClick={this.onUpdateUser}>Update User</button><br />
        <input onChange = {this.handleOnChange} value={this.props.user}/>
      </div>
    );
  }
}

const mapStateToProps = (state,props) => {
  console.log("what is the props here", props)
  return {
    products:state.products,
    user:state.user,
    userPlusProps:`${state.user} ${props.randomProps}`
  }
 
};

const mapActionToProps = (dispatch, props) => {
   return bindActionCreators( {
    onUpdateUser: updateUser
   },dispatch)
  
}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log('merge:', propsFromState,propsFromDispatch,ownProps)
  return {

  }

}

export default connect(mapStateToProps,mapActionToProps,mergeProps)(App);
