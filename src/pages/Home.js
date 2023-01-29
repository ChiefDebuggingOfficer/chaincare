import React from 'react'
import styled from "styled-components"
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import logo from "../assets/chaincare-removebg.png"
import doctor from "../assets/animation.gif"
import { useEffect } from 'react'
import { useState } from 'react'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 6rem;

  animation-duration: 2s;
  animation-timing-function: ease;
  animation-name: logoAnimation;
  animation-fill-mode: forwards;
`

const LogoImg = styled.img`
  height: 4.5rem;
`

const LogoText = styled.span`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2rem;
  text-align: left;
`

const HomeScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AnimationImg = styled.img`
  height: 50vh;
  margin-top: -16vh;
`

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const BottomSection = styled.div`
  position: absolute;
  bottom: 13vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ButtonPrimary = styled.button`
  background-color: #014dc5;
  color: white;

  font-size: 1rem;
  font-weight: 600;
  padding: 15px;
  width: 180px;
  border: none;
  border-radius: 15px;
  margin-left: 5px;

  cursor: pointer;
`

const ButtonSecondary = styled.button`
  background-color: #e7e8eb;
  color: #717584;

  font-size: 1rem;
  font-weight: 600;
  padding: 15px;
  width: 180px;
  border: none;
  border-radius: 15px;
  margin-right-: 5px;

  cursor: pointer;
`

const BlackScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  z-index: 3;
  background-color: rgba(0,0,0,0.3)
`

const Modal = styled.form`
  position: absolute;
  z-index: 5;

  height: 90vh;
  width: 600px;
  max-width: 100%;

  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Heading = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    width: 100%;
`

const SubHeading = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    width: 100%;
`

const Input = styled.input`
  background-color: #e7e8eb;
  color: #717584;

  font-size: 1rem;
  font-weight: 600;
  padding: 15px;
  border: none;
  border-radius: 15px;
  margin-right: 5px;

  cursor: pointer;
  width: 100%;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    max-width: 100%;
`

const Home = () => {

  const { address, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ address })
  const { data: ensName } = useEnsName({ address })
  const { connect, error } =
    useConnect({
      connector: new MetaMaskConnector,
    })
  const { disconnect } = useDisconnect()

  useEffect(() => {
    console.log("Connected To: " + address + " ENS Avatar: " + ensAvatar + " ENS Name: " + ensName)
  }, [address, ensAvatar, ensName])

  const [createAccountClicked, setCreateAccountClicked] = useState(false)

  return (
    <Wrapper>
      <HomeScreen>
        <LogoDiv style={{ position: "absolute", top: 0, left: 0, width: "100vw", }} >
          <LogoImg src={logo} style={{ height: "3rem" }} />
          <LogoText style={{ fontSize: "2rem", lineHeight: "2rem" }} >ChainCare</LogoText>
        </LogoDiv>

        <AnimationImg src={doctor} />
        <LogoText style={{ fontWeight: "400", fontSize: "1.2rem", maxWidth: "300px", textAlign: "center", marginTop: "-20px" }} >Store Your Medical Data, In An Encrypted, Decentralized, And Easy To Access Way</LogoText>

        <BottomSection>
          <ButtonsDiv >
            <ButtonSecondary disabled={!isConnected} onClick={disconnect} >Disconnect</ButtonSecondary>
            <ButtonPrimary onClick={() => { !isConnected ? connect() : setCreateAccountClicked(!createAccountClicked) }} >{isConnected ? "Create Account" : "Connect"}</ButtonPrimary>
          </ButtonsDiv>
        </BottomSection>


        {error && <div style={{ color: "red" }} >{error.message}</div>}

        {
          createAccountClicked ?
            <>
              <BlackScreen />
              <Modal>
                <Section style={{ margin: "20px 0" }} >
                  <Heading style={{ textAlign: "center" }} >Create Account</Heading>
                  <SubHeading style={{ textAlign: "center" }} >Your data will be stored in an encrypted format using cryptography on blockchain, therefore this will trigger a blockchain transaction.</SubHeading>
                </Section>
                <Section style={{ width: "70%" }} >
                  <SubHeading>Enter Your Full Name</SubHeading>
                  <Input placeholder={"Full Name"} type={"text"} required />
                </Section>
                <Section style={{ width: "70%" }} >
                  <SubHeading>Enter Your Email Address</SubHeading>
                  <Input placeholder={"Email Address"} type={"email"} required />
                </Section>
                <Section style={{ width: "70%" }} >
                  <SubHeading>Confirm Your Ethereum Address</SubHeading>
                  <Input value={address} type={"text"} required />
                </Section>
                <ButtonsDiv style={{ margin: "2rem 0" }} >
                  <ButtonSecondary onClick={() => setCreateAccountClicked(!createAccountClicked)} >Cancel</ButtonSecondary>
                  <ButtonPrimary type='submit' onClick={() => {
                    window.localStorage.setItem("user_registered_chaincare", true)
                    setCreateAccountClicked(!createAccountClicked);
                    window.location.reload()
                  }} >Proceed</ButtonPrimary>
                </ButtonsDiv>
              </Modal>
            </> :
            <></>
        }
      </HomeScreen>
    </Wrapper>
  )
}

export default Home