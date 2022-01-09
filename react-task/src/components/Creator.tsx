import {useDispatch} from "react-redux"
import projectCreatorData from "../data/creator-data.json"
import { Project } from "../code/project"
import ProjectView from "./ProjectView";

import {setNoOfProjects} from '../code/actions'
import store from "../code/store"


function Creator() {

    let projects: Array<any> = []
    let projectGroups: Array<any> = []

    const dispatch : any = useDispatch()

    projectCreatorData.map((p:any) => {

        let project = new Project(p.copId, p.acId, p.project.name, p.subProject.name);
        //console.log(project)
        projects.push(project)
    })

    //console.log(projects.length)

    let projectGroup = new Map()

    projects.map( (proj: Project) => {

        if (projectGroup.has(proj.projectName)) {
            let projarray = projectGroup.get(proj.projectName)
            projarray.push(proj)
            projectGroup.set(proj.projectName, projarray)

        } else {
            let projarray: Array<Project> = []
            projarray.push(proj)
            projectGroup.set(proj.projectName, projarray)
        }
        
    })

    //console.log("No of projects for X As creator " + projects.length)

    dispatch(setNoOfProjects("Creator", projects.length))
  
    //const state = store.getState();
    //console.log("State in REdux is ")
    //console.log(state)
    //console.log(JSON.stringify(state))

    projectGroups = Array.from(projectGroup.values())

    
    return (
        <div>
            <h3> My 'Evaluation Ready' Assessments as Creator</h3>
            <hr />
            {projectGroups.map( (p:any) => 
                    <ProjectView
                        key = {projectGroups.indexOf(p)}
                        groups = {p} />
                )
            }
        </div>
    )
    
}

export default Creator