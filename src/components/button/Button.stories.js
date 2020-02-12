import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean} from '@storybook/addon-knobs';

import { Button } from '../../components';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('with disabled prop activated', () => {
    const disabled = boolean('Disabled', true);
    return <Button disabled={disabled} > Disabled </Button>
  })
  .add('with custom themes', () => {
    const theme = select('custom theme', ['go', 'stop', 'yield'], 'go');
    return <Button theme={theme}> Themed </Button>
   });
