
import {useDispatch} from "react-redux"
import projectEvaluatorData from "../data/evaluator-data.json"
import { Project } from "../code/project"
import ProjectView from "./ProjectView";
import {setNoOfProjects} from '../code/actions'
import store from "../code/store"


function Evaluator() {

    let projects: Array<any> = []
    let projectGroups: Array<any> = []

    const dispatch : any = useDispatch()

    projectEvaluatorData.map((p:any) => {
        let project = new Project(p.copId, p.acId, p.project.name, p.subProject.name);
        
        //console.log(p.links)
        let projectLinks = p.links
        if (projectLinks !== undefined) {
            let linkArray: Array<string> = []
            projectLinks.map((l:any) => {
                //console.log(l.href)
                if (l.href !== undefined) linkArray.push(l.href)
            })
            project.projectLinks = linkArray
        }
        //console.log(project)
        projects.push(project)
    })

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

    //console.log("No of projects for Evaluation " + projects.length)
    dispatch(setNoOfProjects("Evaluator", projects.length))
  
    //const state = store.getState();
    //console.log("State in REdux is ")
    //console.log(state)
    //console.log(JSON.stringify(state))

    //console.log("Unique Evaluator Projects")
    //for (let k of projectGroup.keys()) {
    //    console.log("--------- " + k + " ---------------")
    //    let gProjects = projectGroup.get(k);
    //    gProjects.map( (gp:any) => {
    //       console.log(gp)
    //    })
    //}

    //for (let groups of projectGroup.values()) {
    //    console.log('--------------------')
    //    console.log(groups)
    //}

    projectGroups = Array.from(projectGroup.values())

    //console.log('+++++++++++++++++++++++')
    //projectGroups.map( (myProject:any) => {
    //    console.log(myProject)
    //})

    return (
        <div>
            <h3> My 'Evaluation Ready' Assessments as Evaluator</h3>
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

export default Evaluator