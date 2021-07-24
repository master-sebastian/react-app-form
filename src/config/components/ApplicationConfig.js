export const CONFIG_DATA = [
    {
        _id: 1 ,
        text:"Delivery", 
        flow: [
            {
                _id: 1, 
                text: "Completo", 
                autoResponse: null
            },{
                _id: 2,
                text: "Responde y atiende",
                autoResponse: [
                    { 
                        _id: 1,
                        text: "Deshabilitado",
                    },
                    { 
                        _id: 2,
                        text: "Pedir datos y derivar",
                    },
                    { 
                        _id: 3,
                        text: "Manejo automático",
                    },
                ]
            },{
                _id: 3, 
                text: "Atiende", 
                autoResponse: null
            }
        ]
    },{
        _id: 2, 
        text: "Social Listening", 
        flow: [ 
            {
                _id: 1, 
                text: "Clasifica y responde", 
                autoResponse: [
                    {
                        _id: 1 ,
                        text: "Deshabilitado", 
                    },{
                        _id: 2,
                        text: "Pedir datos y derivar", 
                    },{
                        _id: 3,
                        text: "Manejo automático", 
                    }
                ]
            },
            {
                _id: 2, 
                text: "Responde", 
                autoResponse: [
                    {
                        _id: 1 ,
                        text: "Deshabilitado", 
                    },{
                        _id: 2,
                        text: "Clasificación automática", 
                    }
                ]
            }
        ]
    },{
        _id: 3, 
        text: "Mensajería",
        flow: [ 
            {
                _id: 1, 
                text: "Clasifica y responde", 
                autoResponse: [
                    {
                        _id: 1 ,
                        text: "Deshabilitado", 
                    },{
                        _id: 2,
                        text: "Pedir datos y derivar", 
                    },{
                        _id: 3,
                        text: "Manejo automático", 
                    }
                ]
            },
            {
                _id: 2, 
                text: "Responde", 
                autoResponse: [
                    {
                        _id: 1 ,
                        text: "Deshabilitado", 
                    },{
                        _id: 2,
                        text: "Clasificación automática", 
                    }
                ]
            }
        ]
    }
];