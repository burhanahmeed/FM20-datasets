import * as React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="d-flex justify-content-between">
      <div className="logo">
        <Link href="/" passHref={true}>
          <Image src="/imgs/logo.png" alt="me" width="100" height="64" />
        </Link>
      </div>
      <div>
        <Link href="https://github.com/burhanahmeed/FM20-datasets">
          <a className="btn btn-secondary">Github</a>
        </Link>
      </div>
    </div>
  )
}