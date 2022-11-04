import styled, {} from "styled-components"
import imageFamily from "../../Photo/familyPng.png"
import solidarity from "../../Photo/solidariedade.png"
import educationtwo from "../../Photo/educationtwo.png"


export const MyValueStyle = styled.div`
    width:100%;
    height:600px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-color:blue;
    position: relative;
    .buttonFrontClass{
        width:8%;
        height:10%;
        background-color:transparent ;
        border: transparent;
        .iconClass{
            width:100%;
            height:100%;
        }
    }
    .buttonBackClass{
        width:8%;
        height:10%;
        background-color:transparent ;
        border: transparent;
        .iconClass{
            width:100%;
            height:100%;
        }
    }
    
`

export const MyValueGrandFatherStyle = styled.div`
     width:600px;
    height:80%;
    background-color:white;
     display:flex;
    flex-direction:row;
    align-items:center;
   // justify-content:space-between;
    overflow:hidden;
    border-radius:10px;

` 

interface typeProps {
    positions: string;
  }
export const MyValueFatherStyle = styled.div<typeProps>`
     width:1800px;
    height:116%;
    //background-color:green;
     display:flex;
    flex-direction:row;
    align-items:center;
   // justify-content:space-between;
    right: ${({positions})=> positions };
    position:relative;
    transition:0.5s;
  

`  




export const MyValueSonStyle = styled.div `
    width:600px;
    height:100%;
    //background-color:red;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;

    
    .divOne{
        
        //background-color:blue;
        background-color:white;
        opacity:0.9;
        width:90%;
        height:95%;
        font-size:28px;
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-left:5%;
        text-align:justify;
        //justify-content:space-evenly;
        h2{
            color:black;
            text-align:center;
            margin-top:12%;
            background-color:blueviolet;
            border-radius:10%;
            width:100%;
  
            color:white;
            
            
        }
        p{
            width:95%;
            margin-left:2%;
            height:100%;
            font-weight:600;
           // background-color:rgba(0,0,0,0.1);
        }
    
    }
    .divClassOne{
        background-image: url(${imageFamily});
        background-repeat: no-repeat;
        background-size: contain;
        width:100%;
        height:100%;
        background-size: 400px 350px;
        background-position:center;
    }



`












export const MyValueSonTwoStyle = styled.div`
    width:600px;
    height:100%;
    //background-color:yelow;
    display:flex;
    flex-direction:row;
    align-items:center;
    //justify-content:space-between;
    .divClassTwo{
        //background-color:red;
        background-image:url(${solidarity});
        background-repeat: no-repeat;
        background-size: auto;
        background-size: 450px 300px;
        background-position:center;
        //background-color:yellow;
       
        margin-top:7%;
        width:100%;
        height:100%;
        font-size:28px;
        text-align:justify;
        .divTwo{
            background-color:white;
            width:100%;
            height:100%;
            opacity:0.85;

            h2{
            color:white;
            width:100% ;
            text-align:center;
            //padding-top:2%;
            background-color:blueviolet;
            border-radius:10%;
            }
            p{
                width:95%;
                margin-left:2%;
              
                font-weight:600; }
                
                //background-color:rgba(0,0,0,0.1);
            
        }
    }



`









export const MyValueSonThreeStyle = styled.div`
    width:600px;
    height:100%;
    //background-color:indianred;
    display:flex;
    flex-direction:row;
    align-items:center;
    
    .divClassThree{
        //background-color:rebeccapurple;
        width:100%;
        height:100%;
        background-image:url(${educationtwo});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-size: 450px 300px;
        .divThree{
            width:100%;
            height:100%;
            font-size:27px;
            display:flex;
            flex-direction:column;
            align-items:center;
            text-align:justify;
            background-color:white;
            opacity:0.9;
                h2{
                    color:white;
                    width:95% ;
                    text-align:center;
                    margin-top:10%;
                    background-color:blueviolet;
                    border-radius:10%;
                    margin-right:5%;
                }
                p{
                    width:95%;
                    margin-right:5%;
                //back;ground-color:rgba(0,0,0,0.1)
                height:100%;
                    font-weight:600;
                    
                }
                    
               
            
        }
        
    }


`