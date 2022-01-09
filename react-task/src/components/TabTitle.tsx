import React, { useCallback } from "react"
//import {useDispatch} from "react-redux"
//import {selectTab} from '../code/actions'
import projectEvaluatorData from "../data/evaluator-data.json"
import store from "../code/store"

type Props = {
    title: string
    index: number
    selectedTab:number
    setSelectedTab: (index: number) => void
  }

  const TabTitle: React.FC<Props> = ({ title, index, selectedTab, setSelectedTab}) => {

    //const dispatch : any = useDispatch()

    let forEvalAsEvaluator:number = 0
    let forEvalAsCreator:number = 0  
    
    let evaluatorTitle: string = ''
    let creatorTitle: string = ''

    const state = store.getState();
    //console.log("State in REdux is " + JSON.stringify(state) )

    console.log("projects4Creator" + state.assesments4Creator)
    console.log("projects4Evaluator" + state.assesments4Evaluator)

    forEvalAsCreator = state.assesments4Creator
    forEvalAsEvaluator = state.assesments4Evaluator

    evaluatorTitle = "EVALUATOR (" + forEvalAsEvaluator + ")"
    creatorTitle = "CREATOR (" + forEvalAsCreator  + ")"

    console.log("Evaluator title is " + evaluatorTitle + " and Creator title is " + creatorTitle)

    const onClick = useCallback(() => {
        setSelectedTab(index)
        //dispatch(selectTab(title, index))
  
      }, [setSelectedTab, index])
    

  return (
    <li>
      <button onClick={onClick}
          className={index === selectedTab? "buttonactive": "buttoninactive"}>
            {title ==="EVALUATOR"? evaluatorTitle : creatorTitle}
          </button>
    </li>
  )
}

export default TabTitle