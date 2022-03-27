const CHANGE_TEXT = 'CHANGE_TEXT'

let initialState = {
   text: 'Съешь еще этих мягких французских булок...'
}

const resultVisualReducer = (state = initialState, action) => {
    switch (action.type) {
       case CHANGE_TEXT:
          return {...state, text: action.text }
        default: 
            return state;
      }
}

export default resultVisualReducer

export const changeTextAC = text => ({type: CHANGE_TEXT, text})