import './App.css';

import Banner from './components/Banner/Banner';
import Exhibit from './components/Exhibits/Exhibits';

function App() {
  return (
    <div className="App">
      <Banner bannerText="SEXTANT" />
      <Exhibit name="This is an Exhibit 1 Heading">This is Exhibit Content</Exhibit>

    </div>

  );
}

export default App;
