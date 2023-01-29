import React, { useEffect } from 'react'
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

const Heading = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    width: 90%;
`

const SubHeading = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    width: 90%;
`

const Modal = styled.form`
  margin-top: 2rem;
  
  width: 400px;
  max-width: 96vw;
  
  background-color: rgba(0,0,0,0.1);
  border-radius: 15px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Main = () => {

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

  return (
    <Wrapper>
      <HomeScreen>
        <LogoDiv style={{ position: "absolute", top: 0, left: 0, width: "100vw", }} >
          <LogoImg src={logo} style={{ height: "3rem" }} />
          <LogoText style={{ fontSize: "2rem", lineHeight: "2rem" }} >ChainCare</LogoText>
        </LogoDiv>

        <Modal style={{ marginTop: "15vh" }} >
          <Heading style={{ marginTop: "3rem" }} >Good To See You, User!</Heading>
          <SubHeading>share the link or ask them to scan the qr code below to quickly share your info and docs with anyone, or add more info (only owner can modify)</SubHeading>

          <div style={{ height: "auto", margin: "1rem", maxWidth: "90%", width: "100%" }}>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              bgColor={"transparent"}
              value={"http://localhost:3000/profile/" + address}
              level={"Q"}
              viewBox={`0 0 256 256`}
            />
          </div>

          <SubHeading style={{ textAlign: "center", marginBottom: "1rem", fontWeight: 700 }} >
            <a href={"http://localhost:3000/profile/" + address} style={{ color: "#3fb8ff" }} >
              Click Here To Visit The Link
            </a>
          </SubHeading>
        </Modal>

      </HomeScreen>
    </Wrapper>
  )
}

export default Main