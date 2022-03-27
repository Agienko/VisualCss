const CHANGE_HORISONTAL = 'CHANGE_HORISONTAL'
const CHANGE_VERTICAL = 'CHANGE_VERTICAL'
const CHANGE_BLUR = 'CHANGE_BLUR'
const CHANGE_COLOR = 'CHANGE_COLOR'
const IS_WORKING = 'IS_WORKING'

let initialState = {
    horisontal: 0,
    vertical: 0,
    blur: 2,
    color: '#000000',
    isWorking: false
}

const shadowReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_HORISONTAL:
          return {...state, horisontal: action.value}
        case CHANGE_VERTICAL:
            return {...state, vertical: action.value}
        case CHANGE_BLUR:
            return {...state, blur: action.value}
        case CHANGE_COLOR:
            return {...state, color: action.color}
        case IS_WORKING:
            return {...state, isWorking: action.value}
        default: 
            return state;
      }
}

export default shadowReducer

export const changeHorisontalAC = value => ({type: CHANGE_HORISONTAL, value})
export const changeVerticalAC = value => ({type: CHANGE_VERTICAL, value})
export const changeBlurAC = value => ({type: CHANGE_BLUR, value})
export const changeColorAC = color => ({type: CHANGE_COLOR, color})
export const isWorkingAC = value => ({type: IS_WORKING, value})
