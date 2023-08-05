import React from "react";
import { Col, Row } from "antd";
import SideBar from "./SideBar";


function MainPage(props){
    return (
     <div id="main_page">
      <Row>
       <Col span={18} push={6}>
        col-18 col-push-6
       </Col>
       <Col span={6} pull={18}>
        col-6 col-pull-18
       </Col>
      </Row>
     </div>
    );
}
export default MainPage;