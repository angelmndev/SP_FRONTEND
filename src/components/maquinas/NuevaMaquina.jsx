import React, { Fragment } from 'react';
import { Form, Input, Row, Col, Button, Select, Alert } from 'antd'

//Notificaion
import {openNotificationSuccess} from './Notificacion';

//Api
import {AgregarMaquinas} from '../../services/maquinas/MaquinasApi';

export default function NuevaMaquina({ listarMaquinas}){
    const [form] = Form.useForm();

    const agregarMaquinas = async(values)=>{
        const response = await AgregarMaquinas(values);
        if(response){
            openNotificationSuccess();
            listarMaquinas();
        }
    } 

    return(
        <Fragment>
            <Form onFinish={agregarMaquinas} Form={form} layout="vertical" >
                <Row justify="space-around">
                    <Col md={10}>
                        <Form.Item
                            name="maqNombre"
                            label="Registrar maquina"
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
        </Fragment>
    )
}