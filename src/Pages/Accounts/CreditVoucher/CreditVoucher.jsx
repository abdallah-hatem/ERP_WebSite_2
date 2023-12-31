import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import "react-datepicker/dist/react-datepicker.css";

import CreditVoucherTable from "./CreditVoucherTable";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import SearchBar from "../../Closing/SearchBar";
// import "../style.scss";

function CreditVoucher() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    voucher_number: "OP-2",
    debit_account_head: "",
    remark: "",
    date: "",
    account_name: "",
    code: "",
    amount: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleChangeTable = useCallback((e) => {
    setValues((prev) => ({ ...prev, ...e }));
  }, []);

  function handleSubmit(e) {
    // e.preventDefault();
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"));
      }
    }

    if (!validDate) {
      alert(t("Start date cant be bigger than end date"));
    }
  }

  const options = [
    {
      label: "Cash In Hand",
      value: "cash in hand",
    },
    {
      label: "Cash In Bank",
      value: "cash in bank",
    },
  ];

  const data = [
    {
      label: "Voucher No. :",
      //   placeholder: "Select Option",
      name: "voucher_number",
      //   handleChange,
      value: values["voucher_number"],
      disabled: true,
    },

    {
      label: "Debit Account Head :",
      placeholder: "Select Option",
      name: "debit_account_head",
      chooseOptions: true,
      options: options,
      handleChange,
      value: values["debit_account_head"],
    },
    {
      label: "Remark :",
      placeholder: "Remark",
      name: "remark",
      textArea: true,
      handleChange,
      value: values["remark"],
    },
  ];

  const [startDate, setStartDate] = useState(new Date());
  const [validDate, setValidDate] = useState(true);

  const dateData = [
    {
      label: "Date :",
      value: "date",
      selected: startDate,
      onChange: setStartDate,
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values, startDate]);

  return (
    <FormComponent title="Credit Voucher">
      <SearchBar
        listView
        showButton={false}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
        dateData={dateData}
        startDate={startDate}
        values={values}
        setValidDate={setValidDate}
      />

      <CreditVoucherTable handleChange={handleChangeTable} />

      <div style={{ width: "100%", marginTop: 20 }}>
        <ButtonComponent
          style={{ width: "200px", float: "right" }}
          onClick={handleSubmit}
          title={"Save"}
        />
      </div>
    </FormComponent>
  );
}

export default CreditVoucher;
