
import { Col, Row } from 'antd';
import './App.scss';
import 'antd/dist/antd.css';
import Todos from './containers/Todos';

function App() {
  return (
    <div className="App">

      <Row>
        <Col span={16} offset={4}>
          <Todos />
        </Col>
      </Row>
      
    </div>
  );
}

export default App;
