import { Box, Heading, Text } from '@chakra-ui/react'
import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
import { MainContainer } from '../../layouts'
import { HeroAnimation } from './HeroAnimation'

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const tl = useRef<any>(gsap.timeline({ paused: true }));

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current
        .from(headingRef.current, { opacity: 0, y: 0, duration: 1, delay: 1 })
        .from(descRef.current, { opacity: 0, y: 200, duration: 1 }, '-=0.5')
        .from(".hero-animation", { opacity: 0, y: 300, duration: 1 }, '-=0.5')
        .play()
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box
      ref={heroRef}
      w="full"
      bg={`url(./assets/images/heroBg.png) center/cover no-repeat`}
    >
      <MainContainer bg="none">
        <Heading
          maxW="556px"
          fontSize={['2.3rem', '3rem', '4.375rem']}
          fontWeight="black"
          textAlign={['left', 'left', 'left', 'center']}
          m={['0', '0', '0', '0 auto']}
          pt="3.375rem"
          ref={headingRef}
          lineHeight={1.2}
        >
          Learn, Live, Love UIUX Design
        </Heading>

        <Text
          textAlign={['left', 'left', 'left', 'center']}
          mt="21px"
          fontSize="2xl"
          ref={descRef}
        >
          Equipping designers to solve problems with design.
        </Text>

        <HeroAnimation />
      </MainContainer>
    </Box>
  )
}
