import React from 'react'
import store from "../code/store"


type Props = {
  title: string
}


const Tab: React.FC<Props> = ({ children }) => {


    const state = store.getState();
    //console.log("State in REdux is ")
    //console.log(state)
    console.log(JSON.stringify(state))

    //if (state != undefined && state.view == undefined) {
    //    console.log("State is " + state)
    //    console.log(JSON.stringify(state))
    //}else if (state != undefined && state.view != undefined)
    //console.log("Viewww is " + state.view.index)
    
    return <div className="tabcontent">{children}</div>
}

export default Tab