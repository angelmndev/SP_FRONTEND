import React, { useState } from 'react'
import { Space, Popconfirm, Tabs, Table, Empty, Input } from 'antd';
import { Fragment } from 'react';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

//Api
import { AgregarEjecutadoObservacionApi } from '../../services/ordenTrabajoDetalle/OrdenTrabajoDetalleApi';

const AprobarOrdentrabajo = ({ listaOrdenTrabajo, ListarOrdenTrabajo }) => {

    const { TabPane } = Tabs;

    const [observacion, setObservacion] = useState([]);


    const handleChangeComentario = (idOrdenTrabjoDetalle, e) => {
        setObservacion([{
            otdObservacion: e.target.value,
            idOrdenTrabjoDetalle: idOrdenTrabjoDetalle
        }])
    }

    const GuardarDatosOK = async (id) => {
        const data = { otdEjecutado: "1", otdObservacion: "", idOrdenTrabjoDetalle: id }
        const response = await AgregarEjecutadoObservacionApi(data);
        if (response) {
            ListarOrdenTrabajo();
            console.log("exelente")
        }

    }

    const GuardarDatosFAIL = async (id) => {   
        console.log(observacion);
        
        if(observacion.length > 0){
            const { idOrdenTrabjoDetalle,otdObservacion } = observacion[0];
            if(id === idOrdenTrabjoDetalle){
                if(otdObservacion!=''){
                    const data = { otdEjecutado: "0", otdObservacion: otdObservacion, idOrdenTrabjoDetalle: idOrdenTrabjoDetalle }
                    const response = await AgregarEjecutadoObservacionApi(data);
                    if (response) {
                        ListarOrdenTrabajo();
                        console.log("exelente")
                    }
                }
            }
        }else{
            console.log("Por favor agrege un comentario")
        }
    }

    console.log(observacion);
    console.log(listaOrdenTrabajo);
    const data = [];
    listaOrdenTrabajo.map((item, index) => {
        data.push({
            orden: index + 1,
            idOrdenTrabjoDetalle: item.idOrdenTrabjoDetalle,
            idMaquinaFK: item.idMaquinaFK,
            maqNombre: item.maqNombre,
            idSistemaFK: item.idSistemaFK,
            sisNombre: item.sisNombre,
            idComponenteFK: item.idComponenteFK,
            comNombre: item.comNombre,
            mpTarea: item.otdTareas
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
            title: 'Observacion',//rcavezas@beginTransaction.com.pe
            dataIndex: 'idOrdenTrabjoDetalle',
            key: 'idOrdenTrabjoDetalle',
            render: (idOrdenTrabjoDetalle) => {
                return (
                    <Input onChange={(e) => handleChangeComentario(idOrdenTrabjoDetalle, e)} />
                )
            }
        },
        {
            title: 'Acciones',
            dataIndex: 'idOrdenTrabjoDetalle',
            key: 'idOrdenTrabjoDetalle',
            render: (idOrdenTrabjoDetalle) => (
                <Space size="middle" >
                    <Popconfirm title="¿Realizó el trabajo de forma eficiente?"
                        okText="Si"
                        cancelText="No"
                        onConfirm={() => GuardarDatosOK(idOrdenTrabjoDetalle)}
                    >
                        <span style={{ width: '10px', marginLeft: '15px', color: 'green', fontSize: '15px' }} ><CheckOutlined /></span>
                    </Popconfirm>

                    <Popconfirm title="¿Estas seguro que no realizó el trabajo?"
                        okText="Si"
                        cancelText="No"
                        onConfirm={() => GuardarDatosFAIL(idOrdenTrabjoDetalle)}>
                        <span style={{ width: '10px', fontSize: '15px', color: 'red' }} > <CloseOutlined /></span>
                    </Popconfirm>
                </Space>
            ),
        }
    ];



    return (
        <Fragment>

            {data.length > 0 ?                
                    <Table size="small" bordered columns={columns} rowKey={"idOrdenTrabjoDetalle"} dataSource={data} pagination={{ pageSize: 5 }} />                                

                : <Empty description={"No hay registros de este numero de orden hasta el momento."} style={{ padding: '4em' }} />
            }
        </Fragment>
    )
}

export default AprobarOrdentrabajo