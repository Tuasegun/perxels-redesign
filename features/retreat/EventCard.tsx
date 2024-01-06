import React from 'react'
import {Box, Text, Heading} from '@chakra-ui/react'
import {RetreatInfoInterface} from '../../constant'
import Image from 'next/image'

export const EventCard = ({title, icon, content, fontSize, bgColor}:RetreatInfoInterface ) => {
  return (
    <Box backgroundColor={bgColor}  py="3.5625rem" display="flex" alignItems="center" flexDir="column">
        <Image src={icon} alt="retreat4" width="60" height="60"/>
        <Heading lineHeight="110%" fontFamily="Montserrat" fontSize={fontSize} fontWeight="900" mt="1.25rem">
        {title}
        </Heading>
        <Text fontSize="1.25rem" mt="1rem" fontFamily="Montserrat">
        {content}
        </Text>

    </Box>
  )
}
