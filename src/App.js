import logo from './logo.svg';
import './App.css';
import { getEnglishList } from './Test2';
import Test3 from './Test3';

function App() {
  const {list6, list18, list24} = getEnglishList()
  return (
    <div className="App">
      <div className='App-body'>
        <Test3 />
      </div>
    </div>
  );
}

export default App;
