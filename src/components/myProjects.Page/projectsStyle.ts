import styled, {} from "styled-components"
import backImage from "../../Photo/1087927.png"
import backImageTwo from "../../Photo/1087927.png"



export const ProjectsStyle=styled.div`

    width:100%;
    height:880px;
    color:white;
    background-image:url(${backImage}), url(${backImageTwo}),linear-gradient(#d13531, blue); ;
    background-repeat: no-repeat;
    background-position: bottom left, top right;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    position: relative;
    @media screen and (max-width: 700px) {

                height:1100px;
            }
        a{
            color:white;
            text-decoration:none;
            display:flex;
            align-items:center ;
            :hover{
                font-weight: bold;
                color:red;
                transition:1s;
            }
        };
    .ButtonPageBack{
        position:fixed;
        left: 30px;
        top:50px;
        border: none;
        background-color:transparent; 
        display:flex;
        align-items:center ;
        font-size:20px;
        font-style:oblique;
        color:white;
        @media screen and (max-width: 1000px) {
                display:none;
            }
        .backIcon{
            width:40px;
            height:40px;
            border:none;
            background-color:black;
            border-radius:100%;
            
        }
    }

`
export const ProjectsStyleSon=styled.div`

    width:65%;
    height:24%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    opacity:0.9 ;
    border-color:black;
    //background-color:white;
    border-radius:10px;
     @media screen and (max-width: 1150px) {
                width:80%;
                height:25%;
            };
            @media screen and (max-width: 900px) {
                width:100%;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                
               
            };
    button{
        width:35%;
        height:100%;
        border-radius:10px;
        background-color:transparent;
        border:none;
        @media screen and (max-width: 1100px) {
               width:45%;
            } 
        @media screen and (max-width: 900px) {
                display:none
            } 
    }
    img{
        width:100%;
        height:100%;
        border-radius:10px;
        border: solid 1px;
        cursor:pointer;
            @media screen and (max-width: 1100px) {
                width:100%;
                height:100%;
            };
           

       
    }

`
export const ProjectsBoxesStyle=styled.div`

    width:63%;
    height:100%;
    background-color:white;
    border: solid 1px;
    border-radius:10px;
    text-align: justify;
    @media screen and (max-width: 1100px) {
                width:90%;
                display:flex;
                flex-direction:column;
                align-items:center;
                
               
            };
  
    h2{
         color:black;
        margin:10px;
    }
    p{
        font-size:20px;
        margin:10px;
        color:black;
    }
    
`