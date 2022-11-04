import styled, {} from "styled-components"



export const ProjectModalStyle = styled.div`

    position:fixed;

    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    top: 0;
    left: 0;
    background-color:rgba(0,0,0,0.7);
    z-index:  1;
    .buttonAjustClass{
        position:absolute;
        right:0;
        top:0;
        width:5%;
        height:10%;
        background-color:red;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:100%;
        
    .buttonStyleClass{
        width:80%;
        height:80%;
        border-radius:100%;
        
    }
   
    } 
    .iconClass{
        width:100%;
        height:100%;
        //background-color:red;
    }
`


export const ProjectModalSonStyle = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:50%;
height:70%;
img{
    width:100%;
    height:100%;
}


`