import {
    Container,
    Search,
    Element,
    Image,
    Menu,
    Right, Button, Float, Menus, Filter
} from "./navStyle/container.styled";
import { FaSearch, } from "react-icons/fa";
import {HiMenu} from "react-icons/hi"
import {NavLink} from "react-router-dom"

const Nav = () => {

    const handale=()=>{
        const data=document.getElementById("filter")
        if(data.style.display==="none"){
            data.style.display="block"
        }
        else{
            data.style.display="none";
        }
    }
    const handaleClick=()=>{
       const data=document.getElementById("float")
        if(data.style.display==="none"){
            data.style.display="block"
        }
        else{
            data.style.display="none";
        }
    }

  return (
    <div style={{position:"fixed",zIndex:3,backgroundColor:"white"}}>
      <Container
        style={{ justifyContent: "center", backgroundColor: "#e9e9e9", }}
      >
        <Search />
          <Button>
              <FaSearch />
          </Button>

      </Container>
      <Element>
        <Image
          src="https://cdn.dribbble.com/users/56040/screenshots/327380/eshop.png"
          alt=""
          width={"120px"}
          height={"70px"}
        />

        <Right>
            <Menu><NavLink to='/' style={{textDecoration:"none",color:"black",cursor:"pointer"}}>Home</NavLink></Menu>
          <Menu  onClick={handale}>Filter</Menu>
          <Menu onClick={()=>console.log("cart funcation is not applied")}>Cart</Menu>
        </Right>
          <Button display={"none"} backcolor={" #fff"} onClick={handaleClick}><HiMenu style={{fontSize:"25px"}}/></Button>
      </Element>
        <Float id="float">
            <Menus><NavLink to='/' style={{textDecoration:"none",color:"black"}}>Home</NavLink></Menus>
            <Menus onClick={handale}>Filter</Menus>
            <Menus><NavLink to='/cart'style={{textDecoration:"none",color:"black"}}>Cart</NavLink></Menus>
        </Float>

    </div>
  );
};
export default Nav;
