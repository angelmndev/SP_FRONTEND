import React, { useState, useEffect } from 'react'
import { Descriptions, Row, Col } from 'antd'
import { Tag } from 'antd'
import { Divider, Tabs } from 'antd'

import NuevoUsuario from '../../components/usuario/NuevoUsuario';


const UsuarioContainer = () => {
    const { TabPane } = Tabs;

    const [usuarios, setUsuarios] = useState([]);

    const [visible, setVisible] = useState({ value: false })

    const [idUsuario, setIdUsuario] = useState(0);

    const setEditModalUsuario = (id) => {
        setVisible({
            value: true
        });

        setIdUsuario(id)
    };


    return (
        <>
            {/* component description */}
            <Descriptions title="Nuestros usuarios" >
                <Descriptions.Item >
                    Bienvenido a la sección usuarios.
            </Descriptions.Item>
                <Descriptions.Item >
                    <p style={{ marginRight: '1em' }}> Aqui podras hacer las siguientes operaciones:</p>
                    <br />
                    <Tag color="success">Crear usuarios</Tag>
                    <Tag color="processing">actualizar usuarios</Tag>
                    <Tag color="error">Eliminar usuarios</Tag>

                </Descriptions.Item>
            </Descriptions>
            <Divider />
            {/* component description */}
            <Row>
                <Col md={24}>
                    <Tabs type="card" defaultActiveKey="1">
                        <TabPane tab="usuarios registrados" key="1">
                            <h2>listar usuario</h2>
                        </TabPane>
                        <TabPane tab="Registrar usuario" key="2">
                            <NuevoUsuario />
                        </TabPane>

                    </Tabs>

                </Col>
            </Row>           
        </>
    )
}

export default UsuarioContainer