import Link from 'next/link'
import React from 'react'

export default function LandingActionButton({btnSize="btn-md"}) {
  return (
    <Link href={"/app"}  className={`btn ${btnSize} btn-primary rounded-full text-white`} >Get Started ― It's Free</Link>

  )
}
