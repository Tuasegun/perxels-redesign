import React from 'react'
import { Hero, Instruction, Task, Prizes, Submission, ChallengeForm, Testimonial, Header, Winners } from '../features/designChallenge'
import { Footer } from '../components'
const challenge = () => {
  return (
    <div>
        <Header/>
        <Hero />
        <Instruction/>
        <Task/>
        <Prizes/>
        <Submission/>
        <Winners/>
        {/* <ChallengeForm/> */}
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default challenge