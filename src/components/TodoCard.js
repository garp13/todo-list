// import { Col, Row } from "antd";
import "../assets/styles/Todos.scss";


const TodoCard = (props) => {
    const { TodoRows } = props;
    return(
        <div>
            <div className="headLists">
                DANH SÁCH CÔNG VIỆC
            </div>
            {TodoRows}
        </div>
    )


}

export default TodoCard;