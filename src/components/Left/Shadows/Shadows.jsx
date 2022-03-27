import React from "react";
import RangeFader from "../../reusable/RangeFader/RangeFader";
import s from './Shadows.module.css'


const Shadows = ({...props}) => (
    <div className={s.Left_wrapper}>

        <div className={s.input_checkbox}>
            <div>{props.state.isWorking ? 'Отключить:' : 'Включить:'} 
                <input type="checkbox" 
                    checked={props.state.isWorking} 
                    onChange={(e) => props.isWorking(e.target.checked)}/>
            </div>
        </div>
        <RangeFader 
            text={'Смещение по горизонтали'} 
            unit={'px'}
            value={props.state.horisontal} 
            callback={props.changeHorisontal}
            config={{min: -20, max: 20, step: 1}}
        />
        <RangeFader 
            text={'Смещение по вертикали'} 
            unit={'px'}
            value={props.state.vertical} 
            callback={props.changeVertical}
            config={{min: -20, max: 20, step: 1}}
            />
        <RangeFader 
            text={'Размытие'} 
            unit={'px'}
            value={props.state.blur} 
            callback={props.changeBlur}
            config={{min: 0, max: 40, step: 1}}
            />
        
        <div className={s.input_container}>
            <div >
                Цвет тени: {props.state.color}
            </div>
            <input className={s.input_color}
                type="color" 
                value={props.state.color}
                onChange={(e) => props.changeColor(e.target.value)}
            />
        </div>
       
    </div>
    
)
export default Shadows