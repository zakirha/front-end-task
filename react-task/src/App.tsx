import {Provider} from 'react-redux'

import Tab from "./components/Tab"
import Tabs from "./components/Tabs"
import Evaluator from "./components/Evaluator"
import Creator from "./components/Creator"

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