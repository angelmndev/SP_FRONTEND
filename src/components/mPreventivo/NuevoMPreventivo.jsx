import React from 'react';
import { Form, Input, Row, Col, Button, Select } from 'antd'
import { AutoComplete } from 'antd';
import { AgregarMantPreventivo} from '../../services/mantenimientoPreventivo/MPreventivoApi';


export default function NuevoMPreventivo({ componentes ,maquinas, sistemas, tipoMantenimiento}) {
    const { Option } = Select;
    const [form] = Form.useForm();
  
    const options = [
        {
            value: 'Burns Bay Road',
        },
        {
            value: 'Downing Street',
        },
        {
            value: 'Wall Street',
        },
    ];

    

    const registrarMPreventivo = async (value) => {
        const response = await AgregarMantPreventivo(value,1);
        if(response){
            console.log("Exelente");
        }else{
            console.log("no se pudo");
        }
    }

    return (
        <Form onFinish={registrarMPreventivo} form={form} layout="vertical" >
            <Row justify="space-around">
                <Col md={10}>
                    <Form.Item
                        name="idMaquinaFK"
                        label="seleccione una maquina"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingrese una maquina' }]}
                    >
                        <Select                           
                            placeholder="Seleccione una maquina"  
                            allowClear                   
                        >
                            {maquinas.map((item)=>(
                                <Option key={item.idMaquina} value={item.idMaquina}>{item.maqNombre}</Option>
                            ))}
                            
                        </Select>


                    </Form.Item>
                </Col>

                <Col md={10}>
                    <Form.Item
                        name="idSistemaFK"
                        label="seleccione un sistema"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingrese el sistema' }]}
                    >
                        <Select
                            placeholder="Seleccione un sistema"  
                            allowClear                          
                        >
                            {sistemas.map((item)=>(
                                <Option key={item.idSistema} value={item.idSistema} >{item.sisNombre}</Option>
                            ))}

                        </Select>
                    </Form.Item>
                </Col>

                <Col md={10}>
                    <Form.Item
                        name="idComponenteFK"
                        label="seleccione componente"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingrese el componente' }]}
                    >
                        <Select
                            placeholder="Seleccione un componente"
                            allowClear
                        >
                            {componentes.map((item)=>(
                                <Option key={item.idComponente} value={item.idComponente}>{item.comNombre}</Option>
                            ))}

                        </Select>
                    </Form.Item>
                </Col>
                <Col md={10}>
                    <Form.Item
                        name="idTipoMantenimientoFK"
                        label="seleccione un tipo de mantenimiento"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'ingrese el componente' }]}
                    >
                        <Select
                            placeholder="Seleccione un componente"
                        >
                            {tipoMantenimiento.map((item)=>(
                                <Option key={item.idTipoMantenimiento} value={item.idTipoMantenimiento} >{item.tmNombre}</Option>
                            ))}

                        </Select>
                    </Form.Item>
                </Col>
                <Col md={10}>
                    <Form.Item
                        name="mpTarea"
                        label="Tarea"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'Ingresa una tarea especifica' }]}
                    >
                        <AutoComplete
                            
                            options={options}
                            placeholder="Ingresa una tarea en especifico"
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Form.Item>
                </Col>

                <Col md={10}>
                    <Form.Item
                        name="mpFrecuenciaHoras"
                        label="Frecuencia Horas"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'Ingrese la frecuencia de horas' }]}
                    >
                    <Input placeholder="Ingrese frecuencia de horas"/>
                    </Form.Item>
                </Col>                       

                <Col md={10}>
                    <Form.Item
                        name="mpRiesgoIdentificado"
                        label="Riesgo Identificado"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'Ingrese el riesgo' }]}
                    >
                        <AutoComplete

                            
                            placeholder="Riesgo identificado"
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Form.Item>
                </Col>

                <Col md={10}>
                    <Form.Item
                        name="mpNivelRiesgo"
                        label="Nivel de riesgo"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[{ required: true, message: 'Ingrese el riesgo' }]}
                    >
                        <AutoComplete
                            placeholder="Nivel de riesgo"
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Form.Item>
                </Col>


                <Col md={22}>
                    <Form.Item
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Button type="primary" style={{ border:"#00DE6F" ,color: "white", background:"#00DE6F",width:"10%"}} htmlType="submit">
                            <p style={{fontWeight:"bold"}}>Registrar</p> 
                         </Button>
                    </Form.Item>
                </Col>

            </Row>

        </Form>
    );
}