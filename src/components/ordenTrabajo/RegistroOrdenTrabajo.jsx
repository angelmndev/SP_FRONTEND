import React, { useState } from 'react'
import { Table, Empty } from 'antd';
import { Fragment } from 'react';


const RegistroOrdenTrabajo = ({ listMantPreventivo }) => {

    const data = [];
    listMantPreventivo.map((item, index) => {
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
    ];



    return (
        <Fragment>

            {data.length > 0 ?
                <Table size="small" bordered columns={columns} rowKey={"idUsuario"} dataSource={data} pagination={{ pageSize: 5 }} />
                : <Empty description={"No hay registro de orden de trabajo hasta el momento."} style={{ padding: '4em' }} />
            }          
        </Fragment>
    )
}

export default RegistroOrdenTrabajo