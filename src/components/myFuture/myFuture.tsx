import React from 'react'
import { MyFutureSonStyle, MyFutureStyle, MyFutureTopThreeStyle, MyFutureTopOneStyle, MyFutureTopTwoStyle } from './myFutureStyle'
import SunImage from "../../Photo/sunset.gif"
const MyFuture = () => {
    return (
        <MyFutureStyle>
            <MyFutureSonStyle>
                <MyFutureTopOneStyle>
                    <div className='divOne'>
                        <h2>Sempre evoluir:</h2>
                        <p>Pretendo continuar meus estudos na area de desenvolvimento, buscando sempre me atualizar com
                            as tecnologias mais recentes. Após ingressar no mercado de trabalho, pretendo fazer uma graduação
                            em desenvolvimento de sistemas.
                        </p>
                    </div>
                    <div className='divTwo'>

                    </div>

                </MyFutureTopOneStyle>
                <MyFutureTopTwoStyle>
                   {/* <img src={}/> */}
                    {/* <div className='SunClass'>

                    </div> */}
                </MyFutureTopTwoStyle>
                <MyFutureTopThreeStyle>
                    <div className='divOne'>
                        <h2>Metas para 2023:</h2>
                        <p>
                            -Conseguir meu primeiro emprego na area de TI<br />
                            -Estudar Micro Front-end<br />
                            -Estudar React native <br />
                            -Desevolver um aplicativo <br />
                            -Aprimorar meu inglês <br />
                        </p>
                    </div>
                    <div className='divTwo'>
                        <h2>Metas para o futuro</h2>
                        <p>
                            -Estudar back-end<br />
                            -desenvolver um grande site utilizando meu conhecimento front/back-end <br />
                            -Ter a oportunidade de ensinar novos Devs <br />
                            -Trabalhar no exterior como desenvolvedor
                        </p>
                    </div>

                </MyFutureTopThreeStyle>
            </MyFutureSonStyle>

        </MyFutureStyle>
    )
}

export default MyFuture
