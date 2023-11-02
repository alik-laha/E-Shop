import styled from 'styled-components';


export const Contain = styled.div`
  display:${props=>props.display};
  justify-content: center;
  width: ${props=>props.width};
  height: ${props=>props.height};
  margin-top: ${props=>props.margin};
  //background-color:red;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 1100px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 815px) {
    grid-template-columns: auto auto;
  }
`
export const Wrapper=styled.div`
    width: 200px;
    height: 300px;
    margin: 20px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
    border: 1px solid black;
    border-radius: 5px;
  background-color: white;
  
  @media (max-width: 700px) {
    width: 150px;
    margin: 10px;
    height: 280px;
  }
  @media (max-width: 355px) {
    width: 120px;
    margin: 5px;
    height: 290px;
  }
    `
export const Block=styled.div`
    width: 200px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 150px;
    height: 100px;
  }
  @media (max-width: 355px) {
    width: 120px;
    height: 80px;
  }
`
export const Images=styled.img`
  margin-top: 10px;
  width: 150px;
  height: 140px;
  &:hover{
    width: 190px;
    height: 180px;
    transition-duration: 1s;
  }
  @media (max-width: 700px) {
    width: 100px;
    height: 90px;
    &:hover{
      width: 140px;
      height: 130px;
      transition-duration: 1s;
    }
  }
  @media (max-width: 355px) {
    width: 70px;
    height: 70px;
    &:hover{
      width: 100px;
      height: 90px;
      transition-duration: 1s;
    }
  }
  
`
export const Titale=styled.p
`   margin-top: 8px;
    padding: 15px;
  text-align: center;
  
`
export const Price=styled.div`
  text-align: center;
  font-size: ${props => props.size};
  font-weight: bold;
  background-color: rgba(161, 160, 160, 0.45);
  margin-top: auto;
`
export const PageContainer=styled.div`
    margin-right: 20px;
  width: 32px;
  height: 32px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
    `
export const FilterElement=styled.div`
    margin-top: 30px;
    display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
    `
export const AddtoCart=styled.button`

  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  line-height: 10px;
  font-weight: 600;
  border-radius: 8px;
  padding: 8px 12px;
  
  border: 1px solid #222222;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  background: #fff;
  color: #222222;
  :hover {
    border-color: #000000;
    background: #f7f7f7;
  }

`
export const Containing=styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
    `