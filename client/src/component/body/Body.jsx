import React, {useEffect, useState} from "react";
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

const Body=({data,pages,all,NextPage})=>{
    const[catagory,setCatagory]=useState("All")

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
            {/*<Wrapper></Wrapper>*/}
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
                            <AddtoCart >Add to Cart</AddtoCart>
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
            </Filter>
        </Contain>
        </div>
    )
}
export default Body