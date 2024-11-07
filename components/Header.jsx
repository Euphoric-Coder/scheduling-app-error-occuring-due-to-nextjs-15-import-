import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button';
import { PenBox } from 'lucide-react';

const Header = () => {
  return (
    <nav className="mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2">
      <Link href={"/"} className="flex items-center">
        <div className="inline-flex hover:scale-105 transition-transform duration-500 ease-in-out">
          <Image
            src="/icon.png"
            alt="Logo of schedula"
            width={150}
            height={60}
            className="h-14 w-auto"
          />
          <Image
            src="/logo.png"
            alt="Logo of schedula"
            width={150}
            height={60}
            className="h-14 w-auto"
          />
        </div>
      </Link>
      <div className='flex items-center gap-4'>
        <Link href={'/events?create=true'}>
            <Button className='flex items-center gap-2'>
               <PenBox size={24}/> Create Event
            </Button>
        </Link>
        <Button variant='outline'>Login</Button>
      </div>
    </nav>
  );
}

export default Header