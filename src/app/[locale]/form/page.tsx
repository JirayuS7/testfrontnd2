"use client";
import FormAntd from "@/app/[locale]/components/form";
import LayoutInner from "../layoutInner";
import TableAntD from "./table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/lib/store";
import { addItem } from "@/lib/features/dataTableSlice";

export interface DataType {
  key: string | number;
  name: string;
  gender: string;
  phone: string;
  nationality: string;
  action: any;
}

export interface FormDataType {
  key: string | number;
  gender: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  nationality: number;
  idNumber: number;
  passport: number;
  phone: number;
  ExpectedSalary: number;
}

export default function FormPage() {
  const dispatch = useDispatch();
  const dataTableCenter = useSelector((state: RootState) => state.dataTable);

  const localeData = () => {
    let datas: string = "";

    if (typeof localStorage !== "undefined") {
      datas = localStorage.getItem("employee") as string;
    }

    if (datas) {
      try {
        return JSON.parse(datas);
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  };

  const localeDataTable = localeData();

  useEffect(() => {
    localeData();
  }, [dataTableCenter]);

  function removeItem(key: React.Key) {
    const newData =
      localeDataTable &&
      localeDataTable.filter((item: DataType) => item.key !== key);

    try {
      dispatch(addItem(newData));

      if (typeof localStorage !== "undefined") {
        localStorage.setItem("employee", JSON.stringify(newData));
      } else {
        alert("Error Removing Employee");
      }
    } catch (error) {
      alert("Error Removing Employee");
    }
  }

  return (
    <LayoutInner>
      <div className="row">
        <div className="col-md-6">
          <FormAntd localData={localeDataTable} />
        </div>

        <div className="col-md-6">
          <strong>
            All Employees (
            {localeDataTable?.length ? localeDataTable?.length : 0})
          </strong>

          <TableAntD dataLocal={localeDataTable} removeItem={removeItem} />
        </div>
      </div>
    </LayoutInner>
  );
}
