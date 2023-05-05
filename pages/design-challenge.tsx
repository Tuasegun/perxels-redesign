import React from 'react'
import { Hero, Instruction, Task, Prizes, Submission, ChallengeForm, Testimonial, Header } from '../features/designChallenge'
import { Footer } from '../components'
const designChallenge = () => {
  return (
    <div>
        <Header/>
        <Hero />
        <Instruction/>
        <Task/>
        <Prizes/>
        <Submission/>
        <ChallengeForm/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default designChallenge