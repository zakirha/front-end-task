import React, { useCallback } from "react"
//import {useDispatch} from "react-redux"
//import {selectTab} from '../code/actions'
import store from "../code/store"

type Props = {
    title: string
    index: number
    selectedTab:number
    setSelectedTab: (index: number) => void
  }

  const TabTitle: React.FC<Props> = ({ title, index, selectedTab, setSelectedTab}) => {

    //const dispatch : any = useDispatch()

    const onClick = useCallback(() => {

        const state = store.getState();
        //console.log("State in REdux is " + JSON.stringify(state) )

        console.log("projects4Creator" + state.assesments4Creator)
        console.log("projects4Evaluator" + state.assesments4Evaluator)
  
  
        setSelectedTab(index)
        //dispatch(selectTab(title, index))
  
      }, [setSelectedTab, index])
    

  return (
    <li>
      <button onClick={onClick}
          className={index === selectedTab? "buttonactive": "buttoninactive"}>{title}</button>
    </li>
  )
}

export default TabTitle