import { useEffect } from "react"
import styled from "styled-components"
import logo from "./assets/chaincare.png"

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 300vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 150px;
  font-weight: 700;
  
  display: flex;
  flex-direction: row;
  align-items: center;

  position: fixed;
  top: calc(50vh - 75px);
  height: 150px;
`

const Logo = styled.img`
  height: 150px;
`

function App() {

  useEffect(() => {
    document.addEventListener("scroll", (event) => { });

    let text = document.getElementById('text');
    let img = document.getElementById('img');
    text.style.top = ((window.innerHeight - 150) / 2) + "px";
    text.style.fontSize = "150px";
    text.style.height = "150px";
    img.style.height = "150px";

    onscroll = (event) => {
      var top = document.documentElement.scrollTop;
      if (top < 100) {
        text.style.fontSize = 150 - top + "px";
        text.style.height = 150 - top + "px";
        img.style.height = 150 - top + "px";
        text.style.top = 150 - top + "px"
      }
      const array = text.style.top.split("px")
      if (Number(array[0]) < 20) {
        text.style.top = 20 + "px"
      } else if (Number(array[0]) > 20) {
        text.style.top = ((window.innerHeight - 150) / 2) - top + "px"
      }
      console.log(Number(array[0]))
    };
  })

  return (
    <Wrapper className="App">
      <Text id="text" >
        <Logo id="img" src={logo} />
        ChainCare
      </Text>
    </Wrapper>
  );
}

export default App;
