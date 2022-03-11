import React,{useState, useEffect} from "react";
import "../assets/style.css";
import Profile from "./Profile";
import MaterialIcon from 'react-google-material-icons'
import Icon from '@material-ui/core/Icon';
import MaterialTable from 'material-table';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
    } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
export const getData = async (url) => {
    const data = await fetch(url,{method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    });
    return await data.json();
};

//const arr = [{"name": "item1"}, {"name": "item2"}, {"name": "item3"}]
const FlightList=()=> {
    const [status, setStatus] = React.useState({ open: false,rowData:{} });
    const [dataApi, setDataApi] = useState({});
    useEffect(() => {
        const asyncFunc = async () => {
        const res = await getData(
            "https://public-dev.terra-inspection.com/v1/auth/login"
        );
        await setDataApi(res);
        console.log(res)
        };
        asyncFunc();
    }, []);

    const [columns,setColumns]= useState([
        { title: "機体名", field: "name" },
        { title: "description", field: "description" },
        { title: "serial", field: "serial" }
    ])

    const [data, setData] = useState([
        {
            "id": "RUXBgGn7xLpY9NL7R8mc5S",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "6eab7f35-8f9c-43b3-b7bf-4d92dfdd26bc",
            "name": "機体テスト",
            "serial": "001",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [
                "e46283b5-5413-495c-9bba-2398260a9999"
            ],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [
                {
                    "id": "QZRUVJXvkp1KUGAVSaAFAL",
                    "organization_id": "MPwTa9cFhqiyto7nJkwnt",
                    "name": "保険作成",
                    "issuer": "損保",
                    "content": "",
                    "expired_at": "2022-05-13 00:00:00",
                    "created_at": "2021-09-16 03:50:56",
                    "updated_at": "2021-09-16 03:50:56",
                    "deleted_at": ""
                }
            ],
            "payload_ids": [
                "59de9d01-7512-4cd6-9fdd-819518d71208"
            ],
            "statistics": null,
            "created_at": "2022-02-01 06:14:08",
            "updated_at": "2022-02-01 06:15:04",
            "deleted_at": ""
        },
        {
            "id": "58x5NADLBfGQ46Fv5KxyVx",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "712a2d9a-0dc2-4d22-bd63-5f071de7c75d",
            "name": "テスト削除",
            "serial": "123xxxx3333",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [
                "7b3098d8-e484-4167-9ea8-9192a6327261"
            ],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [
                {
                    "id": "Vgoz556QHumLyPMQK6vLDb",
                    "organization_id": "MPwTa9cFhqiyto7nJkwnt",
                    "name": "vv",
                    "issuer": "Insurance 2",
                    "content": "",
                    "expired_at": "2021-07-27 00:00:00",
                    "created_at": "2021-07-09 02:00:51",
                    "updated_at": "2021-07-09 02:00:51",
                    "deleted_at": ""
                }
            ],
            "payload_ids": [
                "59de9d01-7512-4cd6-9fdd-819518d71208",
                "f4a456b0-5c42-4a38-9d0e-6fb223e723d3"
            ],
            "statistics": null,
            "created_at": "2022-01-27 07:10:30",
            "updated_at": "2022-01-28 01:43:23",
            "deleted_at": ""
        },
        {
            "id": "7GomjHSVeJQXmoEb7QkAQC",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "712a2d9a-0dc2-4d22-bd63-5f071de7c75d",
            "name": "test",
            "serial": "1",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [
                {
                    "id": "Vgoz556QHumLyPMQK6vLDb",
                    "organization_id": "MPwTa9cFhqiyto7nJkwnt",
                    "name": "vv",
                    "issuer": "Insurance 2",
                    "content": "",
                    "expired_at": "2021-07-27 00:00:00",
                    "created_at": "2021-07-09 02:00:51",
                    "updated_at": "2021-07-09 02:00:51",
                    "deleted_at": ""
                }
            ],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2022-01-19 03:52:33",
            "updated_at": "2022-01-19 03:54:55",
            "deleted_at": ""
        },
        {
            "id": "DECydWEMSuPssWMPFLDeqd",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "6eab7f35-8f9c-43b3-b7bf-4d92dfdd26bc",
            "name": "Test Aircraft",
            "serial": "123456789",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [
                "082f1fc1-6a04-4c08-a25a-d8c2a5795452"
            ],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [
                {
                    "id": "Vgoz556QHumLyPMQK6vLDb",
                    "organization_id": "MPwTa9cFhqiyto7nJkwnt",
                    "name": "vv",
                    "issuer": "Insurance 2",
                    "content": "",
                    "expired_at": "2021-07-27 00:00:00",
                    "created_at": "2021-07-09 02:00:51",
                    "updated_at": "2021-07-09 02:00:51",
                    "deleted_at": ""
                }
            ],
            "payload_ids": [
                "3f65ebdb-2282-402b-85e9-eb785cfb080f",
                "59de9d01-7512-4cd6-9fdd-819518d71208"
            ],
            "statistics": null,
            "created_at": "2021-10-29 03:01:26",
            "updated_at": "2021-12-27 09:25:27",
            "deleted_at": ""
        },
        {
            "id": "AXjsAvWSb4vHXYZwVbcJgb",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "1454ab79-1309-48a1-b077-54eb79fcd87e",
            "name": "１２３１２３",
            "serial": "aaa 1234",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-12-10 02:43:01",
            "updated_at": "2021-12-21 11:05:40",
            "deleted_at": ""
        },
        {
            "id": "VA5K4JFQkL5fquTffcuZsY",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "6eab7f35-8f9c-43b3-b7bf-4d92dfdd26bc",
            "name": "あか8",
            "serial": "Matrice300",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [
                "e46283b5-5413-495c-9bba-2398260a9999"
            ],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [
                "8f4dabc3-aec0-4c4d-9d74-6ffbaf28aab6",
                "59de9d01-7512-4cd6-9fdd-819518d71208"
            ],
            "statistics": null,
            "created_at": "2021-09-23 03:10:09",
            "updated_at": "2021-12-17 03:07:14",
            "deleted_at": ""
        },
        {
            "id": "UJTiVpRWEAxX5eMNFNBTCK",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "f558fce7-345e-418d-8391-c35e14d28cd5",
            "name": "M300 ri",
            "serial": "e",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-07-13 09:46:34",
            "updated_at": "2021-12-10 06:28:57",
            "deleted_at": ""
        },
        {
            "id": "Tv5BVjiR5wWxKRkSAJUton",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "1454ab79-1309-48a1-b077-54eb79fcd87e",
            "name": "123123",
            "serial": "ﾒｰｶｰ",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-12-08 03:23:35",
            "updated_at": "2021-12-08 03:29:09",
            "deleted_at": ""
        },
        {
            "id": "WLjieTZu3dWwFo8mKpVNaX",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "dffaed88-6dd8-44c3-a654-9a80f878bd37",
            "name": "ああああ",
            "serial": "dđd",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-12-07 02:28:34",
            "updated_at": "2021-12-08 03:20:40",
            "deleted_at": ""
        },
        {
            "id": "AcfiD749EV15DonZU9u86B",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "ebc918c4-16e0-4c2b-9727-33861d584765",
            "name": "テスト機体1",
            "serial": "dfghyr4321",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-08-12 04:43:30",
            "updated_at": "2021-12-06 09:14:26",
            "deleted_at": ""
        },
        {
            "id": "PyafqD4UWnWaJdmtbAPGDQ",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "712a2d9a-0dc2-4d22-bd63-5f071de7c75d",
            "name": "io",
            "serial": "56709",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [
                "4e7de022-e415-478b-8767-eb685c2fba9f"
            ],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [
                {
                    "id": "M5vb7M8F1B3TTQtEd5DRbz",
                    "organization_id": "MPwTa9cFhqiyto7nJkwnt",
                    "name": "tao moi",
                    "issuer": "Insurance 9",
                    "content": "",
                    "expired_at": "2021-07-20 00:00:00",
                    "created_at": "2021-07-09 04:41:28",
                    "updated_at": "2021-07-09 04:41:28",
                    "deleted_at": ""
                },
                {
                    "id": "EzvkwRFnmghbAueBgsqis2",
                    "organization_id": "MPwTa9cFhqiyto7nJkwnt",
                    "name": "新しい保険",
                    "issuer": "新しい保険会社",
                    "content": "",
                    "expired_at": "2022-07-30 00:00:00",
                    "created_at": "2021-07-28 07:34:56",
                    "updated_at": "2021-07-28 07:34:56",
                    "deleted_at": ""
                }
            ],
            "payload_ids": [
                "59de9d01-7512-4cd6-9fdd-819518d71208",
                "f4a456b0-5c42-4a38-9d0e-6fb223e723d3"
            ],
            "statistics": null,
            "created_at": "2021-12-01 02:34:10",
            "updated_at": "2021-12-01 06:21:29",
            "deleted_at": ""
        },
        {
            "id": "WyMDox49GcbSD5EFW8c6f6",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "3d934294-6105-41d1-aca7-b708d60599a9",
            "name": "ああああ",
            "serial": "2erfdあsdf",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-12-01 02:12:22",
            "updated_at": "2021-12-01 02:12:46",
            "deleted_at": ""
        },
        {
            "id": "fKBMVdMx3fghKE6yjW8M8",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "712a2d9a-0dc2-4d22-bd63-5f071de7c75d",
            "name": "あ",
            "serial": "aaaa",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [
                "4e7de022-e415-478b-8767-eb685c2fba9f"
            ],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-11-30 08:41:42",
            "updated_at": "2021-12-01 02:11:59",
            "deleted_at": ""
        },
        {
            "id": "8iQhForNSLM9dQ6fdWQL27",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "33e7c3d9-47ed-4daf-9710-55ede4d74ddb",
            "name": "M300 RTK 1",
            "serial": "123456",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-11-01 07:42:11",
            "updated_at": "2021-11-01 07:42:11",
            "deleted_at": ""
        },
        {
            "id": "KSt2reiNFJRSh5yx6M7xiX",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "dffaed88-6dd8-44c3-a654-9a80f878bd37",
            "name": "禁止空域",
            "serial": "12345234123",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-10-28 12:17:33",
            "updated_at": "2021-10-28 12:17:33",
            "deleted_at": ""
        },
        {
            "id": "6sjNFUMX2YRwqpRj2Zv6PG",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "0d8baf8d-9574-4904-ab17-408314ab59c4",
            "name": "terra-210610",
            "serial": "1234567",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [
                "76691b4e-6a77-4baa-930c-1166995b6906"
            ],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-10-28 06:23:55",
            "updated_at": "2021-10-28 06:23:55",
            "deleted_at": ""
        },
        {
            "id": "H8p2YuhPtJJcbmaektGd5t",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "712a2d9a-0dc2-4d22-bd63-5f071de7c75d",
            "name": "SA",
            "serial": "sd3w21",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-10-27 03:57:04",
            "updated_at": "2021-10-27 03:57:04",
            "deleted_at": ""
        },
        {
            "id": "KGtH3pa98VjaCDwxNzARKd",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "712a2d9a-0dc2-4d22-bd63-5f071de7c75d",
            "name": "OA",
            "serial": "2123d",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [
                "4caad2dc-cf0f-4b54-b013-de25aabf6f9b"
            ],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [
                "59de9d01-7512-4cd6-9fdd-819518d71208"
            ],
            "statistics": null,
            "created_at": "2021-10-27 03:56:27",
            "updated_at": "2021-10-27 03:56:27",
            "deleted_at": ""
        },
        {
            "id": "GMArbUYt3sJunhgazw99rD",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "ae498855-08aa-492b-a26a-2aceb203be8e",
            "name": "OU",
            "serial": "12rwedser",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-10-27 03:55:31",
            "updated_at": "2021-10-27 03:55:31",
            "deleted_at": ""
        },
        {
            "id": "Q3SyAWwNi31mriSMMQNk2u",
            "organization_id": "MPwTa9cFhqiyto7nJkwnt",
            "aircraft_model_id": "0d8baf8d-9574-4904-ab17-408314ab59c4",
            "name": "OU01",
            "serial": "OU01",
            "is_customized": 0,
            "color": "",
            "status": 0,
            "description": "",
            "battery_ids": [
                "76691b4e-6a77-4baa-930c-1166995b6906"
            ],
            "remote_controller_ids": [],
            "evidences": [],
            "insurances": [],
            "payload_ids": [],
            "statistics": null,
            "created_at": "2021-10-27 02:00:28",
            "updated_at": "2021-10-27 02:02:43",
            "deleted_at": ""
        }
    ]);
    
    return (
        <>
        <MaterialTable
        title="Editable Preview"
        columns={columns}
        data={data}
        editable={{
            onRowAdd: newData =>
                new Promise((resolve, reject) => {
                setTimeout(() => {
                    setData([...data, newData]);
                    
                    resolve();
                }, 1000)
                }),
            onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
    
                    resolve();
                }, 1000)
                }),
            onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);
                    
                    resolve()
                }, 1000)
            }),
        }}
        options={{
            showTitle: false,
            paging: false,
            maxBodyHeight: 600,
            headerStyle: { position: 'sticky', top: 0 ,backgroundColor : '#f4f4f4'},
            
        }}
        onRowClick={(event, rowData) => {
            event.preventDefault();
            setStatus({ open: true,rowData:rowData });
            }}
        localization={{
            header: { actions: '' },
        }}
        />
        <Dialog
            open={status.open}
            aria-labelledby="draggable-dialog-title"
            fullWidth
            maxWidth="lg"
        >
            <DialogTitle id="draggable-dialog-title">詳細</DialogTitle>
            <DialogContent>
            <DialogContentText>
                <p>id:{status.rowData.id}</p>
                <p>organization_id:{status.rowData.organization_id}</p>
                <p>aircraft_model_id:{status.rowData.aircraft_model_id}</p>
                <p>機体名:{status.rowData.name}</p>
                <p>serial:{status.rowData.serial}</p>
                <p>顧客数:{status.rowData.is_customized}</p>
                <p>color:{status.rowData.color}</p>
                <p>ステータス:{status.rowData.status}</p>
                <p>description:{status.rowData.description}</p>
                <p>battery_ids:{status.rowData.battery_ids}</p>
                <p>remote_controller_ids:{status.rowData.remote_controller_ids}</p>
                <p>evidences:{status.rowData.evidences}</p>
                {/* <p>insurances_id:{status.rowData.insurances["id"]}</p>
                <p>insurances_id:{status.rowData.insurances["organization_id"]}</p>
                <p>insurances_id:{status.rowData.insurances["name"]}</p>
                <p>insurances_id:{status.rowData.insurances["issuer"]}</p>
                <p>insurances_id:{status.rowData.insurances["content"]}</p>
                <p>insurances_id:{status.rowData.insurances["expired_at"]}</p>
                <p>insurances_id:{status.rowData.insurances["created_at"]}</p>
                <p>insurances_id:{status.rowData.insurances["updated_at"]}</p>
                <p>insurances_id:{status.rowData.insurances["deleted_at"]}</p> */}
                <p>payload_ids:{status.rowData.payload_ids}</p>
                <p>statistics:{status.rowData.statistics}</p>
                <p>登録日:{status.rowData.created_at}</p>
                <p>更新日:{status.rowData.updated_at}</p>
                <p>削除日:{status.rowData.deleted_at}</p>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button
                onClick={() => setStatus({ open: false,rowData:status.rowData })}
                color="primary"
            >
                OK
            </Button>
            </DialogActions>
        </Dialog>
            </>
            );
        }

export default FlightList;