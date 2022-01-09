import React, { useCallback, useState } from "react"
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

    const [evalTitle, setEvalTitle] = useState("EVALUATOR")
    const [creatTitle, setCreatorTitle] = useState("CREATOR")


    const onClick = useCallback(() => {

      let evaluatorTitle: string = ''
      let creatorTitle: string = ''

      let forEvalAsEvaluator:number = 0
      let forEvalAsCreator:number = 0  

      const state = store.getState();

      console.log("projects4Creator" + state.assesments4Creator)
      console.log("projects4Evaluator" + state.assesments4Evaluator)

      forEvalAsCreator = state.assesments4Creator
      forEvalAsEvaluator = state.assesments4Evaluator

      evaluatorTitle = "EVALUATOR (" + forEvalAsEvaluator + ")"
      creatorTitle = "CREATOR (" + forEvalAsCreator  + ")"

      console.log("Evaluator title is " + evaluatorTitle + " and Creator title is " + creatorTitle)

      setEvalTitle(evaluatorTitle)
      setCreatorTitle(creatorTitle)

      setSelectedTab(index)
      //dispatch(selectTab(title, index))
  
    }, [setSelectedTab, index])
    

  return (
    <li>
      <button onClick={onClick}
          className={index === selectedTab? "buttonactive": "buttoninactive"}>
            {title ==="EVALUATOR"? evalTitle : creatTitle}
          </button>
    </li>
  )
}

export default TabTitle