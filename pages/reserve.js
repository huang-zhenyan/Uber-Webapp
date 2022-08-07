import tw from "tailwind-styled-components"
import React from 'react'
import Link from 'next/link'



const reserve = () => {
  return (
    <Wrapper>
        { /*Button Container */ }
        <ButtonContainer>
            <Link href="/">
                <BackButton src="https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_1280.png"/>
            </Link>
        </ButtonContainer>
        { /*Image*/ }
        <ReserveImageContainer>
            <ReserveImage src = "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1647500749/assets/f7/0260f8-6c81-4656-b552-c2b42f3df97b/original/ANZ-Reserve_Web-%283_2-Ratio.-Highlight-block%29.svg"/>
        </ReserveImageContainer>

        { /* Reserve Details */ }
        <ReserveDetailContainer>
            Reserve
            <Detail>
            <DetailImage src = "https://icon-library.com/images/calendar-icon-white-png/calendar-icon-white-png-2.jpg"/>
                Choose your exact pickup time up to 30 days in advance
            </Detail>
            <Detail>
            <DetailImage src = "https://clipart.world/wp-content/uploads/2022/01/Hourglass-Clipart-Black-and-White-6.png"/>
                Extra wait time included to meet your ride
            </Detail>
            <Detail>
            <DetailImage src = "https://www.pngall.com/wp-content/uploads/2/Credit-Card-PNG-Free-Image.png"/>
                Cancel at no charge up to 60 minutes in advance
            </Detail>
            <Link href = "/progress">
            <ReserveButtonContainer>
                <ReserveButton>
                    Reserve a ride
                </ReserveButton>
            </ReserveButtonContainer>
            </Link>
        </ReserveDetailContainer>
        { /* Reserve Button */ }
        

    </Wrapper>
  )
}

export default reserve

const Wrapper = tw.div`
    flex-col h-screen
`
const ButtonContainer = tw.div`
    absolute top-4 left-4 z-10  
`

const BackButton = tw.img`
    flex flex-1 bg-white h-10 my-3 mx-3 rounded-full shadow-md transform hover:scale-105 transition cursor-pointer object-contain
`

const ReserveImageContainer = tw.div`
    flex-1
`

const ReserveImage = tw.img`
    h-96 w-full bg-orange-400
`

const ReserveDetailContainer = tw.div`
    flex-1 flex-col p-4 items-center text-5xl
`

const DetailImage = tw.img`
    h-14 mr-4
`

const Detail = tw.div`
    flex text-xl items-center justify-center border-b-2 border-gray-300 my-10
`

const ReserveButtonContainer = tw.div`
`

const ReserveButton = tw.div`
    my-4 mx-10 bg-black text-white py-5 text-center cursor-pointer text-xl hover:scale-105 transition
`

