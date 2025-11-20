import React, { Suspense } from 'react'
import UserTable from './new/UserTable'
import Link from 'next/link';

interface props {
    searchParams: Promise<{ sortOrder?: string }>
}

const UsersPage = async ({ searchParams }: props ) => {

    const params = await searchParams; 
    const sortOrder = params.sortOrder ?? 'name';
    
    return (
        <>
            <h1>Users</h1>
            <Link href="/users/new" className='btn'>New User</Link>
            <Suspense fallback={<p>Loading...</p>}>
                <UserTable sortOrder={ sortOrder } />
            </Suspense>
            
            
        </>
    )
}

export default UsersPage