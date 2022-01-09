export class Project {

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
		let str = this.name.toUpperCase().big().bold().fontcolor('orange') + `<br/>
									Subproject ${this.subProjName}<br/>
									${this.copId} [Account Id ${this.accId}]<br/>
                                    ${this.links}`

        return str
    }


    get companyId () { return this.copId}
    set companyId (copId: string) { this.copId = copId}

    get accountId () { return this.accId}
    set accountId (accId: string) { this.accId = accId}

    get projectName () { return this.name}
    set projectName (name: string) { this.name = name}

    get subProjectName () { return this.subProjName}
    set subProjectName (subProjName: string) { this.subProjName = subProjName}

    get projectLinks() { return this.links}
    set projectLinks(links:Array<string>) { this.links = links}

}