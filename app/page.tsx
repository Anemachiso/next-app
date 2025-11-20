import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import landscape from '@/public/images/landscape.jpeg';

export default async function Home() {

  const session = await getServerSession(authOptions);

  return (
    <main>
      <Image src={landscape} alt='Beautiful landscape' fill className='object-contain'/>
    </main>
  )
}
