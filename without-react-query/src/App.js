import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [isError, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)
      setError(false)
      try {

        const res = await axios("https://random.dog/woof.json")

        setData(res.data)
      }
      catch {
        setError(true)
      }
      setLoading(false)
    }
    fetchData();
  }, [])

  if (isError) return <h1>Error: try again  </h1>
  if (isLoading) return <h1>Loading ...</h1>

  console.log(data);
  return (
    <div className="App">
      <img src={data.url} />

    </div>
  );
}

export default App;
