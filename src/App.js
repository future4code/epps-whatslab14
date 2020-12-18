import styled from 'styled-components'
import Footer from './components/Footer/Footer'
import React from 'react'
import './App.css';

const DivMain = styled.div`
  width: 80vw;
  height: 100vh;
  border: 1px solid black;
  margin: auto;
`

function App() {
  return (
    <div className="App">
      <DivMain >
        Teste!
    </DivMain>
    <Footer/>
    </div>

  );
}

export default App;
