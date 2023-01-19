import styled, {} from "styled-components"
import ReactGif from "../../Photo/ReactGif.gif"



export const CurriculoPageStyle = styled.div`
    display:flex;
    background-image:url(${ReactGif}),url(${ReactGif}),linear-gradient(#d13531,blue);
    background-repeat:no-repeat;
    background-position: bottom left, top right;
    width:100%;
    height:800px;
    display:flex;
    flex-direction:column;
    align-items:center ;
    justify-content:center ;
    color:white;
    @media screen and (max-width: 700px) {
        height:850px;
      
    }
    a{
        border: solid 5px;
        border-radius:20%;
        color:white;
        text-decoration:none;
        :hover{
            color:black;
            transition:1s;
        };
    };
    img{
        width:40%;
        height:80%;
        @media screen and (max-width: 1100px) {
        width:50%;
      
    }
    @media screen and (max-width: 900px) {
        width:50%;
    }
    @media screen and (max-width: 800px) {
        width:80%;
    }
    @media screen and (max-width: 600px) {
        width:90%;
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
            @media screen and (max-width: 900px) {
                display:none;
            }
        .backIcon{
            width:40px;
            height:40px;
            border:none;
            background-color:black;
            border-radius:100%;
            ;
            
        };
        .backLink{
            color:white;
            text-decoration:none;
            display:flex;
            align-items:center ;
            border:none ;
            :hover{
                font-weight: bold;
                color:red;
            }
        };
    }
`