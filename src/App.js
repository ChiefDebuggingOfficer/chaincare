import styled from "styled-components"
import logo from "./assets/chaincare-removebg.png"
import doctor from "./assets/animation.gif"

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
      opacity: 1;
    }
    100% {
      opacity: 0;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #0148c3;
  z-index: 3;

  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 2s;
  animation-name: screenAnimation;
  animation-fill-mode: forwards;
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
  position: absolute;
  bottom: 13vh;

  display: flex;
  flex-direction: row;
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
  margin-left: 5px

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
  margin-right-: 5px

  cursor: pointer;
`
function App() {

  return (
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

      <HomeScreen>
        <LogoDiv style={{ position: "absolute", top: 0, left: 0, width: "100vw", }} >
          <LogoImg src={logo} style={{ height: "3rem" }} />
          <LogoText style={{ fontSize: "2rem", lineHeight: "2rem" }} >ChainCare</LogoText>
        </LogoDiv>

        <AnimationImg src={doctor} />
        <LogoText style={{ fontWeight: "400", fontSize: "1.2rem", maxWidth: "300px", textAlign: "center", marginTop: "-20px" }} >Store Your Medical Data, In An Encrypted, Decentralized, And Easy To Access Way</LogoText>

        <ButtonsDiv>
          <ButtonSecondary>Sign In</ButtonSecondary>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </ButtonsDiv>
      </HomeScreen>
    </Wrapper>
  );
}

export default App;
