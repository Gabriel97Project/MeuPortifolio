import PhotoPartOne from "../../../src/Photo/sitegaleriapng.png"
import PhotoPartTwo from "../../../src/Photo/galeriapng.png"
import PhotoPartThree from "../../../src/Photo/siteformulariopng.png"
//import PhotoThreefrom "../../Photo/sitegaleriapng.png"
import { ProjectsBoxesStyle, ProjectsStyle, ProjectsStyleSon } from './projectsStyle'
import { useState } from "react"
import ProjectsModal from "./projectsModal/projectsModal"
import { IoLogoGithub } from "react-icons/io5";
import { HiCursorClick } from "react-icons/hi";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";




const Projects = () => {

    const [photoOneState, setPhotoOneState] = useState(false);
    const [photoTwoState, setPhotoTwoState] = useState(false);
    const [photoThreeState, setPhotoThreeState] = useState(false);
  

    const trueState = () => {
        setPhotoOneState(true);
    }
    const trueStateTwo = () => {
        setPhotoTwoState(true);
    }
    const trueStateThree = () => {
        setPhotoThreeState(true);
    }


    return (
        <ProjectsStyle>
            <button className="ButtonPageBack">
                 <a href="/"> <HiOutlineArrowLeftCircle className="backIcon"/></a>
            </button>
            <h1><a href="https://github.com/Gabriel97Project">   Esse é o meu GITHUB<IoLogoGithub/><HiCursorClick/> </a></h1>
            {photoOneState === true && <ProjectsModal setModalState={setPhotoOneState} photo={PhotoPartOne} />}
            {photoTwoState === true && <ProjectsModal setModalState={setPhotoTwoState} photo={PhotoPartTwo} />}
            {photoThreeState === true && <ProjectsModal setModalState={setPhotoThreeState} photo={PhotoPartThree} />}
            
            <ProjectsStyleSon>
                <button onClick={trueState}>
                    <img src={PhotoPartOne} alt="site de jogos" />
                </button>

                <ProjectsBoxesStyle>
                    <h2>Site gamer</h2>
                    <p>Esse foi meu primeiro projeto, após muito tempo de estudo, apliquei todo meu conhecimento e desenvolvi meu proprio site,
                        só tenho a dizer que foi muito gratificante e que cada segundo que trabalhei nesse projeto foi maravilhosos.
                    </p>
                </ProjectsBoxesStyle>
            </ProjectsStyleSon>
            <ProjectsStyleSon>
                <button onClick={trueStateTwo}>
                    <img src={PhotoPartTwo} alt="site de jogos" />
                </button>

                <ProjectsBoxesStyle>
                    <h2>Galeria de fotos</h2>
                    <p>
                        A cada dia eu tento buscar mais e mais conhecimentos, então após analisar alguns projetos,
                        decidi fazer uma galeria de fotos utilizando firebase para armazenar as mesmas. Foi um projeto que eu tive
                        que me superar e evoluir bastante, com isso consegui concluir o projeto.
                    </p>
                </ProjectsBoxesStyle>
            </ProjectsStyleSon>
            <ProjectsStyleSon>
                <button onClick={trueStateThree}>
                    <img src={PhotoPartThree} alt="formulário de desenvolvedores" />
                </button>

                <ProjectsBoxesStyle>
                    <h2>Formulário do desenvolvedor</h2>
                    <p>
                        Sabemos a importância que um formulário desempenha em diversos sites, por isso
                        busquei estudos para desenvover um formulário que fosse funcional
                        esteticamente atrativo, então cheguei a esse projeto. Devemos sempre buscar
                        novos conhecimentos e aplica-los em futuros projetos.
                    </p>
                </ProjectsBoxesStyle>
            </ProjectsStyleSon>
            

        </ProjectsStyle>
    )
}

export default Projects
