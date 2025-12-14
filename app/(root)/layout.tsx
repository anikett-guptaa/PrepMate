import Link from 'next/link'
import React, { ReactNode } from 'react'
import Image from "next/image";

const Rootlayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex mx-auto max-w-7xl flex-col gap-12 my-12 px-16 max-sm:px-4 max-sm:my-8">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepMate</h2>
        </Link>
      </nav>

      {children}
    </div>
  )
}

export default Rootlayout