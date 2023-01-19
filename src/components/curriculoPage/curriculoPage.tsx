
import { CurriculoPageStyle } from './curriculoPageStyle'
import { IoLogoGithub } from "react-icons/io5";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";



type photoProps = {
  PhotoCurriculo:string;
}

function CurriculoPage({PhotoCurriculo}:photoProps) {
  return (
    <CurriculoPageStyle>
        <button className="ButtonPageBack"> 
          <a className='backLink' href="/">
             <HiOutlineArrowLeftCircle className="backIcon"/>
          </a>
        </button>
        <h1>Seja bem vindo(a) </h1>
        <img src={PhotoCurriculo} alt="curriculo" />
        <h2><a href=" https://github.com/Gabriel97Project">--- <IoLogoGithub/>  GITHUB --- </a></h2>
    </CurriculoPageStyle>
  )
}

export default CurriculoPage;
