"use client";
import React, { use, useMemo, useState } from "react";
import { Button, Table, message } from "antd";
import type { TableColumnsType } from "antd";
import { DataType } from "./page";
import { useRouter } from "next/navigation";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { addPost } from "@/lib/features/formEditIdSlice";
import { addItem } from "@/lib/features/dataTableSlice";

export default function TableAntD({

    dataLocal,
    removeItem,
}: {
    dataLocal: DataType[];
    removeItem: (key: React.Key) => void;
}) {
    // const Edit = useSelector((state: RootState) => state.form?.id);
    const dispatch = useDispatch();
    const dataTableCenter = useSelector((state: RootState) => state.dataTable);


    // const [messageApi, contextHolder] = message.useMessage();

    const columns: TableColumnsType<DataType> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.length - b.name.length,
            render: (text, record) => <a>{text}</a>,
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
            sorter: (a, b) => a.gender.length - b.gender.length,
        },
        {
            title: "Phone Number",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Nationality",
            dataIndex: "nationality",
            key: "nationality",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (text, record) => (
                <>
                    <Button
                        className="me-2"
                        type="primary"
                        onClick={
                            () => dispatch(addPost(record.key))

                            // setEdit(record.key as string)
                        }
                    >
                        Edit
                    </Button>
                    <Button
                        type="primary"
                        danger
                        onClick={() => (
                            removeItem(record.key),
                            alert(`Removed  ID : ${record.key} Successfully`),
                            dispatch(addPost(''))

                        )}
                    >
                        Delete
                    </Button>
                </>
            ),
        },
    ];


    function convertData(dataLocal: any) {
        const convertDataLocal = dataLocal && dataLocal.map((item: any) => {


            return {
                key: item.key,
                name: item.firstName + ` ` + item.lastName,
                gender: item.gender,
                phone: item.phone,
                nationality: item.nationality,
                action: item.key
            }

        })

        return convertDataLocal;
    }
    ;


    const Data = convertData(dataLocal);
 


    useMemo(() => {

        convertData(dataLocal);

    }, [dataTableCenter,dataLocal]);

    return (
        <div>
            <div>
                <Table columns={columns} dataSource={Data} />
                <div className="text-center">
                    <Button
                        className="me-2"
                        onClick={() => {
                            try {
                                localStorage.removeItem("employee");
                            } catch (error) {
                                console.log(error);
                            }
                            // router.push('/form')
                        }}
                    >
                        Reset Local Storage
                    </Button>
                </div>
            </div>
        </div>
    );
}
