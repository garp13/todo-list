import { Col, Row } from "antd";

import "../assets/styles/Todos.scss";

const Todo = (props) => {
    const { todo, deleteTodo } = props;
    return(
        <Row className="todoItem">
            <Col span={15}>
                {todo.content}
            </Col>
            <Col span={5} className={todo.priority === "Công việc thường" ? "todoNormal" : "todoHigh"}>
            
                <i className="fa fa-heart"/>{todo.priority} 
                
            </Col>
            <Col span={4} className="toolbar">
                    <span className="fa fa-times-circle cursorIcon" onClick={() => deleteTodo(todo)}>
                    </span>
            </Col>
        </Row>
    )


}

export default Todo;