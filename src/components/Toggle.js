

import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { getToggleState } from '../redux/selectors'

class Toggle extends Component {
  handleToggle = () => {
        // dispatches actions to add todo
        this.props.changeToggle(!this.props.toggle)
    }

    render() {
      return (
          <div>
            <button onClick={this.handleToggle}>
              Toggle
            </button>
            <p>{ this.props.toggle ? 'True' : 'False' }</p>
          </div>
      )
    }
}

const mapStateToProps = state => {
  const toggle = getToggleState(state);
  return { toggle };
};


export default connect( mapStateToProps, actions )(Toggle);


