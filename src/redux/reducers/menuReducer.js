const CHANGE_PAGE = 'CHANGE_PAGE'

let initialState = {
    menuList: [
        {id: 1, content:'Текст', path: '/texts'}, 
        {id: 2, content:'Тень', path: '/shadows'},
        {id: 3, content:'Интервалы', path: '/spaces'}
    ],
    selectedIndex: 1,
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
       case CHANGE_PAGE:
          return {...state, selectedIndex: action.page }
        default: 
            return state;
      }
}

export default menuReducer

export const changePageAC = page => ({type: CHANGE_PAGE, page})