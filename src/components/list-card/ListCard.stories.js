import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, radios, array, text, optionsKnob as options } from '@storybook/addon-knobs';

import { ListCard } from '../../components';

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

const stories = storiesOf('ListCard', module);

stories.addDecorator(withKnobs);

stories
  .add('1. Default', () => <ListCard />)
  .add('2. Header Text', () => <ListCard header="Custom Header" />)
  .add('3. List Items', () => {
    const items = ['Custom Item', 'Second Item', 'Another Item'];
    return <ListCard header="Header with Items" items={items} />
  })
  .add('4*. Change Theme', () => {
    const themes = {
      Light: 'light',
      Dark: 'dark'
    }
    const theme = radios('Themes', themes, 'light');
    return <ListCard theme={theme} />
  })
  .add('5*. Dynamic Header', () => {
    const header = text('Header', 'edit me');
    return <ListCard header={header} theme="dark" />
  })
  .add('6*. Dynamic List 1', () => {
    const fruitText = array('Fruits', selectedFruit);
    return <ListCard header="Dynamic List" items={fruitText} theme="dark" />
  })
  .add('7*. Dynamic List 2', () => {
    const fruitOptions = options('Fruit', allFruits, selectedFruit, { 
      display: 'check' 
    })
    return <ListCard header="Dynamic List" items={fruitOptions} theme="dark" />
  })
  
  
