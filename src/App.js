import './App.css';
import Navbar from './components/Navbar'
import Data from './data'
import Place from './components/Place'

function App() {
  const place = Data.map(item => {
    return (
      <Place
      key = {item.id}
      {...item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <div >
        {place}
      </div>
    </div>
  );
}

export default App;
