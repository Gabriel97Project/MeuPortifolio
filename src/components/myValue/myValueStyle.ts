import styled, {} from "styled-components"
import imageFamily from "../../Photo/familyPng.png"
import solidarity from "../../Photo/solidariedade.png"
import educationtwo from "../../Photo/educationtwo.png"
import galleryPhoto from "../../Photo/photoGallery.png"

 
 

export const MyValueStyle = styled.div`

    
/*     @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
    font-family:kalam , Arial, Helvetica, sans-serif; */
    
    width:100%;
    height:670px;
    display:flex;
    //flex-direction:column;
    justify-content:center;
    align-items:center;
    background-image:url(${galleryPhoto}),linear-gradient(#d13531,blue);
    background-repeat:repeat;
    background-position:center;
    color:white;
    position: relative;
    @media screen and (max-width: 700px) {
                height:2200px;
                align-items:flex-start;
            };
    .buttonFrontClass{
        width:8%;
        height:8%;
        //background-color:transparent ;
        border-radius:100%;
        @media screen and (max-width: 700px) {
                display:none;
            };
        .iconClass{
            width:100%;
            height:100%;
            @media screen and (max-width: 700px) {
                display:none;
            };
        }
    }
    .buttonBackClass{
        width:8%;
        height:8%;
        //background-color:transparent ;
       // border: transparent
       border-radius:100%;
       @media screen and (max-width: 700px) {
                display:none;
            };
        .iconClass{
            width:100%;
            height:100%;
            @media screen and (max-width: 700px) {
                display:none;
            };
        }
    }
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
            :hover{
                font-weight: bold;
                color:red;
            }
        };
    }
    
`

export const MyValueGrandFatherStyle = styled.div`
    width:600px;
    height:80%;
    background:linear-gradient(red,gray,gray,blue);

    border: solid 30px;
    border-style:ridge;
    border-color:white;
    display:flex;
    flex-direction:row;
    align-items:center;
    // justify-content:space-between;
    overflow:hidden;
    border-radius:10px;
    @media screen and (max-width: 700px) {
               border:none;
            };
  

` 

interface typeProps {
    positions: string;
  }
export const MyValueFatherStyle = styled.div<typeProps>`
     width:1800px;
    height:100%;
   // background-color:green;
     display:flex;
    flex-direction:row;
    align-items:center;
   // justify-content:space-between;
    right: ${({positions})=> positions };
    position:relative;
    transition:0.5s;
    @media screen and (max-width: 700px) {
                display:flex;
                flex-direction:column;
                
            };
   
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
        
       // background-color:blue;
        
        width:99%;
        height:95%;
        font-size:27px;
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:justify;
        //background-color:blue;
        @media screen and (max-width: 700px) {
                margin-left:2.5%;
                width:80%;
                display:flex;
                align-items:flex-start;
                justify-content:center;
            };
        //justify-content:space-evenly;
        h2{
            //color:black;
            //border: solid 2px;
            //border-color:blue;
            text-align:center;
            //margin-top:10%;
            margin-left:5%;
         
            background:linear-gradient(black,gray,gray,black);
            width:90%;
            //border-radius:10%;
           
            border: solid 3px;
            border-color:black;
            @media screen and (max-width: 700px) {
                margin-left:1%;
                width:75%;
            };
        }
        p{
            width:90%;
            margin-left:5%;
            height:100%;
            font-weight:600; 
            @media screen and (max-width: 700px) {
                margin-left:0%;
                width:80%;
                text-align:justify;
                //background-color:blue;
            };
        }
    
    }
    .divClassOne{
        background-image: url(${imageFamily});
        background-repeat: no-repeat;
        background-size: contain;
        width:100%;
        height:100%;
        background-size: 400px 380px;
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
        background-size: 400px 400px;
        background-position:center;
        //background-color:gray;
        width:100%;
        height:100%;
        font-size:27px;
        text-align:justify;
     
        .divTwo{
           // background-color:white;
            width:100%;
            height:100%;
            //opacity:0.85;
            align-items:center;
            @media screen and (max-width: 700px) {
                margin-left:2.5%;
                width:80%;
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                justify-content:center;
            };
           
            
            h2{
            color:white;
            width:95% ;
            background:linear-gradient(black,gray,gray,black);
            text-align:center;
            background-color:blueviolet;
            margin-top:7%;
            margin-left:3%;
            border: solid 3px;
            border-color:black;
            @media screen and (max-width: 700px) {
                margin-left:1%;
                width:75%;
            };
            //border-radius:10%;
          //  border: solid 2px;
            }
            p{
                width:95%;
                margin-left:2%;
                font-weight:600; 
                margin-top:10%;
                opacity: 0.9;
                @media screen and (max-width: 700px) {
                margin-left:0%;
                width:80%;
                text-align:justify;
                //background-color:blue;
            };
            }
                
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
        background-size: 400px 350px;
     
        .divThree{
            width:100%;
            height:100%;
            font-size:27px;
            display:flex;
            flex-direction:column;
            align-items:center;
            text-align:justify;
            @media screen and (max-width: 700px) {
                margin-left:2.5%;
                width:80%;
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                justify-content:center;
            };
            //background-color:white;
            //opacity:0.9;
                h2{
                    color:white;
                    width:90% ;
                    text-align:center;
                    margin-top:7%;
                    background:linear-gradient(black,gray,gray,black);
                   // border-radius:10%;
                    margin-right:5%;
                    border: solid 3px;
                    border-color:black;
                    @media screen and (max-width: 700px) {
                        margin-left:1%;
                        width:75%;
                     };
                   
                }
                p{
                    width:90%;
                    margin-right:5%;
                    //back;ground-color:rgba(0,0,0,0.1)
                    //height:100%;
                    font-weight:600;
                    @media screen and (max-width: 700px) {
                        margin-left:0%;
                        width:80%;
                        text-align:justify;
                    };
               };
                    
               
            
        };
        
    };


`