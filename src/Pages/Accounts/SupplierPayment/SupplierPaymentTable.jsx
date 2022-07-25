import React from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function SupplierPaymentTable() {
  const { t, i18n } = useTranslation();

  const options2 = [
    {
      label: "Cash In Hand",
      value: "Cash In Hand",
    },
    {
      label: "Bank",
      value: "Bank",
    },
  ];

  const columns2 = [
    {
      field: "payment_type",
      caption: t("Payment Type"),
      options: options2,
    },
    {
      field: "paid_amount",
      caption: t("Paid Amount"),
      dataType: "number",
    },
  ];

  const data2 = [
    {
      payment_type: "",
      paid_amount: 20,
    },
  ];

  return (
    <FormComponent
      hideHeader
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <MasterTable
        allowUpdate
        allowDelete
        searchPanel={false}
        columnChooser={false}
        dataSource={data2}
        colAttributes={columns2}
        ColoredRows
        onSaving={(e) => console.log(e)}
      />
      <div style={{ width: "250px", float: "right", marginTop: 20 }}>
        <ButtonComponent title={"Add New Payment Method"} />
      </div>
    </FormComponent>
  );
}

export default SupplierPaymentTable;
