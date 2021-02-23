import React,{useEffect, useState} from 'react';
import { Select, Card, Spin } from 'antd';

import RegistroOrdenTrabajo from '../ordenTrabajo/RegistroOrdenTrabajo';
import { Fragment } from 'react';

const FiltroOrdenTrabajo = ({ listMantPreventivo}) => {
    const { Option } = Select;
    const [loading, setLoading] = useState(false)

    return(
        <Fragment>           
            <Card style={{ marginTop: '1em' }}>
                {/* mis productos estaran listados aqui dentro de este componente */}

                {
                    loading ?
                        <Spin size="small" tip="Cargando materiales.." />
                        : <RegistroOrdenTrabajo listMantPreventivo={listMantPreventivo} />
                }
            </Card>
        </Fragment>
    )
}

export default FiltroOrdenTrabajo;