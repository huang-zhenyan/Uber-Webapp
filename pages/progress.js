import tw from 'tailwind-styled-components'
import Link from 'next/link'

import React from 'react'

const progress = () => {
  return (
    <Wrapper>
        <ConstructionImage src="http://cdn.onlinewebfonts.com/svg/img_290419.png"/>
        <TextContainer>
            This section is under construction! 
        </TextContainer>
        <BackButtonContainer>
            <Link href = '/'>
                <BackButton>
                    Return to home
                </BackButton>
            </Link>
        </BackButtonContainer>
    </Wrapper>
  )
}

export default progress

const Wrapper = tw.div`
    flex h-screen flex-col bg-gray-300
`

const ConstructionImage = tw.img`
    flex h-1/2 w-auto m-auto
`

const TextContainer = tw.div`
    flex m-auto text-3xl
`

const BackButtonContainer = tw.div`
    m-10
`

const BackButton = tw.div`
    bg-black text-white px-5 py-5 text-center hover:scale-105 transition cursor-pointer
`