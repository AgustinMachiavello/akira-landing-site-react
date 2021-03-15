import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Landing from './pages/Landing';


class App extends React.Component {

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
