import Image from 'next/image'
import { UserButton, auth } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

          <div className='flex flex-col items-center justify-center text-center'>
            
          <div className="flex items-center">

            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>

            <UserButton afterSignOutUrl="/" />

          </div>
          </div>
      </div>
    </div>
  )
}
