

function ProjectDetail({accId, copId, name, subProjectName}:any) {
    return (
        <div className="detailContent">
            <div className="highlightIDVals">{copId} <b> {accId} </b> </div>
            {name} {subProjectName}
            <hr/>
        </div>
    )
}

export default ProjectDetail