import React, { useState} from "react";
import {
    AddtoCart,
    Block,
    Contain,
    Containing,
    FilterElement,
    Images,
    Price,
    Titale,
    Wrapper
} from "./bodyStyle/body.style.js";
import {Filter} from "../navbar/navStyle/container.styled.js";
import Pagenation from "./pagenation/pagenation.jsx";

const Body=({data,all,NextPage})=>{
    const[catagory,setCatagory]=useState("All")
    const [filterSettings, setFilterSettings] = useState({
        price: [0, 2000],
    });


    let item
    let newval
    let product=[]
    const catagoryData=(ele)=>{
    setCatagory(ele)
    }

    const childToParent = (childdata) => {
        NextPage(childdata)
    }

    const getUniquedata=(data,proparty)=>{
        newval=data.map((ele)=>{
            return ele[proparty]
        })
        newval=["All",...new Set(newval)]
    }
  getUniquedata(all,'category')
         item=all.filter(product=>product.category===catagory)
        if(catagory ==="All"){
            product=[...data]
        }
        else{
            product=[...item]
        }



    return(
        <div >

        <Contain width={"99vw"}display={"flex"} >
            <Contain width={"80vw"} display={"block"} >
            <Contain width={"80vw"}display={"grid"}margin={"12vh"} >

            {
                product.map((shop,index)=>{

                    return(

                        <Wrapper key={index}>
                            <Block>
                            <Images src={shop.image} placeholder={"search"}/>
                            </Block>
                            <Titale>{shop.title.slice(0,35)}...</Titale>
                            <Price size={"1.1em"}>{shop.price}$</Price>
                            <Containing>
                            <AddtoCart onClick={()=>console.log("cart funcation is not applied")} >Add to Cart</AddtoCart>
                            </Containing>
                        </Wrapper>
                    )
                }
                )
            }

            </Contain>
                <Pagenation  totalposts={all.length} postPerPage={12} childToParent={childToParent}></Pagenation >
            </Contain>
            <Filter id="filter">
                {
                    newval.map((ele,index)=>{
                        return(
                            <FilterElement key={index} onClick={()=>catagoryData(ele)} >
                                {ele}
                            </FilterElement>
                        )
                    })
                }
                <h4 style={{textAlign:"center" ,marginTop:"30px"}}>{filterSettings.price[0]}$</h4>
                <div style={{textAlign:"center"}}>
                <input
                    type="range"
                    min={0}
                    max={2000}
                    value={filterSettings.price[0]}
                    onChange={(e) => setFilterSettings({ ...filterSettings, price: [e.target.value, filterSettings.price[1]] })}
                />
                    <p style={{color:"red"}}>*this function is not applied</p>
                </div>
            </Filter>
        </Contain>
        </div>
    )
}
export default Body