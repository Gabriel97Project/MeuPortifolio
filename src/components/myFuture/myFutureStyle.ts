import styled from "styled-components"
import SunImage from "../../Photo/sunsetDrive.gif"


export const MyFutureStyle = styled.div`

    width:100%;
    height:600px;
    //background-color:blue;
    display:flex;
    flex-direction:row;
    .PcIconClass{
        width:10%;
        height:90%;
       div{
            width:50%;
            height:100%;
            background-color:yellow;
        }
    }
`

export const MyFutureSonStyle = styled.div`

    width:100%;
    height:100%;
    background-color:white;
    display:flex;
    flex-direction:row;
    margin-left:5%;
    
`
export const MyFutureTopOneStyle = styled.div`

    width:35%;
    height:100%;
    background-color:blue;
    display:flex;
    flex-direction:column;
    justify-content:center ;
    text-align:justify ;
    .divOne{
        height:50%;
        background-color:green;
        display:flex;
        flex-direction:column;
        align-items:center ;
            p{
            font-size:20px;
            width:90%;
            }
    }
    .divTwo{
        height:50%;
        background-color:yellow;
        display:flex;
        flex-direction :column;
        align-items:center ;
            p{
            font-size:20px;
            margin-left:5%;
            }
        }
    
`
export const MyFutureTopTwoStyle = styled.div`

    width:25%;
    height:100%;
    background-color:black;
    display:flex;
    justify-content:flex-start;
    background-image:url(${SunImage});
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
   

`
export const MyFutureTopThreeStyle = styled.div`

    width:35%;
    height:100%;
    background-color:white;
    display:flex;
    flex-direction:column;

    .divOne{
        height:50%;
        background-color:red;
        display:flex;
        flex-direction:column;
        align-items:center ;
            p{
            font-size:20px;
            }
    }
    .divTwo{
        height:50%;
        background-color:beige;
        display:flex;
        flex-direction :column;
        align-items:center ;
            p{
            font-size:20px;
            margin-left:5%;
            }
    }
    
`