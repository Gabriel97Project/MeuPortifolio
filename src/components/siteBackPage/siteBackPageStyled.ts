import styled, {} from "styled-components"

export const SiteBackPageStyled=styled.div`

    width:100vw;
    height:100vh;
    background:linear-gradient(#d13531,blue);
    display:flex;
    align-items:center;
    justify-content:center;

`


export const CenterBackStyled=styled.div`

    width:50%;
    height:90%;
    background:linear-gradient(#d13531,black,blue);
    border-radius:15px;
    display:flex;
    flex-direction:column;
    justify-items: center;
    align-items: center;
    @media screen and (max-width: 1100px) {
        width:70%;
    }
    @media screen and (max-width: 700px) {
        width:100%;
    }
    .divSiteBack{
       // background-color:yellow;
        width:100%;
        height:50%;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        
    }

`


export const CenterBoxesTopStyled=styled.div`

    width:45%;
    height:85%;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius:15px;
    cursor:pointer ;
    a{
        width:100%;
        height:100%;
        text-decoration:none ;
   
        color:black;
        text-align:center;
    }
  
    :hover {
        background:linear-gradient(#d13531, white);
        width:50%;
        height:95%;
        transition:2s;
       
}
    .iconsStyled{
        width:50%;
        height:50%;
    }

`
export const CenterBoxesBottomStyled=styled.div`

    width:45%;
    height:85%;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius:15px;
    cursor:pointer ;
        a{
            width:100%;
            height:100%;
            text-decoration:none ;
    
            color:black;
            text-align:center;
        }
    
    :hover {
        background:linear-gradient(white, blue  );
        width:50%;
        height:95%;
        transition:2s;
}
    .iconsStyled{
        width:50%;
        height:50%;
    }

`