import styled, {} from "styled-components"

export const SiteBackPageStyled=styled.div`

    width:100vw;
    height:100vh;
    background-color:rgba(0, 0, 67, 0.8);
    display:flex;
    align-items:center;
    justify-content:center;

`


export const CenterBackStyled=styled.div`

    width:50%;
    height:90%;
    //background-color:black;
    border-radius:15px;
    display:grid;
    gap:10px;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;

`


export const CenterBoxesStyled=styled.div`

    width:90%;
    height:90%;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius:15px;
    cursor:pointer ;
    padding: 10px;
  
    :hover {
   background-color:aqua ;
   transition: 0.8s;
}
    .iconsStyled{
        width:50%;
        height:50%;
    }

`