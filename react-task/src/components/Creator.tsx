import {useDispatch} from "react-redux"
import projectCreatorData from "../data/creator-data.json"
import { Project } from "../code/project"
import ProjectView from "./ProjectView";

import {setNoOfProjects} from '../code/actions'


function Creator() {

    let projects: Array<any> = []
    let projectGroups: Array<any> = []

    const dispatch : any = useDispatch()

    projectCreatorData.map((p:any) => {
        let project = new Project(p.copId, p.acId, p.project.name, p.subProject.name);
        projects.push(project)
    })

    //-- group projects by their name
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

    //-- send it to the Redux store - the Tab title needs to pick it up from there
    dispatch(setNoOfProjects("Creator", projects.length))

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