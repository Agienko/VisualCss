import React, { useState } from "react";
import s from './ResultVisual.module.css'

const ResultVisual = ({...props}) => {
    const shadows = `${props.stateShadow.horisontal}px 
                        ${props.stateShadow.vertical}px 
                        ${props.stateShadow.blur}px 
                        ${props.stateShadow.color}`
    const inlineStyle = {
        textShadow:`${props.stateShadow.isWorking ? shadows : ''}`,
        fontFamily: `${props.stateText.font}`,
        fontSize: `${props.stateText.size}px`,
        fontWeight:`${props.stateText.isBold ? 'bold' : 'normal'}`,
        fontStyle:`${props.stateText.isItalic ? 'italic' : 'normal'}`,
        textDecoration:`${props.stateText.decoration}`,
        color: `${props.stateText.color}`,
        backgroundColor:`${props.stateText.backgroundColor}`,
        opacity: `${props.stateText.opacity}`,
        letterSpacing: `${props.stateSpaces.letterSpacing === 'normal' ? 'normal' : props.stateSpaces.letterSpacing + 'px'}`,
        wordSpacing: `${props.stateSpaces.wordSpacing === 'normal' ? 'normal' : props.stateSpaces.wordSpacing + 'px'}`,
        lineHeight: `${props.stateSpaces.lineHeight === 'normal' ? 'normal' : props.stateSpaces.lineHeight }`,
    }
     const [visible, setVisivle] = useState(false)
    return(
            <div className={s.border}>
                <p >Результат:</p>
                {visible 
                ? <textarea 
                    autoFocus={true}
                    placeholder="текст..." 
                    value={props.stateResultVisual.text} 
                    onChange={(e) => props.changeText(e.target.value)}
                    onBlur={() => setVisivle(!visible)}/>
                : <div 
                        className={s.result_wrapper} 
                        style={inlineStyle} 
                        onDoubleClick={() => setVisivle(!visible)}>
                        {props.stateResultVisual.text}
                    </div>}
            </div>
    )
}
export default ResultVisual