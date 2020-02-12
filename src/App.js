import React, { Component } from 'react';
import { ListCard } from './components';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Components</h1>
        </header>
        <div className="component-list">
          {/* <Button href="#" theme='go'> Button </Button> */}
          <ListCard 
            header="Libraries" 
            items={[
              'Material UI',
              'Ant Design',
              'Blueprint',
              'React-Bootstrap',
              'Onsen UI',
              'Evergreen',
              'Grommet',
              'Elemental UI'
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
