//@flow
import * as React from 'react';
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Promo from './Components/Promo/Promo';
import './Styles/App.scss';

const links = ['Info', 'Tickets', 'Program', 'Workshops', 'Speakers', 'Partners', 'Videos'];

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar links={links} />
        <Promo />
        <div className="test"></div>
      </div>
    );
  }
}

export default App;
