import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Intool Dev' }: Props) => (
  <div className="flex flex-col h-screen bg-white dark:bg-neutral-900">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container mx-auto md:pt-5 lg:pt-20 px-4 max-w-2xl text-center flex-grow">
      <Link href="/">
        <h1 className="text-6xl md:text-8xl tracking-tighter leading-tight text-gray-700 dark:text-neutral-700 cursor-pointer">in<span className="font-bold dark:text-gray-800">tool</span></h1>
      </Link>
      <div className="mt-10">
        <form className="flex flex-wrap items-center justify-center">
          <input className="w-full px-4 py-3 text-gray-700 dark:text-white bg-gray-100 dark:bg-neutral-800 focus:outline-gray-200 dark:focus:outline-neutral-600 focus:bg-white dark:focus:bg-neutral-800 focus:border-gray-500 dark:focus:border-neutral-700" type="text" placeholder="Search" />
        </form>

        <div>
          {children}
        </div>
      </div>
    </div>
  <footer className="justify-center items-center text-center">
      <span>Made by CANKOD</span>
    </footer>
  </div>
)

export default Layout
