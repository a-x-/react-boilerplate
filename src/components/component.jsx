import React, { Component } from 'react';
import { get } from '../utils';

export default class SomeComponent extends Component {
  componentWillMount() {
    // fetch data
    this.props.onLoad(Promise.all([
      get(this.props.username),
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }
}
