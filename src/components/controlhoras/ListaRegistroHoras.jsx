import React, { useState } from 'react'
import { Space, Popconfirm, Table, Empty, Modal, Input, notification } from 'antd';
import { FormOutlined, DeleteOutlined, LockOutlined } from '@ant-design/icons'

const ListaRegisHoras = ({ controlHoras }) => {

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [user, setUser] = useState({
        id: 0,
        password: ''
    })
    const data = [];

    controlHoras.map((item, index) =>
        data.push({
            orden: index + 1,
            idControlHora: item.idControlHora, 
            idUsuarioFK: item.idUsuarioFK,
            chFecha: item.chFecha,
            idMaquinaFK: item.idMaquinaFK, 
            chCantidadHoras: item.chCantidadHoras, 
            maqNombre: item.maqNombre, 
            total: item.total, 
            Domingo: item.Domingo, 
            Lunes: item.Lunes, 
            Martes: item.Martes, 
            Miercoles: item.Miercoles, 
            Jueves: item.Jueves, 
            Viernes: item.Viernes, 
            Sabado: item.Sabado                      
        })
    );

    const columns = [
        {
            title: 'Orden',
            dataIndex: 'orden',
            key: 'orden',
            render: (orden) => <p>{orden}</p>,
        },
        {
            title: 'Maquina',
            dataIndex: 'maqNombre',
            key: 'maqNombre',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Total Horas',
            dataIndex: 'total',
            key: 'total',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Domingo',
            dataIndex: 'Domingo',
            key: 'Domingo',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Lunes',
            dataIndex: 'Lunes',
            key: 'Lunes',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Martes',
            dataIndex: 'Martes',
            key: 'Martes',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Miercoles',
            dataIndex: 'Miercoles',
            key: 'Miercoles',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Jueves',
            dataIndex: 'Jueves',
            key: 'Jueves',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Viernes',
            dataIndex: 'Viernes',
            key: 'Viernes',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Sabado',
            dataIndex: 'Sabado',
            key: 'Sabado',
            render: text => <p>{text}</p>,
        },
        
    ];

    //
    const showModal = (idUsuario) => {
        setVisible(true);
        setUser({
            id: idUsuario
        })
    };
    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Cambio de contraseña exitoso!',
            description:
                'Su contraseña ha sido cambiada.',
            placement: 'bottomLeft'
        });
    };
    //show modal
    const handleOk = async () => {
        setConfirmLoading(true);                      

    };

    //hide modal
    const handleCancel = () => {
        setConfirmLoading(false);
        setVisible(false);
        setUser({
            id: 0,
            password: ''
        })
    };

   

    return (
        <>
            {data.length > 0 ?
                <Table size="small" bordered columns={columns} rowKey={"idUsuario"} dataSource={data} pagination={{ pageSize: 5 }} />
                : <Empty description={"No hay usuarios registradas hasta el momento."} style={{ padding: '4em' }} />
            }
            <Modal
                title="Cambiando la contraseña "
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >

                <label>Ingresa la nueva contraseña:</label>
                <Input.Password name="password"  value={user.password} placeholder="nueva contraseña" />

            </Modal>
        </>
    )
}

export default ListaRegisHoras