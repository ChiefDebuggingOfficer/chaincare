import React from 'react'
import styled from "styled-components"
import QRCode from "react-qr-code";

import logo from "../assets/chaincare-removebg.png"

import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
} from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'


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

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    padding: 1rem;
`

const Heading = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    width: 20vw;
`

const SubHeading = styled.span`
    font-size: 0.8rem;
    font-weight: 400;
    width: 20vw;
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

const Input = styled.input`
  background-color: #e7e8eb;
  color: #717584;

  font-size: 1rem;
  font-weight: 600;
  padding: 15px;
  border: none;
  border-radius: 15px;
  margin-left: 5px;

  cursor: pointer;
  width: 76vw;
`

const Profile = () => {
    return (
        <Wrapper>
            <HomeScreen>
                <LogoDiv style={{ position: "absolute", top: 0, left: 0, width: "100vw", }} >
                    <LogoImg src={logo} style={{ height: "3rem" }} />
                    <LogoText style={{ fontSize: "2rem", lineHeight: "2rem" }} >ChainCare</LogoText>
                </LogoDiv>

                <Heading style={{ marginTop: "15vh", textAlign: 'center' }} >User Profile</Heading>
                <SubHeading style={{ textAlign: 'center' }} >Basic Info</SubHeading>
                <Section>
                    <Heading>Name</Heading>
                    <Input />
                </Section>
                <Section>
                    <Heading>Email</Heading>
                    <Input />
                </Section>
                <Section>
                    <Heading>Etherem Address</Heading>
                    <Input />
                </Section>
                <Section>
                    <ButtonSecondary>Edit Info</ButtonSecondary>
                    <ButtonPrimary>More Info</ButtonPrimary>
                </Section>
                <Section style={{ paddingTop: 0 }} >
                    <ButtonSecondary>Fetch Docs</ButtonSecondary>
                    <ButtonPrimary>Call User</ButtonPrimary>
                </Section>
            </HomeScreen>
        </Wrapper>
    )
}

export default Profile