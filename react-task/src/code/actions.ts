
import { ActionType } from "./types"

export function selectTab(title: string, selectedIndex: number) {

    return {
		type: ActionType.SHOW_VIEW,
		payload: {
			title: title,
			index: selectedIndex
		}
	}

}

export function setNoOfProjects(title: string, total : number) {

	return {
		type: ActionType.NO_OF_PROJECTS,
		payload: {
			title: title,
			total: total
		}
	}
}