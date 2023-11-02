import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
// background-color: red;
`
export const Image = styled.img`
width: ${props => props.width};
height:${props => props.height};
`


export const Search = styled.input`
width: 50vw;
// border-radius: 0.5em;
font-size: 1em;
margin: 0;
background-color: #e9e9e9;
border: 0;
outline: none;
  border-left: 1px solid black;
  border-right: 1px solid black;
  
`
export const Element = styled.div`
display: flex;
align-items: center;
width: 100vw;
border-bottom: 1px solid #e9e9e9;
`
export const Menu = styled.div`
margin-left: 3em;
  cursor: default;
@media (max-width: 700px) {
    display:none;
  }
`
export const Button=styled.button`
  display: ${props=>props.display};
  margin-right: 8vw;
  border: 0;
  outline: 0;
  background-color:${props=>props.backcolor};
  @media (max-width: 700px) {
    display:block;
  }
`

export const Right = styled.div`
    width:80vw;
    display: flex;
    align-items: center;
    justify-content: right;
`
export const Float=styled .div`
  width: 99vw;
  height: 13vh;
  background-color: rgba(233, 233, 233, 0.56);
  display: none;
`
export const Menus=styled.div`
  display: block;
  text-align: center;
  margin-bottom: 15px;
  border-bottom: 0.5px solid rgba(49, 48, 48, 0.37);
`
export const Filter=styled.div`
  margin-top: 12vh;
  width: 20vw;
  height: 87vh;
  background-color:#e9e9e9;
  display: none;
  @media (max-width: 800px) {
    width: 28vw;
  }
  @media (max-width: 600px) {
    width: 38vw;
  }
  @media (max-width: 520px) {
   width: 100vw;
  }
`

