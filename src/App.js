import { useEffect } from 'react';
import './App.scss';
import { getMaxArray } from './Test1';
import Test3 from './Test3';

const arr1 = [0,10,1,99,9,8,79,91,22,32,12]
const arr2 = [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90]
const arr3 = [1, 10, 19, 11, 13, 16, 19]

function App() {
  // Test 1
  console.log('=========== TEST 1 ===========')
  console.log(getMaxArray(arr1));
  console.log(getMaxArray(arr2));
  console.log(getMaxArray(arr3));

  useEffect(() => {
    // refreshList6()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <div className='App-body'>
        <Test3 />
      </div>
    </div>
  );
}

export default App;
