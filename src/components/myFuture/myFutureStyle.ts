import styled from "styled-components"
import SunImage from "../../Photo/sunsetDrive.gif"


export const MyFutureStyle = styled.div`

    width:100%;
    height:670px;
    background:linear-gradient(#d13531,blue);
    color:white;
    display:flex;
    flex-direction:row;
    @media screen and (max-width: 1000px) {
    
        height:750px;
            };
    @media screen and (max-width: 700px) {
        
        height:1100px;
            };
    @media screen and (max-width: 600px) {
        
        height:1400px;
            };
    .ButtonPageBack{
        position:fixed;
        left: 20px;
        top:30px;
        border: none;
        background-color:transparent; 
        display:flex;
        align-items:center ;
        font-size:20px;
        font-style:oblique;
        color:white;
        @media screen and (max-width: 1000px) {
                display:none;
            };
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
   
    .PcIconClass{
        width:10%;
        height:90%;
       div{
            width:50%;
            height:100%;
           // background-color:yellow;
        }
    }
`

export const MyFutureSonStyle = styled.div`

    width:100%;
    height:100%;
    //background-color:darkblue;
    display:flex;
    flex-direction:row;
    justify-content:center ;
    text-align:justify ;
  

     @media screen and (max-width: 700px) {
        display:flex;
        flex-direction:column;

        };
    
    //margin-left:5%;
    
`
export const MyFutureTopOneStyle = styled.div`

    width:35%;
    height:100%;
   // background-color:blue;
  
    margin-right:1.5%;
    display:flex;
    flex-direction:column;
  
    text-align:justify ;
    @media screen and (max-width: 1050px) {
            width:50%;
            };
    @media screen and (max-width: 700px) {
            width:100%;
            };
    .divOne{
        height:40%;
        //background-color:green;
        border-bottom: solid 5px;
        border-color:orange;
        margin-top:5%;
        display:flex;
        flex-direction:column;
        align-items:center ;
        @media screen and (max-width: 1050px) {
                border: none;
                margin-top:0px;
                
            };
        @media screen and (max-width: 700px) {
                width:100%;
                margin-top:0px;
                
            };
            p{
            font-size:20px;
            width:90%;
            }
    }
    .divTwo{
        height:50%;
        //background-color:yellow;
        //border-: solid 3px;
        border-color:blue;
        display:flex;
        flex-direction :column;
        align-items:center ;
        @media screen and (max-width: 1050px) {
                
                margin-top:20px;
                
            };
            p{
            font-size:20px;
            width:90%;
            }
        }
    
`
export const MyFutureTopTwoStyle = styled.div`

    width:25%;
    height:100%;
    //background-color:black;
    display:flex;
    justify-content:flex-start;
    background-image:url(${SunImage});
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    border-left: solid 5px;
    border-right: solid 5px;
    border-color:orange;
    @media screen and (max-width: 1000px) {
                display:none;
                background-image:none;
            };

   

`
export const MyFutureTopThreeStyle = styled.div`

    width:35%;
    height:100%;
    //background-color:gray;
    display:flex;
    flex-direction:column;
   
    margin-left:1.5%;
    @media screen and (max-width: 1050px) {
            width:50%;
            };
    @media screen and (max-width: 700px) {
            width:100%;
            margin-left:0px;
            };
    .divOne{
        height:40%;
        //background-color:red;
        margin-top:5%;
        display:flex;
        flex-direction:column;
        align-items:center ;
        border-bottom: solid 5px;
        border-color:orange;
        @media screen and (max-width: 1050px) {
              
                margin-top:0px;
                border:none;
            };
        @media screen and (max-width: 700px) {
                border:none;
             
            };
            p{
            font-size:20px;
            width:90%;
            }
    }
    .divTwo{
        height:40%;
        //background-color:beige;
        display:flex;
        flex-direction :column;
        align-items:center ;
        //border: solid 3px;
        border-color:white;
        @media screen and (max-width: 1050px) {
               
                margin-top:20px;
                
            };
            p{
            font-size:20px;
            width:90%;
            }
    }
    
`