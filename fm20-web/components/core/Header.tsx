import * as React from 'react'

import Image from 'next/image'

export default function Header() {
  return (
    <div className="d-flex justify-content-between">
      <div className="logo">
        <a href="/">
          <Image src="/imgs/logo.png" alt="me" width="100" height="64" />
        </a>
      </div>
      <div>
        <a href="/" className="btn btn-secondary">Github</a>
      </div>
    </div>
  )
}