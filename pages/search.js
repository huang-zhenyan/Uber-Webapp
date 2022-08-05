import { Input } from 'postcss'
import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Search = () => {

  const router = useRouter()
  const [ pickup, setPickup ] = useState("");
  const [ dropoff, setDropoff ] = useState("");
  const { ridetype } = router.query

  return (
  <Wrapper>
    { /*Button Container */ }
    
    <ButtonContainer>
      <Link href="/">
      <BackButton src="https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_1280.png"/>
      </Link>
    </ButtonContainer>
    { /*Input Container */ }
    <InputContainer>
      <FromToIcons>
        <Circle src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Circle_Davys-Grey_Solid.svg/1200px-Circle_Davys-Grey_Solid.svg.png"/>
        <Line src="https://www.troax.com/sites/default/files/styles/product_image_dektop_/public/pim_images/12072.png?itok=IPqi8SLZ"/>
        <Square src="https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png"/>
      </FromToIcons>
      <InputBoxes>
        <Inputs 
          placeholder="Enter pickup location"
          value = {pickup}
          onChange = {(e)=> setPickup(e.target.value)}
          />
        <Inputs 
          placeholder="Where to?"
          value = {dropoff}
          onChange = {(e)=> setDropoff(e.target.value)}
          />
      </InputBoxes>
      <PlusIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/500px-Plus_symbol.svg.png"/>

    </InputContainer>
    { /* Saved Places */ }
    <SavedPlaces>
      <StarIcon src="http://www.clker.com/cliparts/T/y/k/o/D/E/white-star-md.png"/>
      Saved Places
    </SavedPlaces>

    { /* Confirm Location */ }
    <Link href={{
            pathname: "/confirm",
            query: {
              pickup: pickup,
              dropoff: dropoff,
              ridetype: ridetype
            }
          }}>
    <ConfirmButtonContainer>
      Confirm Locations
    </ConfirmButtonContainer>
    </Link>

  </Wrapper>
  )
}

export default Search

const Wrapper = tw.div`
  bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
  bg-white px-4
`

const BackButton = tw.img`
  h-10 transform hover:scale-110 transition cursor-pointer
`

const InputContainer = tw.div`
  bg-white flex items-center px-4 mb-2
`

const FromToIcons = tw.div`
  w-10 flex flex-col mr-2 items-center
`

const Circle = tw.img`
  h-2.5
`

const Line = tw.img`
  h-10
`

const Square = tw.img`
  h-3
`

const InputBoxes = tw.div`
  flex flex-col flex-1
`

const Inputs = tw.input`
  h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
  w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
  flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`
  bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmButtonContainer = tw.div`
  bg-black text-white px-5 py-5 mx-10 my-5 text-xl flex items-center justify-center transform hover:scale-105 transition cursor-pointer
`
