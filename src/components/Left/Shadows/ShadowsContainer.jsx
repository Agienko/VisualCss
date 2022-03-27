import { connect } from "react-redux";
import { changeBlurAC, changeColorAC, changeHorisontalAC, changeVerticalAC, isWorkingAC } from "../../../redux/reducers/shadowReducer";
import Shadows from "./Shadows";


const mapStateToProps = state => ({state : state.shadowReducer})
const mapDispatchToProps = dispatch =>({
        changeHorisontal: value => dispatch(changeHorisontalAC(value)),
        changeVertical: value => dispatch(changeVerticalAC(value)),
        changeBlur: value => dispatch(changeBlurAC(value)),
        changeColor: color => dispatch(changeColorAC(color)), 
        isWorking: value => dispatch(isWorkingAC(value))
    })

const ShadowsContainer = connect(mapStateToProps, mapDispatchToProps)(Shadows)

export default ShadowsContainer