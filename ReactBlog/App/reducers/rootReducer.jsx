import { combineReducers } from 'redux'
import blog from './blog/blogReducer.jsx'
import header from './header/headerReducer.jsx'

export default combineReducers({
    blog,
    header
})