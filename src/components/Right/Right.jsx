import React from "react";
import ResultCodeContainer from "./ResultCode/ResultCodeContainer";
import ResultVisualConrainer from "./ResultVisual/ResultVisualConrainer";
import s from './Right.module.css'

const Right = props => (
    <div className={s.Right_wrapper}>
        <ResultVisualConrainer />
        <ResultCodeContainer />
    </div>

)
export default Right