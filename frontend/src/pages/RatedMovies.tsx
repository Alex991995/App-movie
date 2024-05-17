import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../features/hooks/reduxHooks'
import { selectRating } from '../features/slices/moviesSlice'
import ListOfMovies from '../components/ListOfMovies'
import PaginationComponent from '../components/PaginationComponent'

function RatedMovies() {
  const ratedMovies = useAppSelector(selectRating)
  const dispatch = useAppDispatch()
  const [page, setPage] = useState(1);
  const moviesPerPage = 4;
  const allPages = Math.ceil(ratedMovies.length / 4) 


  const indexOfLastMovie = page * moviesPerPage
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage

  const sortedMovie = ratedMovies.slice(indexOfFirstMovie, indexOfLastMovie)
console.log(sortedMovie)
  return (

<>
    <ListOfMovies dataForListOfMovies={sortedMovie} />
    <PaginationComponent allPages={allPages} page={page} setPage={setPage}/>
</>
    
  )
}

export default RatedMovies