import React from 'react'
import {Box, keyframes} from '@chakra-ui/react'
export const Wave = () => {
    const wave = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
    0%{
        transform: translateX(0);
    }

    `
  return (
    <Box
    
    >
    <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect id="activity 1" width="73" height="73" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use  xlinkHref="#image0_2519_11606" transform="scale(0.005)"/>
    </pattern>
    <image id="image0_2519_11606" data-name="activity.png" width="200" height="200" xlinkHref="data:image/png;base64,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"/>
    </defs>
    </svg>
    </Box>
  )
}