import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, array, radios } from '@storybook/addon-knobs';

import { ListCard } from '../../components';

const stories = storiesOf('ListCard', module);

stories.addDecorator(withKnobs);

stories
  .add('default', () => <ListCard />)
  .add('header text', () => <ListCard header="Custom Header"></ListCard>)
  .add('list items', () => {
    const items = ['Custom Item', 'Second Item', 'Another Item'];
    return <ListCard header="Header with Items" items={items}></ListCard>
  })
  .add('change theme', () => {
    const themes = {
      Light: 'light',
      Dark: 'dark'
    }
    const theme = radios('Themes', themes, 'light');
    return <ListCard theme={theme} />
  })
  // .add('change items', () => {
  //   const itemList = array('Items', ['Apple', 'Banana', 'Peach', 'Plum', 'Pear']);
  //   return <ListCard header="Dynamic List" items={itemList} theme="dark" />
  // })
