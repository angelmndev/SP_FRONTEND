import React, { useState } from 'react'
import { Table, Empty } from 'antd';


const ListaMPreventivo = ({ mantPreventivo }) => {

    const data = [];

    mantPreventivo.map((item, index) =>
        data.push({
            orden: index+1,
            idMantenimientoPreventivo: item.idMantenimientoPreventivo,
            maqNombre: item.maqNombre, 
            sisNombre: item.sisNombre, 
            comNombre: item.comNombre, 
            mpTarea: item.mpTarea, 
            tmNombre: item.tmNombre, 
            mpFrecuenciaHoras: item.mpFrecuenciaHoras, 
            mpHorasAcumuladas: item.mpHorasAcumuladas, 
            mpStatus: item.mpStatus, 
            mpfecha: item.mpfecha, 
            mpRiesgoIdentificado: item.mpRiesgoIdentificado
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
            render: (orden) => <p>{orden}</p>,
        },
        {
            title: 'Sistema',
            dataIndex: 'sisNombre',
            key: 'sisNombre',
            render: (orden) => <p>{orden}</p>,
        },
        {
            title: 'Componente',
            dataIndex: 'comNombre',
            key: 'comNombre',
            render: (orden) => <p>{orden}</p>,
        },
        {
            title: 'Tarea',
            dataIndex: 'mpTarea',
            key: 'mpTarea',
            render: (orden) => <p>{orden}</p>,
        },
        {
            title: 'Tipo mantenimiento',
            dataIndex: 'tmNombre',
            key: 'tmNombre',
            render: (orden) => <p>{orden}</p>,
        },
        {
            title: 'Frecuencia horas',
            dataIndex: 'mpFrecuenciaHoras',
            key: 'mpFrecuenciaHoras',
            render: (orden) => <p>{orden}</p>,
        },
        {
            title: 'Horas acumuladas',
            dataIndex: 'mpHorasAcumuladas',
            key: 'mpHorasAcumuladas',
            render: (mpHorasAcumuladas,row) =>{
                let result = (100 * mpHorasAcumuladas) /row.mpFrecuenciaHoras;
                return {
                    props: {                        
                        style: { color: "white", background: result >= 80 ? "#ff7875" : (result >= 60 && result < 80 ? "#ff9c6e" :"#95de64")}                        
                    },
                    children: <div className="text-center">{mpHorasAcumuladas}</div>
                };
            }
        },
        {
            title: 'Status',
            dataIndex: 'mpStatus',
            key: 'mpStatus',
            render: (orden, row) => {
                let result = (100 * row.mpHorasAcumuladas) / row.mpFrecuenciaHoras;
                return {
                    props: {
                        style: { color: "white", background: result >= 80 ? "#ff7875" : (result >= 60 && result < 80 ? "#ff9c6e" : "#95de64") }
                    },
                    children: <div className="text-center">{orden}</div>
                };
            }
        },
        {
            title: 'Fecha',
            dataIndex: 'mpfecha',
            key: 'mpfecha',
            render: (orden, row) => {
                let result = (100 * row.mpHorasAcumuladas) / row.mpFrecuenciaHoras;
                return {
                    props: {
                        style: { color: "white", background: result >= 80 ? "#ff7875" : (result >= 60 && result < 80 ? "#ff9c6e" : "#95de64") }
                    },
                    children: <div className="text-center ">{orden}</div>
                };
            }
        },
        {
            title: 'Rieso identificado',
            dataIndex: 'mpRiesgoIdentificado',
            key: 'mpRiesgoIdentificado',
            render: (orden) => <p>{orden}</p>,
        },


    ];


    return (
        <>
            {data.length > 0 ?
                <Table size="small" bordered columns={columns} rowKey={"idUsuario"} dataSource={data} pagination={{ pageSize: 5 }} />
                : <Empty description={"No hay usuarios registradas hasta el momento."} style={{ padding: '4em' }} />
            }
        </>
    )
}

export default ListaMPreventivo