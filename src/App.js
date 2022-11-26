import './App.scss';
import { getMaxArray } from './Test1';
// import { getEnglishList } from './Test2';
import Test3 from './Test3';

function App() {
  getMaxArray() // Test 1

  return (
    <div className="App">
      <div className='App-body'>
        <Test3 />
      </div>
    </div>
  );
}

export default App;
