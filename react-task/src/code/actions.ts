
import { ActionType } from "./types"

export function selectTab(title: string, selectedIndex: number) {

    console.log("Creating an Action with title " + title + " and selected Index as " + selectedIndex)
    return {
		type: ActionType.SHOW_VIEW,
		payload: {
			title: title,
			index: selectedIndex
		}
	}

}

export function setNoOfProjects(title: string, total : number) {
	//console.log("Creating an Action with title " + title + " and no of projects as " + total)

	return {
		type: ActionType.NO_OF_PROJECTS,
		payload: {
			title: title,
			total: total
		}
	}
}