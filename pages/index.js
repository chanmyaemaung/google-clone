import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'



export default function Home() {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`)

  }

  return (
    <div className='flex flex-col items-center justify-items-center h-screen'>
      <Head><title>Google Clone</title></Head>
      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full cursor-pointer hover:bg-gray-100' />
          {/* Avatar */}
          <Avatar url='https://assets.about.me/background/users/c/h/a/chanmyaemaung_1531913158_341.jpg' />
        </div>
      </header>
      {/* Body */}
      <div className='flex flex-col items-center justify-center mt-20 flex-grow w-4/5'>
        <form>
          <Image src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' width='300' height='100' />
        </form>
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input ref={searchInputRef} type="text" className='flex-grow focus:outline-none' />
          <MicrophoneIcon className='h-5' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button className='btn' onClick={search}>Google Search</button>
          <button className='btn'>I'm Feeling Lucky</button>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
