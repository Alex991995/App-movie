import React from 'react'
import { useAppSelector, useAppDispatch } from '../features/hooks/reduxHooks'
import { selectRating } from '../features/slices/moviesSlice'
import ListOfMovies from '../components/ListOfMovies'

function RatedMovies() {
  const ratedMovies = useAppSelector(selectRating)
  const dispatch = useAppDispatch()


  return (
    <ListOfMovies dataForListOfMovies={ratedMovies} />
  )
}

export default RatedMovies