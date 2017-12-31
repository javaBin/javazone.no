//@flow
import * as React from 'react';
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Promo from './Components/Promo/Promo';
import './Styles/App.scss';
import * as fonts from './Styles/Fonts.scss';

const links = ['Info', 'Tickets', 'Program', 'Workshops', 'Speakers', 'Partners', 'Videos'];

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar links={links} />
        <Promo>
          <div className="test">
            <h1>JAVAZONE 2018</h1>
          </div>
        </Promo>
      </div>
    );
  }
}

export default App;
