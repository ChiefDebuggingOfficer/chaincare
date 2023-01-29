import logo from "./assets/chaincare-removebg.png"

import styled from "styled-components"
import { WagmiConfig, createClient, configureChains, mainnet, useAccount } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Main from "./pages/Main"
import { useState, useEffect } from "react"
import Profile from "./pages/Profile"

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

  @keyframes screenAnimation {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  @keyframes logoAnimation {
    0% {
      transform: translateY(+100%);
    }
    100% {
      transform: translateY(0);
    }
  }
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

const LogoTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`

const LogoText = styled.span`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2rem;
  text-align: left;
`

const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #0148c3;

  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 2s;
  animation-name: screenAnimation;
  animation-fill-mode: forwards;
`

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()],
)

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  provider,
  webSocketProvider,
})

function App() {

  const { address, isConnected } = useAccount()
  const [user, setUser] = useState({
    active: false
  })

  const profileLink = "/profile/" + address
  const dashboardLink = "/dashboard/" + address

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: dashboardLink,
      element: <Main />,
    },
    {
      path: profileLink,
      element: <Profile />,
    },
  ]);

  useEffect(() => {
    let userInfo = user
    if (isConnected) {
      userInfo.address = address;
    }
    userInfo.active = window.localStorage.getItem("user_registered_chaincare")
    setUser(userInfo)

    if (user.active && isConnected) {
      if (window.location.pathname != dashboardLink && window.location.pathname != profileLink) {
        window.location.pathname = dashboardLink
      }
    } else {
      if (window.location.pathname != "/") {
        window.location.pathname = "/"
      }
    }

  }, [isConnected, user])

  return (
    <WagmiConfig client={client}>
      <Wrapper className="App">
        <LoadingScreen>
          <LogoDiv>
            <LogoImg src={logo} />
            <LogoTextDiv>
              <LogoText style={{ color: "white" }} >Chain</LogoText>
              <LogoText style={{ color: "white" }} >Care</LogoText>
            </LogoTextDiv>
          </LogoDiv>
        </LoadingScreen>

        <RouterProvider router={router} />
      </Wrapper>
    </WagmiConfig>
  );
}

export default App;
