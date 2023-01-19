import React, { useState } from 'react'
import { MyValueFatherStyle, MyValueGrandFatherStyle, MyValueSonStyle, 
        MyValueSonThreeStyle, MyValueSonTwoStyle, MyValueStyle } from './myValueStyle'
import { SlActionRedo, SlActionUndo } from "react-icons/sl";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";





const MyValue = () => {
    const [imagePlace, setImagePlace] = useState("0px")
    const [myValueState, setMyValueState] = useState(false);

  
        <button onClick={()=>setMyValueState(true)}></button>
        if(myValueState){
            
        }else{
            <button onClick={()=>setMyValueState(true)}></button>
        }
   

    

    return (
        <MyValueStyle>
            <button className="ButtonPageBack"> <a className='backLink' href="/"> <HiOutlineArrowLeftCircle className="backIcon"/></a></button>
            <MyValueGrandFatherStyle>
                
                <MyValueFatherStyle positions={imagePlace}>
                    <MyValueSonStyle >

                        <div className='divClassOne'>
                            <div className='divOne'>

                                <h2>Respeito</h2>
                                <p>Eu acredito com toda certeza, que cada pessoa tem seu valor
                                    na nossa sociedade e merece ser respeitada. 
                                    Familia, amigos, colegas de trabalho e qualquer um. Devemos respeitar cada 
                                    individuo pois a base de tudo é o respeito mutúo.
                                </p>
                            </div>

                        </div>

                        <button className='buttonFrontClass' onClick={() => setImagePlace("600px")}>
                            < SlActionRedo className='iconClass' />
                        </button>
                    </MyValueSonStyle>

                    <MyValueSonTwoStyle>
                        <button className='buttonBackClass' onClick={() => setImagePlace("0px")}>
                            <SlActionUndo className='iconClass' />
                        </button>

                        <div className='divClassTwo'>
                            <div className='divTwo'>
                                <h2>Solidariedade</h2>
                           
                            <p>
                                Não tem como colocar as pessoas em primeiro lugar sem pensar em solidariedade.
                                Todos devemos tentar compreender o proximo e se possivel ajuda-lo de alguma forma,
                                convivemos em sociedade e não podemos ignorar o proximo, todos juntos por um mundo melhor.
                            </p>
                             </div>
                        </div>
                        <button className='buttonFrontClass' onClick={() => setImagePlace("1200px")}>
                            < SlActionRedo className='iconClass' />
                        </button>
                    </MyValueSonTwoStyle>






                    <MyValueSonThreeStyle>
                        <button className='buttonBackClass' onClick={() => setImagePlace("600px")}>
                            <SlActionUndo className='iconClass' />
                        </button>
                        <div className='divClassThree'>
                            <div className='divThree'>
                                <h2>Educação</h2>
                                <p>
                                    Na minha opinião, a educação vai muito alem do aprendizado intelectual,
                                    um simples "bom dia" pode ser a mudança no dia de alguma pessoa, todos devem
                                    ser tratados da mesma forma, independente da classe social, estilo ou etnia.
                                    Afinal, todos somos seres humanos.
                                </p>
                            </div>

                        </div>
                    </MyValueSonThreeStyle>



                </MyValueFatherStyle>
            </MyValueGrandFatherStyle>

        </MyValueStyle>
    )
    
 };

export default MyValue
