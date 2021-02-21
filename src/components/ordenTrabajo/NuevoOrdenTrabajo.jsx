import React, { useEffect, useState } from 'react';
import { Form, Input, Row, Col, InputNumber, Button, Select } from 'antd'
import { DatePicker, Space, TimePicker } from 'antd';
import moment from 'moment';

import { ListarSede } from '../../services/sede/SedeApi';
import { ListarAreaCultivoApi } from '../../services/areaCultivo/AreaCultivoApi';
import { ListarUsuarioApi } from '../../services/usuario/UsuarioApi';
import { AgregarOrdenTrabajoApi } from '../../services/ordenTrabajo/OrdenTrabajoApi';
import { AgregarOrdenTrabajoDetalleApi } from '../../services/ordenTrabajoDetalle/OrdenTrabajoDetalleApi';


export default function NuevoOrdenTrabajo({ numeroOrden, listMantPreventivo}) {

    const [sedes, setSedes] = useState([]);

    const [areaCultivo, setAreaCultivo] = useState([]);

    const [usuarios, setUsuarios] = useState([]);

   

    useEffect(() => {    
        ListarSede().then(data => setSedes(data));
        ListarAreaCultivoApi().then(data => setAreaCultivo(data));
        ListarUsuarioApi().then(data => setUsuarios(data));        
    }, [])
    

    const { Option } = Select;

    console.log(listMantPreventivo);
    const GuardarOrdenTrabajo = async(value)=> {
        const data = await AgregarOrdenTrabajoApi(value, listMantPreventivo[0].idMaquinaFK,1);
       
        if(data){

            const dataOTD = await AgregarOrdenTrabajoDetalleApi(listMantPreventivo);

            if(dataOTD){
                console.log("Insertado Exitosamente");
            }            
        }
    }

    return (
        <Form onFinish={GuardarOrdenTrabajo} layout="vertical" >
            <Row justify="space-around">
                <Col md={10}>
                    <Form.Item
                        name="otNumeroOrden"
                        label="Numero orden"
                        initialValue={numeroOrden}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingrese numero de orden' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col md={10}>
                    <Form.Item
                        name="otFecha"
                        label="Fecha"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingresa la fecha' }]}
                    >           
                            <DatePicker />
 
                    </Form.Item>
                </Col>
                <Col md={10}>
                    <Form.Item
                        name="idSedeFK"
                        label="Sede"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingresa el sede' }]}
                    >
                        <Select
                            placeholder="Selecciona un sede"
                            allowClear
                        >
                            {sedes.map(item => (
                                <Option key={item.idSede} value={item.idSede} >{item.sedeNombre}</Option>
                            ))}

                        </Select>
                    </Form.Item>
                </Col>
                <Col md={10}>
                    <Form.Item
                        name="idAreaCultivoFK"
                        label="Area cultivo"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingresa el area cultivo' }]}
                    >
                        <Select
                            placeholder="Selecciona un area cultivo"
                            allowClear
                        >
                            {areaCultivo.map(item => (
                                <Option key={item.idAreaCultivo} value={item.idAreaCultivo} >{item.acNombre} </Option>
                            ))}

                        </Select>
                    </Form.Item>
                </Col>
             
                <Col md={10}>
                    <Form.Item
                        name="idUsuarioPersonalFK"
                        label="Selecciona personal especializado"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingrese personal especializado' }]}
                    >
                        <Select
                            placeholder="Selecciona el usuario"
                            allowClear
                        >
                            {usuarios.map(item => (
                                <Option key={item.idUsuario} value={item.idUsuaio} >{item.usuNombre + " " + item.usuApellido}</Option>
                            ))}

                        </Select>
                    </Form.Item>
                </Col>
                <Col md={10}>
                    <Form.Item
                        name="otTiempoEstimado"
                        label="Tiempo estimado"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingresa la fecha' }]}
                    >
                        <InputNumber min={1} max={24}/>

                    </Form.Item>
                </Col>

                <Col md={10}>
                    <Form.Item
                        name="otHoraInicio"
                        label="Hora inico"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingrese hora de inicio' }]}
                    >
                        <TimePicker style={{ alignItems: 'start' }} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                    </Form.Item>
                </Col>

                <Col md={10}>
                    <Form.Item
                        name="otHoraFin"
                        label="Hora fin"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingresa hora fin' }]}
                    >
                        <TimePicker style={{ alignItems: 'start' }} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
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