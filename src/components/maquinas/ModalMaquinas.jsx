import React, { useEffect, useState } from 'react'
import { Drawer, Button, Col, Row, Input, Select, InputNumber } from 'antd';


const ModalMaquinas = ({ visible, setVisible, idProducto, obtenerProductos }) => {

    return (
        <>
            <Drawer
                title="Editando producto"
                width={720}
                onClose={() => setVisible({ value: false })}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div style={{ textAlign: 'right' }} >
                        <Button 
                            style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button type="primary"
                           
                        >
                            Actualizar
                        </Button>
                    </div>
                }
            >

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12} >
                        <p>SKU</p>
                        <Input
                            name="skuProducto"
                        />
                    </Col>
                    <Col span={12} >
                        <p>Nombre del material</p>
                        <Input
                            name="nombreProducto"
                        />
                    </Col>
                </Row>

            </Drawer >
        </>
    );
}

export default ModalMaquinas
