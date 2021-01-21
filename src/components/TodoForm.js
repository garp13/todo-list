import { Col, Row } from "antd";
import "../assets/styles/Todos.scss";

const TodoForm = (props) => {
    const {value, setCheck, handleValueChange, handleOnSubmit} = props;
    console.log(value);
    return(
        <div className="todoForm">
            <form onSubmit={handleOnSubmit}>
                <Row>
                    <Col span={20} >
                        <input type="text" value={value.content} onChange={handleValueChange} />
                    </Col>

                    <Col span={4}>
                        <button 
                            type="primary"
                            onSubmit={handleOnSubmit}
                            className="buttonSubmit"
                        >
                            Thêm việc
                        </button>
                    </Col>
                    

                </Row>
                <Row className="radioCheck">

                    <Col span={5} className="normalRadio">
                        <input 
                            type="radio" 
                            name="priority" 
                            id="rNormal" 
                            value="Công việc thường" 
                            checked={value.priority === "Công việc thường" ? true : false}
                            onChange={() => setCheck("Công việc thường")}
                        />
                        <label htmlFor="rNormal"> Công việc thường </label>
                    </Col>
                    <Col span={5} offset={1} className="highRadio">
                        <input 
                            type="radio" 
                            name="priority" 
                            id="rHigh" 
                            value="Công việc ưu tiên" 
                            checked={value.priority === "Công việc ưu tiên" ? true : false}
                            onChange={() => setCheck("Công việc ưu tiên")}
                            
                        />
                        <label htmlFor="rHigh"> Công việc ưu tiên</label>
                    </Col>
                </Row>
                
            </form>
        </div>
    )
    
}


export default TodoForm;