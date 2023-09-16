import { DesignDataInterface } from "@/types/design";

export const designData: DesignDataInterface = {
    "cocinas": {
        design_slug: "cocina",
        subcategories: [
            {
                subcategorie_slug: "cocinas",
                title: "Cocinas",
                subtitle: "Selecciona tu estilo de cocina a cotizar",
                images: [
                    {
                        link: "serie-nordica",
                        img_id: 1,
                        imgSrc: "/assets/img/cocinaPage/Strong-cocina-004.webp",
                        imgAlt: "Serie Nordica",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGd0FBQXdFQUFBQUFBQUFBQUFBQUFBQUFBd1VHQi8vRUFDQVFBQUVGQVFBQ0F3RUFBQUFBQUFBQUFBTUJBZ1FGQmdjSUV3QVJGQlgveEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBRS84UUFIeEVBQXdFQkFBQUhBQUFBQUFBQUFBQUFBUUlEQkFVUkVoTVVJU0lrLzlvQURBTUJBQUlSQXhFQVB3QTNGL0k3cE93NmwzdWoyL1lOVlg1Ym41QlJLR3J5ZGJTVkVtRytkb05UWHhuR25VK2MvUzlnWVZLQkJrc3BLZTFXbko3Q0dWSGZJclNkU3pXcDNOVFMxZlY5VnQ3c09vcFloM1dQU2RSZU1FOVo0UlQ0aGFFbW5OVENrUW52VmppZncwSU5mdjFsWVVhdVRBZkdYS1o3WGQxOG94YWFzRGRnaVhKRFI0MDk1elJCa2xYVzZaSmQrUlNwR2NraGtPSTB6WGljd3FSZ285cnZXMzZlQWh3MTN2RlpLUTRqREJmemw0SGlpZ0QrWkxHaXBiQ1lLTTBRMk1qUml6TENhZHNVRFJ4Z3JKSTBBaERWR0l2Y1RsNldFV3dZVEttNlU4K2dWcG8xaWxTakk3aThFV1FVSVNQVHRRb2ZoU1ZZK0FNSDdPTjBHaDFlb3RwY3UxTmVNemprNTdUemhoUkU5dG9vMWl4Y0lSV0VscW4yY0t5K1Z2L1onLz4KICAgICAgICA8L3N2Zz4KICAgIA=="
                    }, {
                        link: "serie-new-york",
                        img_id: 2,
                        imgSrc: "/assets/img/cocinaPage/Strong-cocina-001.webp",
                        imgAlt: "Serie New York",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFDQUlKLzhRQUlCQUFBZ01CQUFJQ0F3QUFBQUFBQUFBQUJBVUNBd1lCQndnVEZRQVJFdi9FQUJVQkFRRUFBQUFBQUFBQUFBQUFBQUFBQUFNRS84UUFIaEVBQWdJREFRQURBQUFBQUFBQUFBQUFBZ01CQkFVR0V4RVNGQ0gvMmdBTUF3RUFBaEVERVFBL0FNLy9BQnI2emRXNlhMM21LL2FyQ0FoNEhhT0hKbUI4ZmhLWTZRaEZ2MjQ1L0JpOVh6TENMbGtjOFhqVjYyQ3M2NmN1M0dud0dzRStibksxbTQ5RFRka3Z4K2c4OGU0aE91VGJxclAvQUZCS0xMbnBHRDBMU3dESFRNU3hOblpkZXJ1YUR4V25YL1gxU21OSyt5RlBJL3p6cmk1N04rd0xGWnUwcFhsM2NUQnk0Q3l4TktwemVNeHBtNUF1TlA2WTVGK0Z3MjVJaW11UTBXNXgwVjlmSlVMNGkwV1dWU1AvQUpDOFkrUDNicldlUkdtVFRsN1V6U1c2NGpReUgrTTJla0lQb2NYT0l4cGxXUFdYWXpuTTdzcXFZUTRSTHM0dzUrKzgvSU5zK2xxU2NlL1lrdHRLeW1Uc1VhNTROa0thaHRSeEpLV0t1UkN5cnNoWkhBdzBpRWltUEorWG9uck9TdWJZNjZqV3JKVVdZL0dWTGoxWnRLN0tIS3ZJWFlIbTJxWFZkaFhjVmtYT0FNUjluOUdJTC8vWicvPgogICAgICAgIDwvc3ZnPgogICAg"
                    }, {
                        link: "serie-premiun",
                        img_id: 3,
                        imgSrc: "/assets/img/cocinaPage/Strong-cocina-002.webp",
                        imgAlt: "Serie Premiun",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGd0FBQXdFQUFBQUFBQUFBQUFBQUFBQUFCZ2NJQ2YvRUFDRVFBQUVGQVFBQ0FnTUFBQUFBQUFBQUFBUUJBZ01GQmdjSUV4SVVFUlVqLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFRVC94QUFlRVFBREFBSUNBd0VBQUFBQUFBQUFBQUFCQWdNRUVSSVRBQ0V4VWYvYUFBd0RBUUFDRVFNUkFEOEFYMVZnak9yYXpRVWxkM3J5U3dZbEZ6bG1qdDhoemdJTUxBZnExdXE2aVU5dWdNMk5GSE5iV0RydUJiU2tjQklTNFlLRWdQMnNjWTZFWTREbS9ERFNkUDZCWDQzcy9YTjEwcWJCMytWSmg2RFJtVUxyaXBhWGhyMlc0cXJHOEJrbWpPcnJJY01LdkJOZjdKcEdITStrVEdyZnpaUGkvZVc4ZmhoWlFyWUV6dEoxZDdIUEliSXA1RWtmMnN1aVJ1S05RZ24xc1JFYkV4SmtiRXhFWkdqR0lqVXdvOGFNVm1NeFEyTzdvYXhLM1cydEk1eDkzRVdlOHFiMlNqRnZhMWs1VW84RWJpWGU1WWg0WW8vWTFpL0QrY2Z4Y3VoeHNIRnFsYjhMbHc4VDBzbktabVJvOVMwVk43SVhtVDhHL3U0a1JMNW1TdElZNXBqaWZWWUN5dXEwRGtldTBvVzBOTXhRZm9Ibi85az0nLz4KICAgICAgICA8L3N2Zz4KICAgIA=="
                    }, {
                        link: "serie-nova",
                        img_id: 4,
                        imgSrc: "/assets/img/cocinaPage/Strong-cocina-003.webp",
                        imgAlt: "Serie Nova",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGUUFCQVFBQUFBQUFBQUFBQUFBQUFBQUFDUWYveEFBZUVBQUNBd0VCQVFFQkFRQUFBQUFBQUFBREJBSUZCZ0VIQ0JNUkV2L0VBQlVCQVFFQUFBQUFBQUFBQUFBQUFBQUFBQU1FLzhRQUhCRUFBd0FEQVFFQkFBQUFBQUFBQUFBQUFRSURCQVVSRWdZVC85b0FEQU1CQUFJUkF4RUFQd0JMZktmc0R6L1JVbU91dm5UNWN4dk52bXNwV1Y0NzdZYXJPMXhBc1ZDUm84MGhGMGtMSFFXRFVXMStmb0hqVTlTeHd3NUJtei9HWEZvdnJ2Vy9uZlMwZU44ajlzMTNta2ZmODlxYTFKYWt5SGREckVZTmx2TzI0cTBtaE5SVEhuN1lzU3kvM1QzOWtxNFJjWEgxdXNJbUhPQlAvSC9yZm9kTXhXSTFtaUlvbmFlVUgyVHk0NjZua0kybHVzM09WbGFjaVN2bitNenRRbGFSWEIrU2ExNHc5ZnFyZ3VyQjU5Z3VmdjU5N0xlOCtuZ3pialZGRUhvQkxFUmFrNVVIT1dKRmtDU3NKUHJTRzZSL3BER0p4MGpFMllrTVVrUzhtU2NwU2JyWVBwOExBdEdhWFRPMkN4ck80WXFzNGo5YUZRcmpqbnh5Zk9Lckgyd2Jua3I4N1ZkMVhOamYwRzEycmVSWkVoSkdwa3JOVUlXYy9UaFc0ejBzNzFJVUloVUhvLy9aJy8+CiAgICAgICAgPC9zdmc+CiAgICA="
                    }, {
                        link: "serie-de-luxe",
                        img_id: 5,
                        imgSrc: "/assets/img/cocinaPage/Strong-cocina-000.webp",
                        imgAlt: "Serie de Luxe",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFDQVlILzhRQUlSQUFBUVFDQWdJREFBQUFBQUFBQUFBQUFnRURCQVVHQnhFU0NCTUFJVEgveEFBVkFRRUJBQUFBQUFBQUFBQUFBQUFBQUFBREJmL0VBQjhSQUFJQkJBSURBQUFBQUFBQUFBQUFBQUVSQWdNU0lURUFCQk1pUWYvYUFBd0RBUUFDRVFNUkFEOEFRdWRiazNaNDc2dDExaE9qZFdVVzNUMnpiVDhheWZGN1hGc3F5U1E3QXE2eGdvODJyWXhpeGlMQmxDNWF6Vk4rempXRmVhbTIwNHdoTHlUSDBmckxFNmpTK3BMT1hxREdkWVpuSXo3RFhiU25wNk91ckhhK2Exc3FGV0pFUDFSWWswSHZVd0RqZ1BOSWpSR1FkdnRlMTU0ZXo1YzNYTmdjcDVYaUt2Z0dSR0ljcVFTNUpndklpbkNpYlRScHh4d1RZRitpaS9NVXhYTjhxc3RzWVBqRTY1a1NhSk5xNCs2a0J4dU4xUTJjemJtdHFqNHNwSzZqS2JCMUE5L1JldlJSVnRWQllQWTlKM3lrWmVhbUlvZ0tDRk1Fak9XWk02eS9tM28weklDMVJ0bUdXWEs2VERDMkJqSlBQLy9aJy8+CiAgICAgICAgPC9zdmc+CiAgICA="
                    },
                ]
            }
        ],
        details: {
            "generic": [
                {
                    tableId: 1,
                    tableTitle: "Combinación de colores",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/combinacionDeColores/melamina.webp",
                            imgAlt: "Melamina",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/combinacionDeColores/laqueado.webp",
                            imgAlt: "Laqueado",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/combinacionDeColores/enchapadoMadera.webp",
                            imgAlt: "Enchapado en madera",
                            imgBlur: ""
                        },
                        {
                            img_id: 4,
                            imgSrc: "/assets/img/designSelectData/combinacionDeColores/perfectSens.webp",
                            imgAlt: "Perfect sense",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 2,
                    tableTitle: "Calidad de herrajes",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/calidadDeHerrajes/herrajesEstandar.webp",
                            imgAlt: "Herraje estandar",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/calidadDeHerrajes/herrajesMedium.webp",
                            imgAlt: "Herraje medium",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/calidadDeHerrajes/herrajesPremium.webp",
                            imgAlt: "Herraje premium",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 3,
                    tableTitle: "Incluir",
                    maxSelections: 9,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/incluir/cajoneraCocina.webp",
                            imgAlt: "Cajonera",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/incluir/tacho.webp",
                            imgAlt: "Tacho",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/incluir/carroEspeciero.webp",
                            imgAlt: "Carro especiero",
                            imgBlur: ""
                        },
                        {
                            img_id: 4,
                            imgSrc: "/assets/img/designSelectData/incluir/carroEsquinero.webp",
                            imgAlt: "Carro esquinero",
                            imgBlur: ""
                        },
                        {
                            img_id: 5,
                            imgSrc: "/assets/img/designSelectData/incluir/torreHeladera.webp",
                            imgAlt: "Torre de heladera",
                            imgBlur: ""
                        },
                        {
                            img_id: 6,
                            imgSrc: "/assets/img/designSelectData/incluir/torreHornoMasMicroondas.webp",
                            imgAlt: "Torre de horno + microondas",
                            imgBlur: ""
                        },
                        {
                            img_id: 7,
                            imgSrc: "/assets/img/designSelectData/incluir/mesadaMaderaMaciza.webp",
                            imgAlt: "Mesada de madera maciza",
                            imgBlur: ""
                        },
                        {
                            img_id: 8,
                            imgSrc: "/assets/img/designSelectData/incluir/luzLed.webp",
                            imgAlt: "Luces LED",
                            imgBlur: ""
                        },
                        {
                            img_id: 9,
                            imgSrc: "/assets/img/designSelectData/incluir/manijas.webp",
                            imgAlt: "Manijas",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 4,
                    tableTitle: "Puertas",
                    maxSelections: 2,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/puertas/cocina/combinacionesPuertasBatiente.webp",
                            imgAlt: "Puertas batiente",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/puertas/cocina/combinacionesPuertasConPiston.webp",
                            imgAlt: "Puertas con piston",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/isla/cocina/cocinaSinIsla.webp",
                            imgAlt: "Cocina sin isla",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 5,
                    tableTitle: "Con isla",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/isla/cocina/cocinaEnIsla.webp",
                            imgAlt: "Cocina con isla",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/isla/cocina/cocinaSinIsla.webp",
                            imgAlt: "Cocina sin isla",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 6,
                    tableTitle: "Distribución",
                    maxSelections: 1,
                    askMeasure: true,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/distribucion/cocina/cocinaEnL.webp",
                            imgAlt: "Cocina en L",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/distribucion/cocina/cocinaEnU.webp",
                            imgAlt: "Cocina en U",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/distribucion/cocina/cocinaEnG.webp",
                            imgAlt: "Cocina en G",
                            imgBlur: ""
                        },
                        {
                            img_id: 4,
                            imgSrc: "/assets/img/designSelectData/distribucion/cocina/cocinaLineal.webp",
                            imgAlt: "Cocina lineal",
                            imgBlur: ""
                        },
                        {
                            img_id: 5,
                            imgSrc: "/assets/img/designSelectData/distribucion/cocina/cocinaEnParalelo.webp",
                            imgAlt: "Cocina en paralelo",
                            imgBlur: ""
                        },
                    ],
                },
            ]
        },
        measures: {
            "cocina-en-l": {
                numValuesToComplete: 2,
                measure_slug: "cocina-en-l",
                leters: [
                    {
                        measure_id: 1,
                        title: "Medida A",
                        measure: 0
                    }, {
                        measure_id: 2,
                        title: "Medida B",
                        measure: 0
                    }, {
                        measure_id: 3,
                        title: "Altura",
                        measure: 0
                    }
                ]
            },
            "cocina-en-u": {
                numValuesToComplete: 3,
                measure_slug: "cocina-en-u",
                leters: [
                    {
                        measure_id: 1,
                        title: "Medida A",
                        measure: 0
                    },
                    {
                        measure_id: 2,
                        title: "Medida B",
                        measure: 0
                    },
                    {
                        measure_id: 3,
                        title: "Medida C",
                        measure: 0
                    }, {
                        measure_id: 4,
                        title: "Altura",
                        measure: 0
                    }
                ]
            },
            "cocina-en-g": {
                numValuesToComplete: 4,
                measure_slug: "cocina-en-g",
                leters: [
                    {
                        measure_id: 1,
                        title: "Medida A",
                        measure: 0
                    },
                    {
                        measure_id: 2,
                        title: "Medida B",
                        measure: 0
                    },
                    {
                        measure_id: 3,
                        title: "Medida C",
                        measure: 0
                    },
                    {
                        measure_id: 4,
                        title: "Medida D",
                        measure: 0
                    }, {
                        measure_id: 5,
                        title: "Altura",
                        measure: 0
                    }
                ]
            },
            "cocina-lineal": {
                numValuesToComplete: 1,
                measure_slug: "cocina-lineal",
                leters: [
                    {
                        measure_id: 1,
                        title: "Medida A",
                        measure: 0
                    }, {
                        measure_id: 2,
                        title: "Altura",
                        measure: 0
                    }
                ]
            },
            "cocina-en-paralelo": {
                numValuesToComplete: 2,
                measure_slug: "cocina-en-paralelo",
                leters: [
                    {
                        measure_id: 1,
                        title: "Medida A",
                        measure: 0
                    },
                    {
                        measure_id: 2,
                        title: "Medida B",
                        measure: 0
                    }, {
                        measure_id: 3,
                        title: "Altura",
                        measure: 0
                    }
                ]
            }
        }
    },
    "banio": {
        design_slug: "banio",
        subcategories: [
            {
                subcategorie_slug: "vanitory",
                title: "Vanitory",
                subtitle: "Selecciona tu vanitory a cotizar",
                images: [
                    {
                        link: "vanitory-new-york",
                        img_id: 1,
                        imgSrc: "/assets/img/banioPage/Strong-vanitory-001.webp",
                        imgAlt: "Vanitory New York",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFDUVlILzhRQUl4QUFBZ0lDQWdFRUF3QUFBQUFBQUFBQUF3UUNCUUVHQndnU0FBa1JGQk1WRnYvRUFCUUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBYi94QUFaRVFBREFRRUJBQUFBQUFBQUFBQUFBQUFDQXdRQkJSTC8yZ0FNQXdFQUFoRURFUUEvQUE4NmVkMXVXTkV0dHkxWE9wY1lXVHp5eWFtVTZ3ZDNyVzIyMWRUamZxd2h6cmhuQTBtMEJacUxheFp5VFhRR0xMRXp6dEJHWW1LYSsyMS91aDdKeWZjYWh3aS94Z3BWN1ZlNzMvTUFvek1OMTU2OUNObUZFZHl5TzAwKzNVWWgrcmdlMU1pYTVsOWRVVW9rS1ltSlo5WEErTWRCbHd2YjNVOVdxNTJ5R3VIYlFzaURJUnhCbUFBeWlaRmlaSkVUbjVaOHBmV2tMRTg0am1lSlpqSDRQanBMZTJ1NDl2ZGZRMnR2T3hDMWxPNWRvbUxrSzloWjFwOFUxbXZIOEZ5eUlsdmtNQU1GRkJVanhGUndsOFFESHhoNGx1eEQwT2RTeTNLRVdjc3RRT3hzRXBxSWpJd1Zwek1TREUxTFliUTAwdFhLUVlIcktEM2RFbVBCdDRYZWdEbmJ6NmViM0VxcWFQUVEzTFl1bGlrN1JpN1pxbUE2SXdXby9GTXpxUkkyZU5rQWN3eC8vOWs9Jy8+CiAgICAgICAgPC9zdmc+CiAgICA="
                    }, {
                        link: "vanitory-escandinavo",
                        img_id: 2,
                        imgSrc: "/assets/img/banioPage/Strong-vanitory-000.webp",
                        imgAlt: "Vanitory Escandinavo",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFDUVFLLzhRQUloQUFBZ0lEQUFJQkJRQUFBQUFBQUFBQUF3UUNCUUVHQndnU0V3a0tGQlVXLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUJRYi94QUFkRVFBREFRQUNBd0VBQUFBQUFBQUFBQUFCQWdNRUJSRUdFaE1WLzlvQURBTUJBQUlSQXhFQVB3Q254UStxVnlPeXBPSWM3M0MycnRYM0dpNUx6RFhTMm15Vy93Q2wxMmNkNzFUbmQrdyt6Q3psWFVsaWV1RkJWQktaOTBxbTFCTU40aFNXTVpZa1JBK2UrWjNFTnY3QWp6SFNkby9zTnQyRUd4dUtzYTBxVmJWS3lybzZ5RHpXRlR2WnlGK2NNTHJna3pRV2R5ckk5Z0wyWHJ3U0pLT0ZVNzdkVldsdGtDL0JZVkhOdVh1MXpQb011Vm1hemx1aUdSSmdab0VDVDhjaXdKUmdZWkJ5K1BHQ1Fuak1zWlU3N2QrK3ZOMzdQMTYrMis0dE5rdDFkQWNiVWV1SDJuU3BtVnVhSlpiQ1dERmtOTUFGOWd1QWpWV2dKV0FueXd3SDFpTEF5OWZKNlUyWjV6bm5ubFMwYytoK3JVMFdwV3pvZ21ocWtZcUZSalNwTlNTUXFRWHYzV29Iam5IZm5VMUcyeW15L0hVM3htV3p5eXdFNFNlaGQxZzk3bjYxWDVRSHg5VkJhbXArZ2gvLzJRPT0nLz4KICAgICAgICA8L3N2Zz4KICAgIA=="
                    }, {
                        link: "vanitory-nordico",
                        img_id: 3,
                        imgSrc: "/assets/img/banioPage/Strong-vanitory-002.webp",
                        imgAlt: "Vanitory Nordico",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGUUFCQVFBQUFBQUFBQUFBQUFBQUFBQUFDUXIveEFBZUVBQURBQU1CQUFNQkFBQUFBQUFBQUFBREJBVUJBZ1lIRXhRVkNQL0VBQlFCQVFBQUFBQUFBQUFBQUFBQUFBQUFBQWIveEFBZkVRQURBUUFDQVFVQUFBQUFBQUFBQUFBQkFnTUVCUklHRXhRVklpUC8yZ0FNQXdFQUFoRURFUUEvQUNtOFM5UGFEK0tqem5PcXhvWXl3ZDZGZG1nU294SVJ4VVhHNHpZcWxES2lUcFR1Q2duSEt6THpoYkpzN0xuM2FZV0RvdVVEcy9NWmtxazd6M3ZIbUhwbkszSUNwNnIvQURScUJjeVQ2MHVlWi9Nb3FnVm5qVjJyeVY2ZjEyOU4xMlUydENFYWxaVzIyMjFsdWkra2Qxd1lPWXY4aDAxS0hVWDIwejhxdTQ5MW10QUhXYkNDbk5aR2ViV1VFMnV1Mk5Pb280cm8wdUJuVU9EaEVUVnd2NDN1UCtsK1ArcGRQM1dzN3BMTnMwVFNtWjZOSDFVWXpxbFZOa3VzcFpBRWxka3BkOEVaYlZSQzAxdU1HV1RGK3N2OFJqbC9uNlhmUHgydkpqU2tXT2ZZVGIzV2VvUWh1MEJOcytoR1lwMEx1alFLK29CUnZvVTNBSHhyUENPM2s4VzNkU0dtWTBZUU00eTZwbWltWFhRMUYwNW5tQTVwMFNndUdFajBYOUIvLzlrPScvPgogICAgICAgIDwvc3ZnPgogICAg"
                    },
                ]
            }
        ],
        details: {
            "generic": [
                {
                    tableId: 1,
                    tableTitle: "Combinación de colores",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/combinacionDeColores/melamina.webp",
                            imgAlt: "Melamina",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/combinacionDeColores/laqueado.webp",
                            imgAlt: "Laqueado",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/combinacionDeColores/enchapadoMadera.webp",
                            imgAlt: "Enchapado en madera",
                            imgBlur: ""
                        },
                        {
                            img_id: 4,
                            imgSrc: "/assets/img/designSelectData/combinacionDeColores/perfectSens.webp",
                            imgAlt: "Perfect sense",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 2,
                    tableTitle: "Calidad de herrajes",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/calidadDeHerrajes/herrajesEstandar.webp",
                            imgAlt: "Herraje estandar",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/calidadDeHerrajes/herrajesPremium.webp",
                            imgAlt: "Herraje premium",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 3,
                    tableTitle: "Distribución",
                    maxSelections: 4,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/puertas/cocina/combinacionesPuertasBatiente.webp",
                            imgAlt: "Puertas batiente",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/incluir/cajoneraCocina.webp",
                            imgAlt: "Cajonera",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/incluir/estantes.webp",
                            imgAlt: "Estantes",
                            imgBlur: ""
                        },
                        {
                            img_id: 4,
                            imgSrc: "/assets/img/designSelectData/incluir/manijas.webp",
                            imgAlt: "Manijas",
                            imgBlur: ""
                        },
                    ],
                }
            ]
        }
    },
    "placares": {
        design_slug: "placares",
        subcategories: [
            {
                subcategorie_slug: "vestidores",
                title: "Vestidores",
                subtitle: "Selecciona tu vestidor a cotizar",
                images: [
                    {
                        link: "vestidor-de-luxe",
                        img_id: 1,
                        imgSrc: "/assets/img/placaresPage/Strong-categorieVestidor-000.webp",
                        imgAlt: "Vestidor de luxe",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGd0FBQXdFQUFBQUFBQUFBQUFBQUFBQUFBd1VIQ2YvRUFCOFFBQU1BQXdBQ0F3RUFBQUFBQUFBQUFBSURCQUVGQmdnUkJ3a1RFdi9FQUJRQkFRQUFBQUFBQUFBQUFBQUFBQUFBQUFmL3hBQWRFUUFDQWdJREFRQUFBQUFBQUFBQUFBQUJBZ01FQlJFR0VpRWkvOW9BREFNQkFBSVJBeEVBUHdEUEw2NExadWE0THNicU5oaG10Mi9UNE1xeGlvbjFPdllPazVYWnFUYnVTL3ZYQVZLU3N4TmlsMHJHRnJiQUFjbU9WNEw5eC9ieVNlV2k5OXBMZFBiSnEvSFdESTFLc1c1QjEwY1gyMGtvRzhETURuWnVHcmpheExSV2cvZjd1WDdJbE5mQnVkVTNpeHcwQ01NVEx2OEFvQnQzQ2x1Y09iNnJoMTJtcWE1bUdmcmpMTlVoTUdCV1lBdVpZclVJWTkrNC93RGJueWZPYUxUOGcvVWFpV0NqUHhsWUJVb3dlS21KWm15ak03cVNNbnVrQjV1ZWlSckRtbWRWYTJkU21XMWs0RGw1RFZPYmZBU1UzRDMrUVhTa3lsV1JZNEtWbUJsY0ZsYmJHWmRCUWZsZGx1dzB5eEZnN0M0bVBMTFpVclV3MVJIaUlaV0x6WEtVcXNoQ2tIcXNSQjdFZXQ0Q05hLy8yUT09Jy8+CiAgICAgICAgPC9zdmc+CiAgICA="
                    },
                    {
                        link: "vestidor-fusion",
                        img_id: 2,
                        imgSrc: "/assets/img/placaresPage/Strong-categorieVestidor-001.webp",
                        imgAlt: "Vestidor Fusion",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGUUFCQVFBQUFBQUFBQUFBQUFBQUFBQUFDUXIveEFBaEVBQUNBZ0lDQWdNQkFBQUFBQUFBQUFBREJBSUZBUVlIQ0JFU0NSTVVGZi9FQUJVQkFRRUFBQUFBQUFBQUFBQUFBQUFBQUFVRy84UUFIaEVCQUFNQUFnSURBQUFBQUFBQUFBQUFBUUlERVFRaEFCSVRRbkgvMmdBTUF3RUFBaEVERVFBL0FFaytYNVI3bE9yNEJ1OWdVMlBqRjVMa0RteHFkTnNCNmRiWWtxL1k5d0JzdElwWnhxOWlMcnY3ZjVLNmhwcHcybVE4WmtRS3paV0k1SEl4T0RrOVdGMmc0WHJSV1ZvKzVZY3Rucy9EcnVSNENSNjByNzZ4U2JxeXdOSVVsQ1VTbUZKaWNOQ0VaRWpNemN5K1ZrMitaRzJza2VLYWErVmRPTzJRdFgyRm1zeit6R0p6cHBSbkE2NWZkVnhZbUl4d1JOc0oxQ1lqSDNCTDFqNG5vNmdiSGVPOSsrdjBYTE5sdUpkOTMxYVVXcFJZeEZaYlI3ZDFWY1dDeG5nSUZHaGpLbUVQMWpVeU1jVm9paENNY1MvTXNqZHpJMllnMjBpZnNxb1BTeXpYRk5RNzZraDR0RGovQUF0dE1VOW9Gc295WDYxazU0OWR1Q0Q2bXViaDUvL1onLz4KICAgICAgICA8L3N2Zz4KICAgIA=="
                    }
                ]
            }, {
                subcategorie_slug: "placar",
                title: "Placares",
                subtitle: "Selecciona tu placar a cotizar",
                images: [
                    {
                        link: "Placard-urbanwood",
                        img_id: 1,
                        imgSrc: "/assets/img/placaresPage/Strong-categoriePlacar-000.webp",
                        imgAlt: "Placard Urbanwood",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFDQWtLLzhRQUlSQUFBZ0lEQUFNQUF3RUFBQUFBQUFBQUJBVURCZ0VDQnhFU0V3QUlGQlgveEFBVkFRRUJBQUFBQUFBQUFBQUFBQUFBQUFBQ0JmL0VBQ0VSQUFJREFBRURCUUFBQUFBQUFBQUFBQUVDQXdRUkVnQUZFeUVpTVRKQy85b0FEQU1CQUFJUkF4RUFQd0N0Rlk2NzJwc1dZSnozbW5VN2lqWE5Ta01Xd2QvNC9RcS9JT2paVEl5ekJTbW9HdHZrRTN5Q1NUckhLV1RNUjU4UjVpMG1qeEVsdVI0NkMrN3pWbnRvcmFPb0thWlU3cHQvbm1mc1JQMW01c25MdkNkWG5mV3A3UmJoVjVhdER6TGc4OEUzeE1Rd0VHSkgxeHFMdHRtT3ZiRnJZNzExc053NWRraHczVG93VVFrVHBxQ05HTUMvY0JoeGFqZ0dDeFkvbUdnaGpoMzlQcHA4OWQ4YisrUGI4V1ZZZHR1UjhQdlhXdWNIa1ZYcEN5dnBrQys0QmIvZHVHbHNUNnZ5dTFrRXArQzR0QkdNcTRDYWVMRVhqN0JDeXgra2tFZTJvazdwVHBQUEhKRlprU00yZkp4RmJDdGRTN2NBWTFmV0hvQVpSdjZiNTJvdmJyRnZ3c3NrU05JYTRYazAzMm5aRlhrUWNBQmIzWWpZTndIci85az0nLz4KICAgICAgICA8L3N2Zz4KICAgIA=="
                    }
                ]
            }
        ],
        details: {
            "generic": [
                {
                    tableId: 1,
                    tableTitle: "Combinación de colores",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/combinacionDeColores/melamina.webp",
                            imgAlt: "Melamina",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/combinacionDeColores/enchapadoMadera.webp",
                            imgAlt: "Enchapado en madera",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/combinacionDeColores/perfectSens.webp",
                            imgAlt: "Perfect sense",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 2,
                    tableTitle: "Calidad de herrajes",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/calidadDeHerrajes/herrajesEstandar.webp",
                            imgAlt: "Herraje estandar",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/calidadDeHerrajes/herrajesPremium.webp",
                            imgAlt: "Herraje premium",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 3,
                    tableTitle: "Incluir",
                    maxSelections: 4,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/incluir/pantalonero.webp",
                            imgAlt: "Pantalonero",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/incluir/zapatero.webp",
                            imgAlt: "Zapatero",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/incluir/luzLed.webp",
                            imgAlt: "Luces LED",
                            imgBlur: ""
                        },
                        {
                            img_id: 4,
                            imgSrc: "/assets/img/designSelectData/incluir/barralParaPerchas.webp",
                            imgAlt: "Barral para perchas",
                            imgBlur: ""
                        },
                        {
                            img_id: 5,
                            imgSrc: "/assets/img/designSelectData/incluir/cajoneraPlacar.webp",
                            imgAlt: "Cajonera",
                            imgBlur: ""
                        },
                        {
                            img_id: 6,
                            imgSrc: "/assets/img/designSelectData/incluir/estantes.webp",
                            imgAlt: "Estantes",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 4,
                    tableTitle: "Puertas",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/puertas/placares/puertaDeVidrio.webp",
                            imgAlt: "Puertas de vidrio",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/puertas/placares/puertasCorredizas.webp",
                            imgAlt: "Corredizas",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/puertas/placares/placarSinPuerta.webp",
                            imgAlt: "Sin puerta",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 5,
                    tableTitle: "Con isla",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/isla/placares/placarEnIsla.webp",
                            imgAlt: "Placar con isla",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/isla/placares/placarSinIsla.webp",
                            imgAlt: "Placar sin isla",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 6,
                    tableTitle: "Distribución",
                    maxSelections: 1,
                    askMeasure: true,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/distribucion/placares/placarEnL.webp",
                            imgAlt: "Placar en L",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/distribucion/placares/placarEnC.webp",
                            imgAlt: "Placar en C",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/distribucion/placares/placarEnG.webp",
                            imgAlt: "Placar en G",
                            imgBlur: ""
                        },
                        {
                            img_id: 4,
                            imgSrc: "/assets/img/designSelectData/distribucion/placares/placarLineal.webp",
                            imgAlt: "Placar lineal",
                            imgBlur: ""
                        },
                        {
                            img_id: 5,
                            imgSrc: "/assets/img/designSelectData/distribucion/placares/placarEnParalelo.webp",
                            imgAlt: "Placar en paralelo",
                            imgBlur: ""
                        },
                    ],
                }
            ]
        },
        measures: {
            "placar-en-l": {
                numValuesToComplete: 2,
                measure_slug: "placar-en-l",
                leters: [
                    {
                        measure_id: 1,
                        title: "Medida A",
                        measure: 0
                    },
                    {
                        measure_id: 2,
                        title: "Medida B",
                        measure: 0
                    }, {
                        measure_id: 3,
                        title: "Altura",
                        measure: 0
                    }
                ]
            },
            "placar-en-c": {
                numValuesToComplete: 3,
                measure_slug: "placar-en-c",
                leters: [
                    {
                        measure_id: 1,
                        title: "Medida A",
                        measure: 0
                    },
                    {
                        measure_id: 2,
                        title: "Medida B",
                        measure: 0
                    },
                    {
                        measure_id: 3,
                        title: "Medida C",
                        measure: 0
                    }, {
                        measure_id: 4,
                        title: "Altura",
                        measure: 0
                    }
                ]
            },
            "placar-en-g": {
                numValuesToComplete: 4,
                measure_slug: "placar-en-g",
                leters: [
                    {
                        measure_id: 1,
                        title: "Medida A",
                        measure: 0
                    },
                    {
                        measure_id: 2,
                        title: "Medida B",
                        measure: 0
                    },
                    {
                        measure_id: 3,
                        title: "Medida C",
                        measure: 0
                    },
                    {
                        measure_id: 4,
                        title: "Medida D",
                        measure: 0
                    }, {
                        measure_id: 5,
                        title: "Altura",
                        measure: 0
                    }
                ]
            },
            "placar-lineal": {
                numValuesToComplete: 1,
                measure_slug: "placar-lineal",
                leters: [
                    {
                        measure_id: 1,
                        title: "Medida A",
                        measure: 0
                    }, {
                        measure_id: 2,
                        title: "Altura",
                        measure: 0
                    }
                ]
            },
            "placar-en-paralelo": {
                numValuesToComplete: 2,
                measure_slug: "placar-en-paralelo",
                leters: [
                    {
                        measure_id: 1,
                        title: "Medida A",
                        measure: 0
                    },
                    {
                        measure_id: 2,
                        title: "Medida B",
                        measure: 0
                    }, {
                        measure_id: 3,
                        title: "Altura",
                        measure: 0
                    }
                ]
            }
        }
    },
    "dormitorio": {
        design_slug: "dormitorio",
        subcategories: [
            {
                subcategorie_slug: "cama",
                title: "Cama",
                subtitle: "Selecciona tu cama a cotizar",
                images: [
                    {
                        link: "individual",
                        img_id: 1,
                        imgSrc: "/assets/img/dormitorioPage/Strong-camaIndividual-000.webp",
                        imgAlt: "Individual",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFDUWNJLzhRQUl4QUFBZ0lDQVFRQ0F3QUFBQUFBQUFBQUF3UUNCUUVHRWdjSUVSTWhNUUFVWWYvRUFCVUJBUUVBQUFBQUFBQUFBQUFBQUFBQUFBVUcvOFFBSEJFQUF3RUJBQU1CQUFBQUFBQUFBQUFBQWdNRUFRVVJFaE1VLzlvQURBTUJBQUlSQXhFQVB3Qk11MkhYOU82Y21LaDFDNkI2MzFGWW5YT0RTc2R1SlgzV0duMnJRYkNraVF1S1N4RXZGR3ZYd0QyNUNYTEJuaUNqaFlJZVpvOXRQWmJ0bTFrdG1LVklaa0l5c0xBd0Zhbm1hclQ5aG1EZTRlSWtDTlZBWE1XU0RpR0loTGxuSlpZUXMrRmpxZGNvemNQYldyU3pDVWVPZkVveWo5ZlVveXhMSDkrZm44MmtYWUxjR2wwdXVydC9yMHA5ZHIxbVVGbDFWeE5CTlhCR2FEY3dnZ1p2M3d6bUpwTWtMSTJNNXdTVXZPZk0zTHdYOCs3S1llcFIrWjFYUnFzanZ3cmhNK2xTRlRSa2NUbE1rQlpBSzBMM1hKUW9BQmFjOHMralR1cW11VFVWUUorNjB4b21wa0xKU0FZMGFnTm9YaTJycEk4M1RhZmhUV3NNaU5tN2dlbi8yUT09Jy8+CiAgICAgICAgPC9zdmc+CiAgICA="
                    },
                    {
                        link: "matrimonial",
                        img_id: 2,
                        imgSrc: "/assets/img/dormitorioPage/Strong-camaMatrimonial-001.webp",
                        imgAlt: "Matrimonial",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFDUWNJLzhRQUloQUFBZ01CQUFFRUF3RUFBQUFBQUFBQUF3UUJBZ1VHQndnUkVoUUFJVEVWLzhRQUZBRUJBQUFBQUFBQUFBQUFBQUFBQUFBQUJ2L0VBQjhSQUFNQUFnSUNBd0FBQUFBQUFBQUFBQUlEQkFFRkVoTUFFUVlVSWYvYUFBd0RBUUFDRVFNUkFEOEFXUHdHaDRWNXpCZFg2NzBzY3gxM1NMa1VxcTMwNTB0NnJVTGhuN1QwVHE1TDlCVVlaTEVEUSttUzRnQXBhVG52ZTBVai9sUDAwYS9tbm9EVHhIai9BQStkQ3cvdU5wNFBKODlTeGFMYld3MW9yWm9VODFJQ0YxTVlKcTV1ZmNLQURWV0ZWY2tSQWhCcXBYalhtT2ZMM2ZHaU5rSkdDMTAyRUJwYzRvTXV3QTJrc0V3RHJsbTRTaE1HOXhHRVFkaGxGZTR5VnRTOW9uZWZhYnVuemhtY1BuVEE1L0pIYjQwUndrVU1jTmF6RnErMGY1eXkxL2I0eEZmM2IrZnIrVE1mZ2VYNGxicjdkU2NtOXBkQnFRb3loRzFBdGxXVExDWjlySjJkMDdtYzFzeUNqY1RTbkgydFk5V2VIaWQrL2xybHZDalZKWFhlU2V4c0I0alFJVDREb3dNL1c1WWNTRDJZckZlRy9oSG5uamw1LzlrPScvPgogICAgICAgIDwvc3ZnPgogICAg"
                    },
                ]
            }, {
                subcategorie_slug: "mesa-de-luz",
                title: "Mesa de Luz",
                subtitle: "Selecciona tu meda de luz a cotizar",
                images: [
                    {
                        link: "mesa-de-luz",
                        img_id: 1,
                        imgSrc: "/assets/img/dormitorioPage/Strong-mesadeluz-000.webp",
                        imgAlt: "Mesa de Luz",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGd0FBQXdFQUFBQUFBQUFBQUFBQUFBQUFCQWNJQ2YvRUFDSVFBQUlEQVFFQUFRUURBQUFBQUFBQUFBRURBZ1FGQmhFSEFCTVZJUWdTTWYvRUFCUUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBUC94QUFjRVFBREFBSURBUUFBQUFBQUFBQUFBQUFCQWdNUkVnUVRJaUgvMmdBTUF3RUFBaEVERVFBL0FMSzQvd0NJdERxOXpNNTVQTzdrOURYbllxNU9kbTFaN2V4cjZTYUZ1OVd5TXVuWjFPZnoyYUdnS2JLMVFYdFRQckZ6RnhuWUg5Z0pHZklmOE5PNnA2OWpDMWVkMCthc2lyV3N0eWVqb2MvK2VveHR3WXhLZE5YUGRSMm1LcXd5djlxMUdGYmR1U2pYc29MZ2h4WWxlc0hQWWVSRjlaZ3pxdjNFTlRZVE1yQmtwOWRzRzEzTGtmVEJpV3dnMVU0K1NneUVaeElsRUVORDhabnVhWnRwb2xPUjlsSXdBSkpJOUo4ODlKOUpKUDdKUHY4QXY3K2hNNm5rTFh2WVFXVEllTUp6MWVwWUVXYXBCcjVVYXJOQ3EraXpiSFVLb2VZaVU2bE5UUU1MbDMyVkFwSFdxQmhQREU3TXpCbStBTHFNNS8vWicvPgogICAgICAgIDwvc3ZnPgogICAg"
                    },
                ]
            }, {
                subcategorie_slug: "comoda",
                title: "Comoda",
                subtitle: "Selecciona tu comoda a cotizar",
                images: [
                    {
                        link: "comoda",
                        img_id: 1,
                        imgSrc: "/assets/img/dormitorioPage/Strong-comoda-001.webp",
                        imgAlt: "Comoda",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGd0FBQXdFQUFBQUFBQUFBQUFBQUFBQUFCUWNJQ2YvRUFDVVFBQUlEQUFJQUJRVUJBQUFBQUFBQUFBSURBUVFGQmhFQUJ4SVVJUWdpTVZGaGdmL0VBQlVCQVFFQUFBQUFBQUFBQUFBQUFBQUFBQVVHLzhRQUhCRUFBUVVCQVFFQUFBQUFBQUFBQUFBQUF3RUNCQVVSRXdZUy85b0FEQU1CQUFJUkF4RUFQd0MydkozeVhYc2MzNHhoODI0bm91NDlvMnJGYlN2enBXNnhJV05DM1lTNXowZTNFRnk5QzBTU3ZWUHJhRUVQcGtpRTc1eS9TbFYyOThLM0E4Sk9OZ3J6ZmFXUk1ydW9kcldyYVdsVHNXZ2ZxTmVhMTJxMWFwYVhYQ0pCSVdBQ0d2TVRlelQ3QXg4eEpySlZOSUZFVDFJeE1USFhmWFgzZkgrZUdQWHpxTENDVHJLT2U0K1NqdjhBTWorNS9zK0pPVlRXNWZYMTk4UDBVd0ZMQ3FUd1QrWEdKRWhUcHh5a2V5MGtINjZwQUNlMFFnOEZUV0lUcHVOUjZQT2dzb1pWWTZxQVN4bFRoU0JYTDM2ZUxHRXhqWFF4QzU1OGxlaXZlWHFpNHF0K0ZUVlgvOWs9Jy8+CiAgICAgICAgPC9zdmc+CiAgICA="
                    },
                ]
            }, {
                subcategorie_slug: "escritorio",
                title: "Escritorio",
                subtitle: "Selecciona tu escritorio a cotizar",
                images: [
                    {
                        link: "escritorio",
                        img_id: 1,
                        imgSrc: "/assets/img/dormitorioPage/Strong-escritorio-001.webp",
                        imgAlt: "Escritorio",
                        imgBlur: "data:image/svg+xml;base64,CiAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgaHJlZj0nZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwvOWovMndCREFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRSC8yd0JEQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFIL3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFDUU1HLzhRQUloQUFBUVVBQVFNRkFBQUFBQUFBQUFBQUFRSURCQVVHQ0FjU0lRQVJFeFF4LzhRQUZBRUJBQUFBQUFBQUFBQUFBQUFBQUFBQUEvL0VBQ0FSQVFBQ0FnRUVBd0FBQUFBQUFBQUFBQUVDRVFNU0JBQVRJVE14VVdILzJnQU1Bd0VBQWhFREVRQS9BRVh6M0UxVXZqSHQrUUVlSHBkcnA4cnY2bkRSdWxGUy9UNTkreWoyUzh1VjN3MTE3TkVTTkhpTTZOYjBoZzBqeXV5dWZRd3FTK3BMSXJGNGdaemNjY3RMcjdITldlUDZ3cTNkWFRVV1BmMGRkcG1LN0pGbDJSWTJjOXhtbmdHNGVmUTAyeTFQalI2MkZGWEkrc1lyNzBkVWgxUGM5R1lpMDY2Mk8yR2ErUTZtVS9DUVZDSzlKU2xDRXZ1TWQzeHJlU2h0Q1E0cEpVRW9Ta0VCSUExRmZXUUI3QVJXZ0NmSUFJQjhKUDRENk14UkpzN3lXcTA1c3pDMXYxczJBZmhHZzhCWFR2SXlPUHQ2NE5kU05uRzR4a284ZTB4ZDNiN2x2cy9LMzEvLzJRPT0nLz4KICAgICAgICA8L3N2Zz4KICAgIA=="
                    },
                ]
            }
        ],
        details: {
            "individual": [
                {
                    tableId: 1,
                    tableTitle: "Combinación de colores",
                    maxSelections: 2,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/detalle/camaIndividual1.webp",
                            imgAlt: "Blanco",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/detalle/camaIndividual2.webp",
                            imgAlt: "Con detalle",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 2,
                    tableTitle: "Medidas del colchon",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/medidas/colchon.webp",
                            imgAlt: "90cm x 1,90cm",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/medidas/colchon.webp",
                            imgAlt: "100cm x 200cm",
                            imgBlur: ""
                        },
                    ],
                }
            ],
            "matrimonial": [
                {
                    tableId: 1,
                    tableTitle: "Combinación de colores",
                    maxSelections: 2,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/detalle/camaMatrimonial1.webp",
                            imgAlt: "Blanco",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/detalle/camaMatrimonial2.webp",
                            imgAlt: "Con detalle",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 2,
                    tableTitle: "Medidas del colchon",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/medidas/colchon.webp",
                            imgAlt: "90cm x 190cm",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/medidas/colchon.webp",
                            imgAlt: "140cm x 190cm",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/medidas/colchon.webp",
                            imgAlt: "160cm x 190cm",
                            imgBlur: ""
                        },
                        {
                            img_id: 4,
                            imgSrc: "/assets/img/designSelectData/medidas/colchon.webp",
                            imgAlt: "180cm x 190cm",
                            imgBlur: ""
                        },
                        {
                            img_id: 5,
                            imgSrc: "/assets/img/designSelectData/medidas/colchon.webp",
                            imgAlt: "190cm x 200cm",
                            imgBlur: ""
                        },
                        {
                            img_id: 6,
                            imgSrc: "/assets/img/designSelectData/medidas/colchon.webp",
                            imgAlt: "200cm x 200cm",
                            imgBlur: ""
                        },
                    ],
                }
            ],
            "mesa-de-luz": [
                {
                    tableId: 1,
                    tableTitle: "Combinación de colores",
                    maxSelections: 2,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/detalle/mesa-de-luz-1.webp",
                            imgAlt: "Blanco",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/detalle/mesa-de-luz-2.webp",
                            imgAlt: "Con detalle",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 2,
                    tableTitle: "Medidas (ancho x largo x profundidad)",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/detalle/mesa-de-luz-1.webp",
                            imgAlt: "45cm x 60cm x 40cm",
                            imgBlur: ""
                        }
                    ],
                }
            ],
            "comoda": [
                {
                    tableId: 1,
                    tableTitle: "Combinación de colores",
                    maxSelections: 2,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/detalle/comoda-1.webp",
                            imgAlt: "Blanco",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/detalle/comoda-2.webp",
                            imgAlt: "Con detalle",
                            imgBlur: ""
                        },
                    ],
                }, {
                    tableId: 2,
                    tableTitle: "Medidas (ancho x largo x profundidad)",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/detalle/comoda-1.webp",
                            imgAlt: "45cm x 60cm x 40cm",
                            imgBlur: ""
                        }
                    ],
                }
            ],
            "escritorio": [
                {
                    tableId: 1,
                    tableTitle: "Combinación de colores",
                    maxSelections: 2,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/detalle/escritorio-1.webp",
                            imgAlt: "Blanco",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/detalle/escritorio-2.webp",
                            imgAlt: "Con detalle",
                            imgBlur: ""

                        },
                    ],
                },
                {
                    tableId: 2,
                    tableTitle: "Medidas (ancho x largo x profundidad)",
                    maxSelections: 1,
                    askMeasure: false,
                    cards: [
                        {
                            img_id: 1,
                            imgSrc: "/assets/img/designSelectData/detalle/escritorio-1.webp",
                            imgAlt: "140cm x 75cm x 45cm",
                            imgBlur: ""
                        },
                        {
                            img_id: 2,
                            imgSrc: "/assets/img/designSelectData/detalle/escritorio-1.webp",
                            imgAlt: "160cm x 75cm x 45cm",
                            imgBlur: ""
                        },
                        {
                            img_id: 3,
                            imgSrc: "/assets/img/designSelectData/detalle/escritorio-1.webp",
                            imgAlt: "180cm x 75cm x 45cm",
                            imgBlur: ""
                        },
                    ],
                }
            ]
        }
    }
}