import {  useEffect, useState } from 'react'


import './App.css'

function App() {
 
  const [data, setData] = useState()

  useEffect( () => {
    fetch('/api/movie/2')
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
