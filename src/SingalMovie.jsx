import React from 'react'
import {useParams} from 'react-router-dom'

function SingalMovie() {
    const {id} = useParams()
  return (
    <div>
      <h1>Singal Movie:{id}</h1>
    </div>
  )
}

export default SingalMovie
