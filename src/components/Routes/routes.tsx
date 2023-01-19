
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CurriculoPage from '../curriculoPage/curriculoPage';
import MyFuture from '../myFuture/myFuture';
import Projects from '../myProjects.Page/projects';
import { SiteBackPage } from '../siteBackPage/siteBackPage';
import PhotoTwo from "../../Photo/curriculogabrielnovo.jpeg";
import MyValue from '../myValue/myValue';

function RoutesBox() {
  return (
    <BrowserRouter>
        <Routes>
        {/*    //<MyValue/> */}
        <Route path='/' element={<SiteBackPage />} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/MyFuture' element={<MyFuture />} />
        <Route path='/CurriculoPage' element={<CurriculoPage PhotoCurriculo={PhotoTwo} />}/>
        <Route path='/MyValue' element={<MyValue/>}/>
        {/* <SiteBackPage /> */}
        {/* //<Projects/> */}
        {/* //<ProjectsModal/> */}
        {/* //<CurriculoPage Photo={Photo}/> */}
        {/* //<MyFuture/> */}
        </Routes>
    </BrowserRouter>
    

  );
}

export default RoutesBox;