export class Project {

    // TODO - define the properties with leading _ to discourage them from being accessed 
    copId: string
    accId: string
    name: string
    subProjName: string
    links: Array<string> = []

    constructor(copId:string, accId:string , name:string, subProjName:string ) {
        this.copId = copId
        this.accId = accId
        this.name = name
        this.subProjName = subProjName
    }

    toString() {
		let str = this.name + `Subproject ${this.subProjName} ${this.copId} [Account Id ${this.accId}] ${this.links}`
        return str
    }


    get communityOfPractiseId () { return this.copId}
    set communityOfPractiseId (copId: string) { this.copId = copId}

    get accountId () { return this.accId}
    set accountId (accId: string) { this.accId = accId}

    get projectName () { return this.name}
    set projectName (name: string) { this.name = name}

    get subProjectName () { return this.subProjName}
    set subProjectName (subProjName: string) { this.subProjName = subProjName}

    get projectLinks() { return this.links}
    set projectLinks(links:Array<string>) { this.links = links}

}