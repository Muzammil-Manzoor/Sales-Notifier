import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';


const Testing = () => {

  const { Meta } = Card;

  return (
    <>
 <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={4}>
        <Card title="Card title" bordered={false}
        hoverable
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
          Card content
        </Card>
      </Col>
      <Col span={4}>
        <Card title="Card title" bordered={false}
        hoverable
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
          Card content
        </Card>
      </Col>
      <Col span={4}>
        <Card title="Card title" bordered={false}hoverable
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
          Card content
        </Card>
      </Col>
    </Row>
  </div>
  </>
  );




};

export default Testing;