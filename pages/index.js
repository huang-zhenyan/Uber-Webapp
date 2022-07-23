import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './components/map';


export default function Home() {

  // components = reusable ui element

  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"/>
          <Profile>
            <Name>Tony Huang</Name>
            <UserImage src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/278839803_2017559228436489_4892354214875305207_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7CykBL1AnZQAX8kg_fu&_nc_ht=scontent-yyz1-1.xx&oh=00_AT8u_lwfzBYdMOf0TNuKV73BrQJl6Ym4T-OCbsbcbpYcpA&oe=62E0F38B"/>
          </Profile>
        </Header>
        {/* Action Buttons */}
        <ActionButtons>
          <ActionButton>
            <ActionButtonImage src = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png" />
            Ride
          </ActionButton>
          <ActionButton>
            Wheels
          </ActionButton>
          <ActionButton>
            Reserve
          </ActionButton>

        </ActionButtons>

        {/* Input Buttons*/}


      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`
const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 w-20 text-sm
`

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`
const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.div`
  bg-gray-200 flex-1 m-1 h-32
`
const ActionButtonImage = tw.img`
  h-3/5
`