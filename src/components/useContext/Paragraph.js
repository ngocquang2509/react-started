import {ThemeContext} from './ThemeContext'
import { useContext } from 'react'

export default function Paragraph() {
    const context = useContext(ThemeContext)

    return(
        <p className={context.theme}>Context provides a way to pass data through the component tree without having to pass props down manually at every level</p>
    )
}