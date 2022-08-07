import tw from 'tailwind-styled-components'
import { useState } from 'react'
import { useRouter } from 'next/router'

import React from 'react'

const payment = () => {
    const router = useRouter()
    const { ride } = router.query

  return (
    <Wrapper>
        {ride}
    </Wrapper>
  )
}

export default payment

const Wrapper = tw.div`
`