import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Col, Button, Select } from 'antd'
import { DatePicker, Space } from 'antd';

//Api
import { ListarMaquinas } from '../../services/maquinas/MaquinasApi';
import { AgregarControlHoras } from '../../services/controlHoras/ControlHorasApi';

export default function NuevoUsuario() {

    const { Option } = Select;
    const [form] = Form.useForm();

    //Maquinas
    const [maquinas, setMaquinas] = useState([]);



    const agregarControlHoras = async (value) => {        

        const { success } = await AgregarControlHoras(value,1);
        if (success) {
            console.log("Acceso usuario insertardo");
        }
    }

    const [fecha,setFecha]=useState();        


    useEffect(() => {
        ListarMaquinas()
            .then(data => setMaquinas(data))
    }, []);



    return (
        <Form onFinish={agregarControlHoras} form={form} layout="vertical" >
            <Row justify="space-around">
                <Col md={10}>
                    <Form.Item
                        name="idMaquinaFK"
                        label="seleccione una maquina"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingrese el rol' }]}
                    >
                        <Select
                            placeholder="Selecciona un rol"
                            allowClear
                        >

                            {maquinas.map((item) => (
                                <Option key={item.idMaquina} value={item.idMaquina}>{item.maqNombre}</Option>
                            ))}


                        </Select>
                    </Form.Item>

                </Col>
                <Col md={10}>
                    <Form.Item
                        name="chCantidadHoras"
                        label="Cantidad horas"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingrese el fundo' }]}
                    >
                        <Input />

                    </Form.Item>
                </Col>
            
                <Col md={22}>
                    <Form.Item
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Button type="primary" htmlType="submit">
                            Registrar
                         </Button>
                    </Form.Item>
                </Col>

            </Row>

        </Form>
    );
}