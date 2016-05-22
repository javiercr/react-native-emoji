import React, { Component } from 'react';
import nodeEmoji from 'node-emoji';

class Emoji extends Component {
  render() {
    var emoji = nodeEmoji.get(this.props.name);
    return (<React.Text>{emoji}</React.Text>);
  }
}

Emoji.propTypes = {
  // Emoji's name
  name: React.PropTypes.string.isRequired,
};

module.exports=Emoji;
