import React from 'react';
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  display: table;
  position: absolute
  top: 300px;
  left: 400px;

`

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? 'palevioletred' : 'black')};
  border: ${props => (props.primary ? '2px solid palevioletred' : '2px solid black')};
  margin: 0 1em;
  padding: 20px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${props => (props.primary ? 'palevioletred' : 'black')};
    color: ${props => (props.primary ? 'white' : 'palevioletred')};
  }
`;


function App() {
  return (
    <Wrapper>
        
        <Button>I am a Button</Button>
        <Button primary>I am a primary Button</Button>
    </Wrapper>
   
  );
}

export default App;
