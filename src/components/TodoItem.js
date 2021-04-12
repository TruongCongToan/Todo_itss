import React, { Component } from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gray_text: false };
    this.changeColorToggle = this.changeColorToggle.bind(this);
  }

  changeColorToggle() {
    this.setState({ gray_text: !this.state.gray_text });
  }

  render() {
    return (
      <label className="panel-block">
        <input type="checkbox" onChange={this.changeColorToggle} />
        <span className={this.state.gray_text ? 'has-text-grey-light' : null}>
          {this.props.item.text}
        </span>
      </label>
    );
  }
}

export default TodoItem;