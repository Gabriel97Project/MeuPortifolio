import Photo from "../src/Photo/curriculogabrielnovo.jpeg"
import { CurriculoPageStyle } from './curriculoPageStyle'



function CurriculoPage() {
  return (
    <CurriculoPageStyle>
        
        <img src={Photo} alt="curriculo" />
    </CurriculoPageStyle>
  )
}

export default CurriculoPage
