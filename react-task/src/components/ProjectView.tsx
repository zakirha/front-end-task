import { useState } from "react"
import { Project } from "../code/project";
import ProjectDetail from "./ProjectDetail";

function ProjectView(props:any) {
    let projectsArr:Array<Project> = props.groups
    let projectName:string = 'undefined'
    if (projectsArr != undefined && projectsArr.length > 0) {
        let projName = projectsArr[0].projectName
        //console.log('Project Name is' + projName)
        projectName = projName;
    }

    const [selectedClass, setSelectedClass] = useState("nopanel")

    const onClick = () => {

        if (selectedClass === 'nopanel') {
            console.log("not already selected - lets select now")
            setSelectedClass("panel")
        } else {
            console.log("unselect please")
            setSelectedClass("nopanel")
        }   
    }

    return (
        <div>
            <button onClick={onClick} className="accordion"><b>{projectName}</b></button>
            <div  className={selectedClass}>
                {
                    (props.groups.length === 0) ?
                    <div>No PROJECTS</div> :
                    
                        props.groups.map( (p: any) =>
                            <ProjectDetail
                                key={p.accId}
                                copId = {p.copId}
                                accId={p.accId}
                                name = {p.projectName}
                                subProjectName = {p.subProjectName}
                            />
                        
                    )
                }
            </div>
        </div>
    )
}
export default ProjectView