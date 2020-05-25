export const modules = [
    {
        "1": {
            "title": 'Inicio',
            "image": 'src',
            "color": '#83a7cd'
        },
        "2": {
            "title": 'Dashboard',
            "image": 'src',
            "color": '#cda283'
        },
        "3": {
            "title": 'Inventario',
            "image": 'src',
            "color": '#adcd83'
        },
        "4": {
            "title": 'Productos',
            "image": 'src',
            "color": '#cd83c0'
        },
        "5": {
            "title": 'Movimientos',
            "image": 'src',
            "color": '#cd83c0',
            "submodulos": [
                {
                    "title": "subir pedido"
                },
                {
                    "title": "generar inventario"
                },
                {
                    "title": "entrada por traslado"
                },
                {
                    "title": "salida por traslado"
                },
                {
                    "title": "rechazo de entrada por traslado"
                },
                {
                    "title": "entrada por rechazo de traslado"
                },
                {
                    "title": "salida por daño"
                },
                {
                    "title": "salida por vencimiento"
                },
                {
                    "title": "salida por consumo interno"
                },
                {
                    "title": "salida por obsequio"
                },
                {
                    "title": "entrada por ajuste de inventario"
                },
                {
                    "title": "salida por ajuste de inventario"
                }
            ]
        },
        "6": {
            "title": 'TPV - POS',
            "image": 'src',
            "color": '#cd83c0'
        }
    }
];

export const roles = {
    "vendedor": {
        "permissions": [
            "tpv",
            "inventario"
        ]
    },
    "cajero": {
        "permissions": [
            "tpv",
        ]
    }
};

export const user_info = {
    "basicInfo": {
        "name": "Carlos Arturo",
        "last-name": "Galvan Grajales",
        "username": "Carlos Arturo GG",
        "password": "12345",
        "email": "carlos13arturo09@gmail.com"
    },
    "adtionalInfo": {
        "id": "asdasdasd",
        "status": "avalible",
        "roll": "admin",
        "age": "23",
        "gender": "male",
        "phone-number": "3184475594",
        "address": "cra95#54-145",
        "created-at": "asdasd",
        "sessions": "1",
        "locations": [
            {
                "location": "xy",
                "roll": "vendedor"
            },
            {
                "location": "xz",
                "roll": "cajero"
            }
        ]
    }
};

export const inventary = [
    {
        "id": 1,
        "nombre": "dolex",
        "cantidad": 34,
        "descripcion": "Cada tableta recubierta contiene: 500 mg de acetaminofén.",
        "marca": "tableta",
        "precio unitario": 1200,
        "proveedor": "copi",
        "existencias minimas": 10,
    },
    {
        "id": 2,
        "nombre": "advil",
        "cantidad": 10,
        "descripcion": "Cada tableta recubierta contiene: 500 mg de acetaminofén.",
        "marca": "tableta",
        "precio unitario": 200,
        "proveedor": "copi",
        "existencias minimas": 10,
    },
    {
        "id": 3,
        "nombre": "acetaminofem",
        "cantidad": 20,
        "descripcion": "Cada tableta recubierta contiene: 500 mg de acetaminofén.",
        "marca": "tableta",
        "precio unitario": 800,
        "proveedor": "copi",
        "existencias minimas": 10,
    },
];

export const locations = [
    "primera",
    "segunda",
    "tercera"
];