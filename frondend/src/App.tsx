import {  useEffect, useState } from 'react'


import './App.css'

function App() {
 
  const [data, setData] = useState(null)

  useEffect( () => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ada8bfd2a3b8c2138bffc8c0ffa58212')
    .then(data => data.json())
    .then(res => setData(res))
    .catch(err => console.error(err))
  },[])

  console.log(data)

  return(
    <>ji</>
  )
}

export default App
