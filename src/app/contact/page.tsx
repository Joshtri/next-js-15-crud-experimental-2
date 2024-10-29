import ContactTable from '@/components/ContactTable'
import CuButton from '@/components/CuButton'
import Search from '@/components/Search'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='max-w-screen-lg mx-auto mt-5'>
        <Search/>
        <div className='mt-4'>
          <CuButton label="Add" color="secondary" size="sm" href="/"/>
        </div>
        <ContactTable/> 
      </div>
    </>
  )
}
