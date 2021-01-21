import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import * as ActionTypes from "../constants/ActionTypes";
import "../assets/styles/Todos.scss";
import TodoCard from '../components/TodoCard';
import MessageTodo from '../components/MessageTodo';
Todos.propTypes = {
    // todoLists: PropTypes.array.isRequired,
};



function Todos(props) {

    const dispatch = useDispatch();
    const todoLists = useSelector(state => state.todoLists);
    const [mess, setMess] = useState({
        display: false,
        content: "",
    });

    const [value, setValue] = useState({
        content: "",
        priority: "Công việc thường",
    });

    const handleValueChange = (e) => {
        if (e.target.value === "") return;
        setValue({
            ...value,
           content: e.target.value
        });
        console.log(e);
    }

    // Check priority
    const setCheck = (pri) => {
        setValue({
            ...value,
           priority: pri,
        });
        console.log(pri);
    }

    const handleOnSubmit = (e) => {

        e.preventDefault();

        dispatch({
            type: ActionTypes.ADD_JOB,
            job: value,
        })

        if (value.content === "") {
            setMess({
                display:true,
                content:"Thêm công việc không thành công, vui lòng kiểm tra lại"
            })
        }else{
            
            setMess({
                display:true,
                content:"Thêm công việc thành công"
            })
            
        }


        setValue({
            ...value,
            content: "",
        });
        
       
        
    }

    const deleteTodo = (todo) =>{
        dispatch({
            type: ActionTypes.DELETE_JOB,
            job: todo,
        })

        setMess({
            display:true,
            content:"Xóa công việc thành công"
        })
    }

    const TodoRows = (todoLists) => {
        return (todoLists.map((todo) => {
            return(
                <Todo
                    key = { todo.id }
                    todo = { todo }
                    deleteTodo = { deleteTodo }
                />
            )
        }))
    }
    return (
        <div className="homePage">
            { mess.display && <MessageTodo mess={mess.content}/> }
            <div className="todoRow">

                <TodoForm 
                    value={value}
                    handleOnSubmit={handleOnSubmit}
                    handleValueChange={handleValueChange}
                    setCheck={setCheck}
                />
                


                <TodoCard 
                    TodoRows={TodoRows(todoLists)}
                />

            </div>
            
        </div>
    );
}



export default Todos;