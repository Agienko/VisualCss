import React from "react";
import s from './NormalizeBtn.module.css'

const NormalizeBtn = props => (
        <div className={ s.btn } >
            <button 
                className={ props.value === 'normal' ? s.disable : undefined }
                onClick={ () => props.callback('normal') }
                >normal
            </button>
        </div>
)

export default NormalizeBtn