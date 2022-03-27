import React from "react";
import RangeFader from "../../reusable/RangeFader/RangeFader";
import s from './Spaces.module.css'

const Spaces = props => (
    <div className={s.Left_wrapper}>
         <RangeFader
            normalizeBtn='true'
            unit='px'
            text={'Межбуквенный'} 
            value={props.state.letterSpacing} 
            callback={props.setLetterSpace}
            config={{min: -4, max: 8, step: 0.01}}
        />
        <RangeFader
            normalizeBtn='true'
            unit='px'
            text={'Между словами'} 
            value={props.state.wordSpacing} 
            callback={props.setWordSpace}
            config={{min: -8, max: 8, step: 0.01}}
        />
        <RangeFader
            normalizeBtn='true'
            text={'Межстрочный'} 
            value={props.state.lineHeight} 
            callback={props.setLineHeight}
            config={{min: 0.2, max: 3, step: 0.01}}
        />
    </div> 
)
export default Spaces