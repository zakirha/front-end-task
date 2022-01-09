import React, { useCallback, useState } from "react"
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

      forEvalAsCreator = state.assesments4Creator
      forEvalAsEvaluator = state.assesments4Evaluator

      evaluatorTitle = "EVALUATOR (" + forEvalAsEvaluator + ")"
      creatorTitle = "CREATOR (" + forEvalAsCreator  + ")"

      setEvalTitle(evaluatorTitle)
      setCreatorTitle(creatorTitle)

      setSelectedTab(index)
  
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