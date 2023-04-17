import React from 'react'
import {
  Heading,
  Center,
  Text,
  Box,
  Flex,
  Button,
  Icon,
  Image,
  Link,
} from '@chakra-ui/react'
import { Logo } from '../../components'
export const NewHero = () => {
  return (
    <Box
      background={`url('/assets/images/motion/motionHeroShape.svg') #34296B`}
      padding="2% 10%"
      position="relative"
      height={["90vh","100vh"]}
    >
          <Box zIndex={2} as={Link} href="/" pos="absolute" top="3%" left="5%" >
        <Logo color="#fff" />
      </Box>
      <Center flexDir="column" pt={["4.9375rem","4.9375rem","4.9375rem","8.375rem"]} pb="3rem">
        <Heading
          color="brand.white"
          textTransform="uppercase"
          fontSize={["1.25rem","1.25rem","1.25rem","2.5rem"]}
          fontWeight="800"
          textAlign="center"
          lineHeight={[ "1.5225rem", "1.5225rem", "1.5225rem","2.5rem"]}
           mb={[".625rem"]}
        >
          Welcome To
        </Heading>
        <Heading
          fontSize={["3.75rem","3.75rem","3.75rem","6.25rem"]}
          fontWeight="800"
          lineHeight={["3.6862rem","3.6862rem","3.6862rem","6.1437rem"]}
          textAlign="center"
          textTransform="uppercase"
          color="brand.yellow.300"
          maxWidth={["100%","100%","100%","80%"]}
        >
          Perxels Motion School!
        </Heading>
      </Center>
      <Box  height={["25rem","100%"]} position="relative" >
        <Image src="https://res.cloudinary.com/deudl0ryy/image/upload/v1681659973/New_Perxels_Motion_3_1_nuoy5e.gif" alt="motionHeroImage" height={["25rem","100%"]} objectFit={["cover", "contain"]} width="100%" rounded="10px"/>
      </Box>
    </Box>
  )
}
