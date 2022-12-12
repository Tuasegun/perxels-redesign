import { Box } from '@chakra-ui/react'
import React from 'react'
import { SectionHeader } from '../../components'
import { MainContainer } from '../../layouts'
import { TestimonialGrid } from '../testimonial'

export const Testimonial = () => {
  return (
    <MainContainer>
        <Box my="3.625rem">
            <SectionHeader
                subTitle="Testimonials"
                title="Our Students are getting jobs 100%"
            />
            <TestimonialGrid />
        </Box>
    </MainContainer>
  )
}
