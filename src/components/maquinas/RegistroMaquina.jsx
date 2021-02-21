import React,{Fragment} from 'react';
import { Space, Popconfirm, Table, Empty, Modal, Input, notification } from 'antd';
import { FormOutlined, DeleteOutlined, LockOutlined } from '@ant-design/icons'

const RegistroMaquina = ({ listaMaquinas}) => {

    const data =[];

    listaMaquinas.map((item,index)=>{
        data.push({
            orden: index +1,
            idMaquina: item.idMaquina,
            maqNombre: item.maqNombre
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
            title: 'maqNombre',
            dataIndex: 'maqNombre',
            key: 'maqNombre',
            render: (orden) => <p>{orden}</p>
        },
        {
            title: 'Acciones',
            dataIndex: 'idMaquina',
            key: 'idMaquina',
            render: (idMaquina) => (
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

    return(
        <Fragment>
            {
                data.length > 0 ?
                    <Table size="small" bordered columns={columns} rowKey={"idUsuario"} dataSource={data} pagination={{ pageSize: 5 }} />
                    : <Empty description={"No hay usuarios registradas hasta el momento."} style={{ padding: '4em' }} />
            }
        </Fragment>        
    )
}

export default RegistroMaquina;