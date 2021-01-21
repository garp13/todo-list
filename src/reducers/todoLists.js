import * as ActionTypes from "../constants/ActionTypes";
var data = JSON.parse(localStorage.getItem('TODOS'));
const initialState = data ? data : [];


const todoLists = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.ADD_JOB:{
            const newLists = [...state];
            const index = Math.random();
            if (action.job.content==="") return state;
            newLists.push({
                id: index,
                content: action.job.content,
                priority: action.job.priority,

            });
            localStorage.setItem('TODOS', JSON.stringify(newLists));
            return [...newLists];
        }

        case ActionTypes.DELETE_JOB:{
            const newLists = [...state];
            const index = newLists.findIndex(list => list.id === action.job.id);
            if (index===-1) return state
            else{
                newLists.splice(index, 1);
                localStorage.setItem('TODOS', JSON.stringify(newLists));
                return [...newLists];
            }
        }
        default:
            return [...state];
    }
}

export default todoLists;