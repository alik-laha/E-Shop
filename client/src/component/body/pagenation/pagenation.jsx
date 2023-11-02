import {PageContainer} from "../bodyStyle/body.style.js";

const Pagenation=( props)=>{
    let pages=[];
    for(let i=1;i<=Math.ceil(props.totalposts/props.postPerPage);i++){
        pages.push(i);
    }
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {
                pages.map((data)=>{
                    return(
                        <PageContainer key={data} onClick={() => props.childToParent(data)}> {data}</PageContainer>
                    )
                })
            }
        </div>
    )
}
export default Pagenation
