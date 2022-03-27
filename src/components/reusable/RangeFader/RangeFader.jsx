import React from "react";
import NormalizeBtn from "../NormalizeBtn/NormalizeBtn";
import s from './RangeFader.module.css'

const RangeFader = props => (
    <div className={s.input_container}>
        {props.normalizeBtn
        ? <NormalizeBtn value={props.value} callback={props.callback}/> 
        : undefined}
        <label >
           {props.text}: {props.value}{(props.unit && props.value !== 'normal') ? props.unit : undefined }
        </label>
        <input type="range" 
            min={props.config.min} 
            max={props.config.max} 
            step={props.config.step} 
            value={props.value}
            onChange={(e) => props.callback(e.target.value)}
        />
    </div>
)
export default RangeFader