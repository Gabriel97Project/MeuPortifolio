import React, { useState } from 'react'
import { MyValueFatherStyle, MyValueGrandFatherStyle, MyValueSonStyle, MyValueSonThreeStyle, MyValueSonTwoStyle, MyValueStyle } from './myValueStyle'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
const MyValue = () => {
    const [imagePlace, setImagePlace] = useState("0px")



    return (
        <MyValueStyle>
            <MyValueGrandFatherStyle>
                <MyValueFatherStyle positions={imagePlace}>
                    <MyValueSonStyle >

                        <div className='divClassOne'>
                            <div className='divOne'>

                                <h2>Respeito pelo próximo</h2>
                                <p>Eu acredito com toda certeza, que cada pessoa tem seu valor
                                    na nossa sociedade e merece ser respeitada. 
                                    Familia, amigos, colegas de trabalho e qualquer um. Devemos respeitar cada 
                                    individuo pois a base de tudo é o respeito mutúo.
                                </p>
                            </div>

                        </div>

                        <button className='buttonFrontClass' onClick={() => setImagePlace("600px")}>
                            < BsFillArrowRightSquareFill className='iconClass' />
                        </button>
                    </MyValueSonStyle>

                    <MyValueSonTwoStyle>
                        <button className='buttonBackClass' onClick={() => setImagePlace("0px")}>
                            <BsFillArrowLeftSquareFill className='iconClass' />
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
                            < BsFillArrowRightSquareFill className='iconClass' />
                        </button>
                    </MyValueSonTwoStyle>






                    <MyValueSonThreeStyle>
                        <button className='buttonBackClass' onClick={() => setImagePlace("600px")}>
                            <BsFillArrowLeftSquareFill className='iconClass' />
                        </button>
                        <div className='divClassThree'>
                            <div className='divThree'>
                                <h2>Educação</h2>
                                <p>
                                    Na minha opinião a educação vai muito alem do aprendizado intelectual,
                                    um simples "bom dia" pode ser a mudança no dia de alguma pessoa, todos devem
                                    ser tratados da mesma forma, independente da classe social, estilo ou etnia.
                                    Todos somos seres humanos e precisamos nos tratar da melhor forma possivel.
                                </p>
                            </div>

                        </div>
                    </MyValueSonThreeStyle>



                </MyValueFatherStyle>
            </MyValueGrandFatherStyle>

        </MyValueStyle>
    )
}

export default MyValue
