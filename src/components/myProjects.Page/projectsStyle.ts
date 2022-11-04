import styled, {} from "styled-components"
import backImage from "../../Photo/1087927.png"
import backImageTwo from "../../Photo/1087927.png"



export const ProjectsStyle=styled.div`

    width:100%;
    height:800px;
    background-color:wheat;
    background-image:url(${backImage}), url(${backImageTwo}) ;
    background-repeat: no-repeat;
    background-position: bottom left, top right;
    background-size: 20%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    position: relative;


`
export const ProjectsStyleSon=styled.div`

    width:65%;
    height:27%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    opacity:0.9 ;
    border-color:black;
    //background-color:white;
    
    border-radius:10px;
    button{
        width:35%;
        height:100%;
        border-radius:10px;
       background-color:transparent;
       border:none;
    }
    img{
        width:100%;
        height:100%;
        border-radius:10px;
        border: solid 1px;
        cursor:pointer;

       
    }

`
export const ProjectsBoxesStyle=styled.div`

    width:63%;
    height:100%;
    background-color:white;
    
    border: solid 1px;
    border-radius:10px;
    text-align: justify;
    h2{
        margin:10px;
    }
    p{
        font-size:20px;
        margin:10px;
    }
    
`