import './App.css';

import Banner from './components/Banner/Banner';
import Exhibit from './components/Exhibits/Exhibits';
import IPDetails from './components/IPDetails/IPDetails';

function App() {
  return (
    <div className="App">
      <Banner bannerText="SEXTANT" />
      <Exhibit name="User's IPv4 Address">
        <IPDetails url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name="User's IPv6 Address">
        <IPDetails url='https://api64.ipify.org?format=json' />
      </Exhibit>

    </div>

  );
}

export default App;
