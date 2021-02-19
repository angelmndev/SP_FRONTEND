import React, { useState, useEffect } from 'react'
import { Descriptions, Select, Card, Col, Row, Button, Spin } from 'antd';
import { Tag } from 'antd'
import { Divider, Tabs } from 'antd'


const IndicadoresContainer = () => {
    const { Option } = Select;
    const { TabPane } = Tabs;



    return (
        <>
            {/* component description */}
            <Descriptions title="Representacion grafica" >
                <Descriptions.Item >
                    Bienvenido a la sección de representacion grafica.
            </Descriptions.Item>
            </Descriptions>
            <Divider />
            {/* component description */}
            <Row>
                <Col md={24}>                

                </Col>
            </Row>
        </>
    )
}

export default IndicadoresContainer