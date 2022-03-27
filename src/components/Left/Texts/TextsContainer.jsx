import { connect } from "react-redux";
import { setSizeAC, setFontAC, setBoldAC, setItalicAC, setDecorationAC, setColorAC, changeOpacityAC } from "../../../redux/reducers/textReducer";
import Texts from "./Texts";

const mapStateToProps = state => ({state : state.textReducer})

const mapDispatchToProps = dispatch =>({
        setFont: font => dispatch(setFontAC(font)),
        setSize: value => dispatch(setSizeAC(value)),
        setBold: value => dispatch(setBoldAC(value)),
        setItalic: value =>dispatch(setItalicAC(value)),
        setDecoration: value => dispatch(setDecorationAC(value)),
        setColor: color => dispatch(setColorAC(color)),
        changeOpacity: value => dispatch(changeOpacityAC(value))
    })

const TextsContainer = connect(mapStateToProps, mapDispatchToProps)(Texts)

export default TextsContainer