import React from 'react'
import { MainLayout } from '../layouts'
import {Expectation, Hero} from '../features/masterclass'
const masterclass = () => {
  return (
    <MainLayout>
        <Hero />
        <Expectation/>
    </MainLayout>
  )
}

export default masterclass