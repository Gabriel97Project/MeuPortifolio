import React, { useState } from 'react'
import { ProjectModalSonStyle, ProjectModalStyle } from './projectsModalStyle'
import { SlClose } from "react-icons/sl";




type PhotoOneType = {
  photo: string;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}



const ProjectsModal = ({ photo, setModalState }: PhotoOneType) => {



  return (

    <ProjectModalStyle>
      
      <ProjectModalSonStyle>
        <img src={photo} />
      </ProjectModalSonStyle>
      <div className='buttonAjustClass'>
        <button className='buttonStyleClass' onClick={()=>setModalState(false)}><SlClose className='iconClass'/></button>
      </div>
      
    </ProjectModalStyle>
  )
}

export default ProjectsModal
