import React from 'react';
import { Form, Input, Row, Col, Button, Select } from 'antd'

export default function NuevoUsuario() {

    return (
        <Form  layout="vertical" >
            <Row justify="space-around">
                <Col md={10}>
                    <Form.Item
                        name="nombrePersonalUsuario"
                        label="Nombres"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingresa los nombres' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col md={10}>
                    <Form.Item
                        name="apellidoPersonalUsuario"
                        label="Apellidos"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingresa los apellidos' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col md={10}>
                    <Form.Item
                        extra="El nombre de usuario solo puede ser de 6 caracteres."
                        name="nombreUsuario"
                        label="nombre de usuario"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingresa el nombre de usuario' }]}
                    >
                        <Input maxLength={6} />
                    </Form.Item>
                </Col>
                <Col md={10}>
                    <Form.Item
                        name="claveUsuario"
                        label="clave de usuario"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingresa la clave' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
                <Col md={10}>
                    <Form.Item
                        name="fk_rol"
                        label="seleccione el rol de usuario"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingrese el rol' }]}
                    >
                        <Select
                            placeholder="Selecciona un rol"
                            allowClear
                        >
                            

                        </Select>
                    </Form.Item>
                </Col>

                <Col md={10}>
                    <Form.Item
                        name="fk_inventario"
                        label="seleccione fundo"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingrese el fundo' }]}
                    >
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Seleccione un inventario"
                            optionLabelProp="label"
                        >
                          

                        </Select>


                    </Form.Item>
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