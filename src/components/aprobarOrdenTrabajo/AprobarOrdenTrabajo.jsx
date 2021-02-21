import React, { useState } from 'react'
import { Space, Tabs, Table, Empty, Modal, Input, Row, Card, Col } from 'antd';
import { Checkbox } from 'antd';
import { Fragment } from 'react';


const AprobarOrdentrabajo = ({ listaOrdenTrabajo }) => {

    const { TabPane } = Tabs;

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);


    const [user, setUser] = useState({
        id: 0,
        password: ''
    })
    const data = [];
    listaOrdenTrabajo.map((item, index) => {
        data.push({
            orden: index+1,
            idMaquinaFK: item.idMaquinaFK,
            maqNombre: item.maqNombre, 
            idSistemaFK: item.idSistemaFK,
            sisNombre: item.sisNombre, 
            idComponenteFK: item.idComponenteFK, 
            comNombre: item.comNombre, 
            mpTarea: item.mpTarea
        })
    })

    const columns = [
        {
            title: 'Orden',//rcavezas@beginTransaction.com.pe
            dataIndex: 'orden',
            key: 'orden',
            render: (orden) => <p>{orden}</p>,
        },

        {
            title: 'Sistema',//rcavezas@beginTransaction.com.pe
            dataIndex: 'sisNombre',
            key: 'sisNombre',
            render: (sisNombre => <p>{sisNombre}</p>),
        },


        {
            title: 'Componente',//rcavezas@beginTransaction.com.pe
            dataIndex: 'comNombre',
            key: 'comNombre',
            render: (comNombre => <p>{comNombre}</p>),
        },

        {
            title: 'Tarea',//rcavezas@beginTransaction.com.pe
            dataIndex: 'mpTarea',
            key: 'mpTarea',
            render: (comNombre => <p>{comNombre}</p>),
        },

        {
            title: 'Ejecutado',//rcavezas@beginTransaction.com.pe
            dataIndex: 'ejecutado',
            key: 'ejecutado',
            render: ()=>{
                return(
                    <Checkbox>La taerea fue finalizado.?</Checkbox>
                )
            } 
        },

        {
            title: 'Observacion',//rcavezas@beginTransaction.com.pe
            dataIndex: 'observacion',
            key: 'observacion',
            render: ()=>{
                return(
                    <Input/>
                )
            }                  
        },
    ];



    return (
        <Fragment>

            {data.length > 0 ?
                <Table size="small" bordered columns={columns} rowKey={"idUsuario"} dataSource={data} pagination={{ pageSize: 5 }} />
                : <Empty description={"No hay usuarios registradas hasta el momento."} style={{ padding: '4em' }} />
            }
            <Modal
                title="Cambiando la contraseña "
            >

                <label>Ingresa la nueva contraseña:</label>
                <Input.Password name="password" value={user.password} placeholder="nueva contraseña" />

            </Modal>
        </Fragment>
    )
}

export default AprobarOrdentrabajo