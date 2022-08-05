import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components'
import {useRouter} from 'next/router'
import {signInWithPopup, onAuthStateChanged} from 'firebase/auth' 
import {auth, provider} from '../firebase'


const Login = () => {
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, []);

  return (
    <Wrapper>
        <UberLogo src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png"/>
        <Title>
            Log in to access your account
        </Title>
        <HeadImage src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1565733741/assets/0f/9719ad-69a4-4c0d-9444-ce6d8c3f9759/original/Signup.svg"/>
        <SignInButton onClick={() => signInWithPopup(auth, provider)}>
            Sign in with Google
        </SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
    flex flex-col h-screen bg-gray-100 p-5
`

const UberLogo = tw.img`
    h-20 w-auto object-contain self-start
`

const HeadImage = tw.img`
    object-contain h-96 w-full
`

const Title = tw.div`
    text-5xl pt-4 text-gray-500 mb-4
`

const SignInButton = tw.button`
    bg-black text-white text-center py-5 mt-8 self-center w-4/5 transform hover:scale-105 transition
`