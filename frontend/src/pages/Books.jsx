import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';

const Books = () => {
  useEffect(() => {
    const fetchAll = async () => {
        try {
            const res = await axios.get("http://localhost:5000/")
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    fetchAll()
}, [])

  return (
    <div>Books</div>
  )
}

export default Books