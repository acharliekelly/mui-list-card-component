import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, radios, text, optionsKnob as options } from '@storybook/addon-knobs';

import { ListCard } from '../../components';

const stories = storiesOf('ListCard', module);

stories.addDecorator(withKnobs);

stories
  .add('#1. Default', () => <ListCard />)
  .add('#2. Header Text', () => <ListCard header="Custom Header"></ListCard>)
  .add('#3. List Items', () => {
    const items = ['Custom Item', 'Second Item', 'Another Item'];
    return <ListCard header="Header with Items" items={items}></ListCard>
  })
  .add('#4. Change Theme [bonus]', () => {
    const themes = {
      Light: 'light',
      Dark: 'dark'
    }
    const theme = radios('Themes', themes, 'light');
    return <ListCard theme={theme} />
  })
  .add('#5. Dynamic Header [extra]', () => {
    const header = text('Header', 'Header Text');
    return <ListCard header={header} />
  })
  .add('#6. Dynamic Items [extra]', () => {
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
  
