import { notification } from 'antd'

export const openNotificationSuccess = (type = "success", placement = 'bottomLeft') => {
    notification[type]({
        message: 'Registro de horas registrados con exito!',
        description:
            'Registro de horas ha sido registrada en la base de datos.',
        placement,
    });
};



export const openNotificationDelete = (placement = 'bottomLeft') => {
    notification.open({
        message: 'Registro de horas ha sido eliminada',
        placement
    });
};


export const openNotificationUpdate = (type = "success", placement = 'bottomLeft') => {
    notification[type]({
        message: 'Usuario establecida actualizada con exito!',
        description:
            'El usuario ha sido actualizada en la base de datos.',
        placement,
    });
};
