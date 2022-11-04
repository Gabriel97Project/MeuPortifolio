import { CenterBackStyled, CenterBoxesStyled, SiteBackPageStyled } from "./siteBackPageStyled"
import { HiOutlineChat,HiOutlineQuestionMarkCircle ,HiOutlineClipboardList} from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";
import { BiWinkSmile } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

export const SiteBackPage = () =>{
    return(
        <SiteBackPageStyled>
            <CenterBackStyled>
                <CenterBoxesStyled>
                    <IoLogoGithub className="iconsStyled"/>
                    <p>Meus projetos</p>
                </CenterBoxesStyled>
                <CenterBoxesStyled>
                    <HiOutlineClipboardList className="iconsStyled"/>
                    Meu currículo 
                </CenterBoxesStyled>
                <CenterBoxesStyled>
                    <BiWinkSmile className="iconsStyled"/>
                    Meus valores
                </CenterBoxesStyled>
                <CenterBoxesStyled>
                    <HiOutlineChat className="iconsStyled"/>
                    <p>Planos e metas</p>
                </CenterBoxesStyled>
            </CenterBackStyled>
        </SiteBackPageStyled>
    )
}