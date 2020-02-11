import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';

class ListCard extends Component {

  render() {
    return (
      <Base>
        Content...
      </Base>
    );
  }
}

ListCard.propTypes = {
  /**
   * PropTypes go here.
   */
};

ListCard.defaultProps = {
};

export default ListCard;
