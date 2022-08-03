import './App.css';

import Banner from './components/Banner/Banner';
import Exhibit from './components/Exhibits/Exhibits';
import IPDetails from './components/IPDetails/IPDetails';
import PacketLatencyDisplay from './components/PacketLatencyDisplay/PacketLatencyDisplay';

function App() {
  return (
    <div className="App">
      <Banner bannerText="SEXTANT" />
      <div className="Container">
        <Exhibit name="User's IPv4 Address">
          <IPDetails url='https://api.ipify.org?format=json' />
        </Exhibit>
        <Exhibit name="User's IPv6 Address">
          <IPDetails url='https://api64.ipify.org?format=json' />
        </Exhibit>
        <Exhibit name="Pylon Packet Latency Display">
          <PacketLatencyDisplay />
        </Exhibit>
      </div>
    </div>

  );
}

export default App;
