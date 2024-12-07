import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'



const Detail = () => {
  const params = useParams()
  const [dentist, setDentist] = useState({})

  console.log(params)

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  console.log(url)

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data)
      setDentist(res.data)
    })
  }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h2>{dentist.name}</h2>
      <h4>Email: {dentist.email}</h4>
      <h4>Phone: {dentist.phone}</h4>
      <h4>Website: {dentist.website}</h4>
    </>
  )
}

export default Detail
