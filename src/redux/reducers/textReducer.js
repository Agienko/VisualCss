const SET_FONT = 'SET_FONT'
const SET_SIZE ='SET_SIZE'
const SET_BOLD = 'SET_BOLD'
const SET_ITALIC = 'SET_ITALIC'
const SET_DECORATION = 'SET_DECORATION'
const SET_COLOR = 'SET_COLOR'
const CHANGE_OPACITY = 'CHANGE_OPACITY'

let initialState = {
    fonts: [
        'Courier New', 
        'Courier', 
        'monospace', 
        'Franklin Gothic Medium', 
        'Arial Narrow', 
        'Arial', 
        'sans-serif',
        'Lucida Sans', 
        'Lucida Sans Regular', 
        'Lucida Grande', 
        'Lucida Sans Unicode', 
        'Geneva',
        'Verdana',
        'Times New Roman',
        'Helvetica',
        'cursive'
        
    ],
    font: 'Courier New',
    size: 16,
    isBold: false,
    isItalic: false,
    decoration: 'none',
    color: '#000000',
    opacity: 1,

}

const textReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FONT:
            return {...state, font: action.font}
        case SET_BOLD:
            return {...state, isBold: action.value}
        case SET_ITALIC:
            return {...state, isItalic: action.value}
        case SET_SIZE:
            return {...state, size: action.value}
        case SET_DECORATION:
            return {...state, decoration: action.value}
        case SET_COLOR:
            return {...state, color: action.color}
        case CHANGE_OPACITY:
            return {...state, opacity: action.opacity}
        default: 
            return state;
      }
}
export default textReducer

export const setFontAC = font => ({type: SET_FONT, font})
export const setSizeAC = value => ({type: SET_SIZE, value})
export const setBoldAC = value => ({type: SET_BOLD, value})
export const setItalicAC = value => ({type: SET_ITALIC, value})
export const setDecorationAC = value => ({type: SET_DECORATION, value})
export const setColorAC = color => ({type: SET_COLOR, color})
export const changeOpacityAC = opacity => ({type: CHANGE_OPACITY, opacity})