import { ActionType, Action } from "./types"

export function selectView(state: any = {}, action: Action) {
   
	switch (action.type) {
		case ActionType.SHOW_VIEW:
			return {
                ...state,
                "title": action.payload.title,
                "index": action.payload.index
            }

        case ActionType.NO_OF_PROJECTS:

            if (action.payload.title === 'Creator') {
                return {
                    ...state,
                    assesments4Creator : action.payload.total
                }

            } else if (action.payload.title === 'Evaluator') {
                return {
                    ...state,
                    assesments4Evaluator : action.payload.total
                }


            } else {
                console.log('Returning default state as neither creator or evaluator');
			    return state 
            }

		default :
			return state
	}
}