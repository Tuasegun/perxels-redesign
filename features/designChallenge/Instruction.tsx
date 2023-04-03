import React from 'react'
import { Box, Heading, Text, Image, HStack, Center, SimpleGrid } from '@chakra-ui/react'
import {InstructionBox} from './InstructionBox'
import {ChallengeInstructionContent, ChallengeInstructionInterface } from '../../constant'
import { MainContainer } from '../../layouts'
export const Instruction = () => {
  return (
    <Box
    py="6.25rem"
    >
        <MainContainer>
        <Center>
        <Box
            bg="#E3719C"
            borderRadius={"30px"}
            padding={"1rem 1.5625rem"}
            display="flex"
            columnGap={"1rem"}
            >
                
                <Image src="assets/icons/badgeWhite.svg" alt=""/>
                <Text
                fontSize={"18px"}
                fontWeight="700"
                color="#FFF"
                >
               How to get started
                </Text>
        </Box>
        </Center>
        <Heading
        textAlign="center"
        fontSize="50px"
        lineHeight={"60.9px"}
        color="#000000"
        mt="20px"
        >
                Go from Start-to-Finish in 3 simple steps
        </Heading>

        <SimpleGrid columns={[1, 1, 1, 3]} spacing="2.5rem" mt="2.5rem">
           {
                ChallengeInstructionContent.map((item, index) => (
                    <InstructionBox key={item.id} image={item.image} title={item.title} text={item.text} />
                ))
           }
        </SimpleGrid>
        </MainContainer>
    </Box>
  )
}
