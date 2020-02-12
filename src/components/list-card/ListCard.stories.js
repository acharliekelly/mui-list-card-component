import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, radios, text, optionsKnob as options } from '@storybook/addon-knobs';

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
  .add('dynamic header', () => {
    const header = text('Header', 'Header Text');
    return <ListCard header={header} />
  })
  .add('dynamic items', () => {
    const selectedFruit = ['Apple','Orange','Banana','Pear'];
    const allFruits = {
      Apple: 'Apple',
      Orange: 'Orange',
      Banana: 'Banana',
      Strawberry: 'Strawberry',
      Pear: 'Pear',
      Kumquat: 'Kumquat',
      Mango: 'Mango',
      Watermelon: 'Watermelon',
      Pomelo: 'Pomelo',
      Tangerine: 'Tangerine',
      Blueberry: 'Blueberry',
      Grape: 'Grape',
      Lemon: 'Lemon',
    }
    const fruitOptions = options('Fruit', allFruits, selectedFruit, { 
      display: 'check' 
    })
    return <ListCard header="Dynamic List" items={fruitOptions} theme="dark" />
  })
  .add('change theme', () => {
    const themes = {
      Light: 'light',
      Dark: 'dark'
    }
    const theme = radios('Themes', themes, 'light');
    return <ListCard theme={theme} />
  })
