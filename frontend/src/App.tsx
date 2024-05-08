import {  useEffect, useState } from 'react'


import './App.css'

function App() {
 
  const [data, setData] = useState()
  const [gentes, setGentes] = useState()

  useEffect( () => {
    fetch('/api/movie/2')
    .then(data => data.json())
    .then(res => setData(res))
    .catch(err => console.error(err))
  },[])

  useEffect( () => {
    fetch('/api/genres')
    .then(data => data.json())
    .then(res => setGentes(res))
    .catch(err => console.error(err))
  },[])

  useEffect( () => {
    fetch('/api/movies')
    .then(data => data.json())
    .then(res => setGentes(res))
    .catch(err => console.error(err))
  },[])


  console.log(data)
  console.log(gentes)

  return(
    <>ji</>
  )
}

export default App
