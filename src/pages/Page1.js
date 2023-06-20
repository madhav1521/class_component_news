import React from 'react'
import { Link } from 'react-router-dom'

export default function Page1() {
  return (
    <>
    <p>This is Page1</p>
    <Link to='/page2'>Go back to Page2</Link>
    </>
  )
}
