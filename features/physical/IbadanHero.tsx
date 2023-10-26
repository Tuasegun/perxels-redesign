import React from 'react'
import { Box, Heading, Image, Flex, Text, Center } from '@chakra-ui/react'
import Link from 'next/link'

export const IbadanHero = () => {
  return (
    <Box
    background={[`url(/assets/images/class-group/ibadanMobile.png) no-repeat center center`,`url(/assets/images/class-group/ibadanDesktop.png) no-repeat center center`]}
    minHeight={["43.75rem","25rem"]}
    backgroundSize="cover"
    >
        <Center
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        minHeight={["43.75rem","25rem"]}
        >
        <Heading
        color="#FFFFFF"
        fontSize="2.8125rem"
        fontWeight="800"
        textAlign="center"
        >
           Ring Road, Ibadan
        </Heading>
        <Text
        color="#FFF"
        as={Link}
        href="/"
        >
        VIEW ON GOOGLE MAPS
        </Text>
        </Center>
    </Box>
  )
}
