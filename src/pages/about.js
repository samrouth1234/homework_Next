import CardAboutComponent from '@/components/CardAboutComponent'
import React from 'react'
export default function about() {
  return (
    <div className='container mt-3 d-flex justify-content-evenly flex-wrap'>
      <CardAboutComponent/>
      <CardAboutComponent/>
      <CardAboutComponent/>
      <CardAboutComponent/>
    </div>
  )
}
