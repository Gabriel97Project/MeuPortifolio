import { CenterBackStyled, CenterBoxesTopStyled, SiteBackPageStyled, CenterBoxesBottomStyled } from "./siteBackPageStyled"
import { HiOutlineChat, HiOutlineQuestionMarkCircle, HiOutlineClipboardList } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";
import { BiWinkSmile } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

export const SiteBackPage = () => {
    return (
        <SiteBackPageStyled>
            <CenterBackStyled>
                <div className="divSiteBack">

                    <CenterBoxesTopStyled>
                        <a href="/Projects" >
                            <IoLogoGithub className="iconsStyled" />
                            <h2>Meus projetos</h2>
                        </a>
                    </CenterBoxesTopStyled>

                    <CenterBoxesTopStyled>
                        <a href="/CurriculoPage">
                            <HiOutlineClipboardList className="iconsStyled" />
                            <h2>Meu currículo</h2>
                        </a>

                    </CenterBoxesTopStyled>
                </div>
                <div className="divSiteBack">
                    <CenterBoxesBottomStyled>
                        <a href="/MyValue">
                            <BiWinkSmile className="iconsStyled" />
                            <h2>Meus valores</h2>
                        </a>

                    </CenterBoxesBottomStyled>
                    <CenterBoxesBottomStyled>
                        <a href="/MyFuture">
                            <HiOutlineChat className="iconsStyled" />
                            <h2>Planos e metas</h2>
                        </a>
                    </CenterBoxesBottomStyled>
                </div>

            </CenterBackStyled>
        </SiteBackPageStyled>
    )
}