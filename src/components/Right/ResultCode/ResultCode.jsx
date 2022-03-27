import React from "react";
import s from './ResultCode.module.css'

const ResultCode = props => {
    const shadows = `   ${props.stateShadow.horisontal}px 
                        ${props.stateShadow.vertical}px 
                        ${props.stateShadow.blur}px 
                        ${props.stateShadow.color}`
    return (
    <>
        <p>Код:</p>
        <div className={s.code_result}>
            <p>font-family: {props.stateText.font};</p>
            <p>font-size: {props.stateText.size}px,</p>
            <p>font-weight: {props.stateText.isBold ? 'bold' : 'normal'};</p>
            <p>font-style: {props.stateText.isItalic ? 'italic' : 'normal'};</p>
            <p>text-decoration: {props.stateText.decoration};</p>
            <p> color: {props.stateText.color};</p>
            <p>background-color: {props.stateText.backgroundColor};</p>
            <p> opacity: {props.stateText.opacity};</p>
            <p>letterSpacing: {props.stateSpaces.letterSpacing === 'normal' 
                                ? 'normal' 
                                : props.stateSpaces.letterSpacing + 'px'};</p>
            <p>wordSpacing: {props.stateSpaces.wordSpacing === 'normal' 
                            ? 'normal' 
                            : props.stateSpaces.wordSpacing + 'px'}; </p>
            <p>lineHeight: {props.stateSpaces.lineHeight === 'normal'  
                            ? 'normal' 
                            : props.stateSpaces.lineHeight };</p>
            <p>{props.stateShadow.isWorking ? 'text-shadow:' + shadows + ';' : ''}</p>
        </div>
    </>
    )
    

}
export default ResultCode