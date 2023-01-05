import { Box, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { SectionHeader } from '../../components'
import { ClassGroupContent } from '../../constant'
import { MainContainer } from '../../layouts'
import { ClassCard } from './ClassCard'

import gsap from 'gsap'

import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const OurClassGroup = ({ title }: { title?: string }) => {

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.class-group-card', {
        opacity: '0',
        y: 200,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".class-group-wrapper",
          start: "-900 top",
          end: "bottom bottom",
        },
        stagger: 1,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <Box mt={["3.75rem", "3.75rem", "7.5rem"]} className="class-group-wrapper">
      <MainContainer>
        <SectionHeader
          subTitle={title || "Our CLass Groups"}
          title="Here At Perxels,"
          paragraph="Our class groups are designed to accommodate your current level in design and unique learning process"
        />

        <SimpleGrid mb={["3.75rem", "3.75rem", "7rem"]} columns={[1, 1, 2]} spacing="1rem">
          {ClassGroupContent.map(({ title, content, image, link }) => (
            <ClassCard
              key={title}
              link={link}
              title={title}
              content={content}
              image={image}
            />
          ))}
        </SimpleGrid>
      </MainContainer>
    </Box>
  )
}
