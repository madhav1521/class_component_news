import React from 'react'
import { Link } from 'react-router-dom'

export default function Page1() {
  return (
    <>
    <p>Page1</p>
    <Link to='/page2'>Page2</Link>
    </>
  )
}
