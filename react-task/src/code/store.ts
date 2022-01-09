import {createStore} from 'redux'

import { selectView } from "./reducers"

import stateData from "../data/initialState.json"

const store = createStore(selectView, stateData)

export default store