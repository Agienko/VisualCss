import { connect } from "react-redux"
import { changePageAC } from "../../redux/reducers/menuReducer"
import UppMenu from "./UppMenu"


const mapStateToProps = state => {
    return {state : state.menuReducer}
}
const mapDispatchToProps = dispatch =>{
    return{
       changePage: (page) => dispatch(changePageAC(page)) 
    }
}

const UppMenuContainer = connect(mapStateToProps, mapDispatchToProps)(UppMenu)


export default UppMenuContainer