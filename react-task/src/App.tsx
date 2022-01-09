import React from "react"
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import Tab from "./components/Tab"
import Tabs from "./components/Tabs"
import Evaluator from "./components/Evaluator"
import Creator from "./components/Creator"


//import stateData from "./data/initialState.json"
//import { selectView } from "./code/reducers"

//const store = createStore(selectView)

import store from "./code/store"

function App() {
  return (
    <div>
       <Provider store={store}>
       <Tabs>
          <Tab title="EVALUATOR"><Evaluator /></Tab>
          <Tab title="CREATOR"><Creator /></Tab>
        </Tabs>
       </Provider>
    </div>

  )
}

export default App