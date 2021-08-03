import './App.css';
import {useQuery} from 'react-query'
import axios from 'axios';
function App() {
  
  const { isLoading, isError, data, error } = useQuery('dogs',()=>axios("https://random.dog/woof.json"))

if (isError) return <h1>Error:{error.message}, try again  </h1>
if(isLoading)return <h1>Loading ...</h1>
  return (
    <div className="App">
    <img src={data.data.url} />
    </div>
  );
}

export default App;
