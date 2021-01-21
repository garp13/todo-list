import * as ActionTypes from "../constants/ActionTypes";

export const actAddJob = (job) => {
    return {
        type: ActionTypes.ADD_JOB,
        job,
    }
}
