import React, { Component } from 'react';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import PropTypes from 'prop-types';

import './ListCard.scss';


const CustomCardHeader = withStyles({
  root: {
    padding: 0,
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  content: {
    width: '100%',
    height: '105px',
  },
  title: {
    fontSize: '36px',
    height: '80%',
    marginTop: '10%'
  }
})(CardHeader);

class ListCard extends Component {

  render() {
    const {
      children,
      className,
      color,
      raised,
      header,
      items,
      theme,
      ...restProps
    } = this.props;

    const themeObj = {
      class: theme || 'light'
    };

    const classes = classNames('ui-card', className, {[themeObj.class]: [theme] });

    return (
      <Card
        className={classes}
        color={color}
        raised={raised}
        {...restProps}
      >
        <CustomCardHeader title={header} className="header" />
        <CardContent className="content">
          {items.map(item => (
            <Typography key={item} className="item">{`- ${item}`}</Typography>
          ))}
        </CardContent>
      </Card>
    );
  }
}

ListCard.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The text of the header
   */
  header: PropTypes.string,
  /**
   * The list items
   */
  items: PropTypes.array,
  /**
   * The theme to use: light (default) or dark
   */
  theme: PropTypes.string,
  /**
   * If true, the card will use raised styling.
   */
  raised: PropTypes.bool,
};

ListCard.defaultProps = {
  header: 'Header',
  items: ['Item 1', 'Item 2', 'Item 3'],
  theme: 'light',
  raised: false,
};

export default ListCard;
