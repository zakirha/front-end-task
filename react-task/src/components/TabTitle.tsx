import React, { useCallback, useState } from "react"
import {useDispatch} from "react-redux"

import store from "../code/store"

import projectCreatorData from "../data/creator-data.json"
import projectEvaluatorData from "../data/evaluator-data.json"
import {setNoOfProjects} from '../code/actions'

type Props = {
    title: string
    index: number
    selectedTab:number
    setSelectedTab: (index: number) => void
  }

  const TabTitle: React.FC<Props> = ({ title, index, selectedTab, setSelectedTab}) => {

    //-- getting the number of assessments by evaluator and creator
    let noOfProjectsByEvaluator = 0
    let noOfProjectsByCreator = 0

    //-- only way to get the count is to loop thru the json array
    projectEvaluatorData.map((p:any) => {
      noOfProjectsByEvaluator += 1
    })

    projectCreatorData.map((p:any) => {
      noOfProjectsByCreator += 1
    })

    //-- dispatch this - the underlying creator-data or evaluator-data  may have changed
    const dispatch : any = useDispatch()
    dispatch(setNoOfProjects("Creator", noOfProjectsByCreator))
    dispatch(setNoOfProjects("Evaluator",noOfProjectsByEvaluator))

    //-- now lets set the title for our tabs using the count values we got earlier
    const [evalTitle, setEvalTitle] = useState("EVALUATOR (" + noOfProjectsByEvaluator + ")")
    const [creatTitle, setCreatorTitle] = useState("CREATOR(" + noOfProjectsByCreator + ")")


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