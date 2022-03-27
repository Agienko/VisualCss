const SET_LETTER_SPACE = 'SET_LETTER_SPACE'
const SET_WORD_SPACE = 'SET_WORD_SPACE'
const SET_LINE_HEIGHT = 'SET_LINE_HEIGHT'

let initialState = {
  letterSpacing: 'normal',
  wordSpacing: 'normal',
  lineHeight: 'normal',
}

const spacesReducer = (state = initialState, action) => {
    switch (action.type) {
       case SET_LETTER_SPACE:
            return {...state, letterSpacing: action.value}
        case SET_WORD_SPACE:
            return {...state, wordSpacing: action.value}
        case SET_LINE_HEIGHT:
            return {...state, lineHeight: action.value}
        default: 
            return state;
      }
}

export default spacesReducer

export const setLetterSpaceAC = value => ({type: SET_LETTER_SPACE, value})
export const setWordSpaceAC = value => ({type: SET_WORD_SPACE, value})
export const setLineHeightAC = value => ({type: SET_LINE_HEIGHT, value})