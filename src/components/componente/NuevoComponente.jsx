import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Col, Button, Select, Alert } from 'antd'



//import { openNotificationSuccess } from './Notificacion'
import {AgregarComponenteApi} from '../../services/componente/ComponenteApi';

export default function NuevoComponente({ listarComponente }) {

    const [form] = Form.useForm();

    const AgregarComponente = async (values) => {
        console.log(values);
        const data = await AgregarComponenteApi(values);
        if(data){
            listarComponente();
        }
    }   

    return (
        <Form onFinish={AgregarComponente} Form={form} layout="vertical" >
            <Row justify="space-around">
                <Col md={10}>
                    <Form.Item
                        name="comNombre"
                        label="Nombre de componente"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingrese el componente' }]}
                    >
                        <Input />
                    </Form.Item>

                </Col>

                <Col md={10}>
                </Col>

                <Col md={22}>
                    <Form.Item
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Button type="primary" style={{ border: "#00DE6F", color: "white", background: "#00DE6F", width: "10%" }} htmlType="submit">
                            <p style={{ fontWeight: "bold" }}>Registrar</p>
                        </Button>
                    </Form.Item>
                </Col>

            </Row>

        </Form>
    );
}