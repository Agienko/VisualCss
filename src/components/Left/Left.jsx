import React from "react";
import { Route, Routes } from "react-router-dom";
import ShadowsContainer from "./Shadows/ShadowsContainer";
import SpacesContainer from "./Spaces/SpacesContainer";
import TextsContainer from "./Texts/TextsContainer";

const Left = props => (
    <Routes>
        <Route path='/shadows' default element = {<ShadowsContainer />}/>
        <Route path='/texts' element = {<TextsContainer />}/>
        <Route path='/spaces' element = {<SpacesContainer />}/>
    </Routes>   
)
export default Left