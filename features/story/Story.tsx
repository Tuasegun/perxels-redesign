import React from 'react'
import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import { StoryCard } from './StoryCard'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { MainContainer } from '../../layouts'
export const Story = () => {
  return (
    <MainContainer bg="brand.purple.500">
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', lg: 'center' }}
        w="100%"
        h="100%"
        py={["3.1875rem", "3.4375rem" ]}
        bg="brand.purple.500"
      >
        <Box>
          <Img
            w={{ base: '3.12rem', lg: '6.25rem' }}
            h={{ base: '3.12rem', lg: '6.25rem' }}
            src="/assets/images/story/storyIcon.png"
            alt="Story Icon"
          />

          <Heading
            fontSize={['6xl', '7xl', '7xl']}
            fontWeight="black"
            color="brand.white"
            mt="1.5rem"
          >
            Our Story
          </Heading>

          <Text
            fontSize={["xl", "2xl"]}
            color="brand.white"
            mt="1.5rem"
            maxW={{ base: '100%', lg: '27.3125rem' }}
          >
            With our in-depth training and mentorship program, you will learn the
            core design skills and soft skills to function effectively as a
            designer.
          </Text>

          <Flex mt="1.25rem" gap="0.75rem" align="center" cursor={'pointer'}>
            <Text
              fontSize={{ base: '1.25rem', lg: '1.375rem' }}
              color="brand.yellow.300"
              fontWeight="bold"
            >
              Get Started
            </Text>
            <Text
              fontSize={{ base: '1.25rem', lg: '1.375rem' }}
              color="brand.yellow.300"
            >
              <AiOutlineArrowRight />
            </Text>
          </Flex>
        </Box>

        <Box
          w={{ base: '70%', lg: '55%' }}
          h={{ base: '100%', lg: '50%' }}
          mt={{ base: '2.5rem', lg: '0' }}
          alignContent="left"
        >
          <Img
            w={["15rem", "20rem", "22rem", "31.875rem"]}
            h={["15rem", "20rem", "22rem", "31.875rem"]}
            src="/assets/images/story/storyImage.png"
            alt="Story Image"
          />
          <Box
            pos="absolute"
            // width={{ base: '65%', lg: '29.9375rem' }}
            width={["80%", "65%", "29.9375rem", "29.9375rem"]}
            transform={["translate(10%, -60%)", "translate(40%, -80%)", "translate(40%, -80%)", "translate(10%, -80%)", "translate(40%, -80%)"]}
          >
            <StoryCard />
          </Box>
        </Box>
      </Flex>
    </MainContainer>
  )
}