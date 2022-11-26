import './App.scss';
import { getMaxArray } from './Test1';
import { useRandomList } from './Test2';
// import { getEnglishList } from './Test2';
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

  console.log('=========== TEST 2 ===========')
  const {list6, list18, list24} = useRandomList()
  console.log('list6:', list6)
  console.log('list18:', list18)
  console.log('list24:', list24)


  return (
    <div className="App">
      <div className='App-body'>
        <Test3 />
      </div>
    </div>
  );
}

export default App;
