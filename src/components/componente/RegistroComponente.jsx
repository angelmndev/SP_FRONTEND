import React, { useState } from 'react'
import { Space, Popconfirm, Table, Empty, Modal, Input, notification } from 'antd';
import { FormOutlined, DeleteOutlined, LockOutlined } from '@ant-design/icons'

const ListaRegisHoras = ({ listaComponente }) => {

    const [visible, setVisible] = useState(false);

    const [confirmLoading, setConfirmLoading] = useState(false);
    const [user, setUser] = useState({
        id: 0,
        password: ''
    })

    const data = [];
    listaComponente.map((item,index)=>{
        data.push({
            orden: index + 1,
            comNombre:item.comNombre        
        })
    })
   
    const columns = [
        {
            title: 'Orden',
            dataIndex: 'orden',
            key: 'orden',
            render: (orden) => <p>{orden}</p>,
        },
        {
            title: 'comNombre',
            dataIndex: 'comNombre',
            key: 'comNombre',
            render: (orden)=><p>{orden}</p>
        },
        {
            title: 'Acciones',
            dataIndex: 'idUsuario',
            key: 'idUsuario',
            render: (idUsuario) => (
                <Space size="middle">
                    <Popconfirm title="¿Deseas modificar el comoponente?"
                        okText="Si"
                        
                        cancelText="No">
                        <FormOutlined />
                    </Popconfirm>

                    <Popconfirm
                        
                        title="¿Deseas eliminar el componente?" okText="Si" cancelText="No">
                        <DeleteOutlined />
                    </Popconfirm>
                </Space>
            ),
        }
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