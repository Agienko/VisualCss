import React from "react";
import RangeFader from "../../reusable/RangeFader/RangeFader";
import s from './Texts.module.css'

const Texts = ({...props}) => (
    <div className={s.Left_wrapper}>
        <div className={s.input_container}>
            <label >Шрифты: &ensp;
                <select onChange={(e) => props.setFont(e.target.value)}>
                    {props.state.fonts.map(font => 
                    <option key={font} value={font}>{font}</option>)}
                </select>
            </label>
        </div>
        <RangeFader 
            text={'Размер'} 
            unit={'px'}
            value={props.state.size} 
            callback={props.setSize}
            config={{min: 6, max: 48, step: 1}}
        />
        
        <div className={s.input_checkbox}>
            <div> Жирный: 
                <input type="checkbox" 
                    checked={props.state.isBold} 
                    onChange={(e) => props.setBold(e.target.checked)}
                />
            </div>
            <div> Курсив: 
                <input type="checkbox"
                    checked={props.state.isItalic} 
                    onChange={(e) => props.setItalic(e.target.checked)}
                />
            </div>
        </div>
        <div className={s.input_radio}>
            <div> Подчеркнутый: 
                <input type="radio" name="decorstion" 
                    checked={props.state.decoration === 'underline' ? true : false}
                    onChange={()=> props.setDecoration('underline')}/>
            </div>
            <div> Зачеркнутый: 
                <input type="radio" name="decorstion"
                    checked={props.state.decoration === 'line-through' ? true : false}
                    onChange={()=> props.setDecoration('line-through')}/>  
            </div>
            <div> Надчеркнутый: 
                <input type="radio" name="decorstion"
                    checked={props.state.decoration === 'overline' ? true : false}
                    onChange={()=> props.setDecoration('overline')}/>
            </div>
            <div> Очистить: 
                <input type="radio" name="decorstion"
                    checked={props.state.decoration === 'none' ? true : false}
                    onChange={()=> props.setDecoration('none')}/>
            </div>
        </div>

        <div className={s.input_container}>
            <div>
                Цвет: {props.state.color}
            </div>
            <input className={s.input_color} type="color" 
                value={props.state.color}
                onChange={(e) => props.setColor(e.target.value)}/>
        </div>
       
        <RangeFader 
            text={'Прозрачность'} 
            value={props.state.opacity} 
            callback={props.changeOpacity}
            config={{min: 0, max: 1, step: 0.01}}
        />
    </div>
    
)
export default Texts