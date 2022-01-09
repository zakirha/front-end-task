import { ActionType, Action } from "./types"
//import store from "../code/store"

export function selectView(state: any = {}, action: Action) {

    //if (action != undefined && action.payload != undefined) {
    //    console.log('Inside Reducer Payload' + action.payload.title + ' ' + action.payload.index )
    //    console.log('Inside Reducer ActionTpe ' + action.type)
    //}
    

	switch (action.type) {
		case ActionType.SHOW_VIEW:
            console.log('Returning title and index values from payload inside reducer '
                + action.payload.title + ' ' + action.payload.index);

			return {
                ...state,
                "title": action.payload.title,
                "index": action.payload.index
            }

        case ActionType.NO_OF_PROJECTS:

            console.log("Reducing the state - Evalator and Creator project count " + action.payload.title + ' ' + action.payload.total)
            //const storeState = store.getState();
            if (action.payload.title === 'Creator') {
                //console.log("No of projects for creator evaluation")
                //console.log(state.view.projects.creator)

                //const obj = JSON.parse(state)
                //console.log(state)
                //console.log(state.view.projects["creator"])
                //state.view.projects.creator = action.payload.total
                return {
                    ...state,
                    assesments4Creator : action.payload.total


                }

            } else if (action.payload.title === 'Evaluator') {
                //console.log("No of projects for evaluator evaluation")
                //console.log(state.view.projects.evaluator)

                //const obj = JSON.parse(state)
                //console.log(state)
                //console.log(state.view["projects"])

                //state.view.projects.evaluator = action.payload.total
                return {
                    ...state,
                    assesments4Evaluator : action.payload.total

                }


            } else {
                console.log('Returning default state as neither creator or evaluator');
			    return state 
            }

		default :
            console.log('Returning default state');
			return state
	}
}