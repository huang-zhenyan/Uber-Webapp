import React from 'react'
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { wheelList } from '../data/wheelList'



const WheelSelector = ( {pickupCoordinates, dropoffCoordinates} ) => {
    const [rideDuration, setRideDuration] = useState(0)
    // get ride duration from mapbox api
    // needs pickup coordinates, dropoff coordinates
    useEffect(() => {
        // template literal
        // eslint-disable-next-line react-hooks/exhaustive-deps
        rideDuration = fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}
        ?access_token=pk.eyJ1IjoiYmVlZm9mdGVycm9yIiwiYSI6ImNsNXZ1bzR4ajBkanEzaW56c2x3dXZ6NWEifQ.1S1MB-l_0wBg1BfOvqLNVA`
        )
        .then(res => res.json())
        .then(data => {
            setRideDuration(data.routes[0].duration / 100)
        }).catch((e) => console.log(e))
    }, [pickupCoordinates, dropoffCoordinates])

  return (
    <Wrapper>
        <Title>Choose a ride, or swipe up for more</Title>
        <WheelList>
            { wheelList.map((wheel, index) => (
                <Wheel key={index}>
                <WheelImage src={wheel.imgUrl}/>
                <WheelDetails>
                    <Service>{wheel.service}</Service>
                    <Time>5 min away</Time>
                </WheelDetails>
                <Price>
                    {'$' + (rideDuration*wheel.multiplier).toFixed(2)}
                </Price>
                </Wheel>
            )) }
        </WheelList>
        
    </Wrapper>
  )
}

export default WheelSelector

const Wrapper = tw.div`
    flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`

const WheelList = tw.div`
    overflow-y-scroll
`

const Wheel = tw.div`
    flex p-4 items-center border border-gray cursor-pointer hover:scale-105 transition mx-10 my-2   
`

const WheelImage = tw.img`
    h-14 mr-3
`

const WheelDetails = tw.div`
    flex-1
`

const Service = tw.div`
    font-medium
`

const Time = tw.div`
    text-xs text-blue-500
`

const Price = tw.div`
    text-sm
`