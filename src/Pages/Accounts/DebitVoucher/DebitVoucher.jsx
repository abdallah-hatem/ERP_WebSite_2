import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../style.scss";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../../Components/Web Components/InputComponent/InputComponent";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import DebitVoucherTable from "./DebitVoucherTable";

function DebitVoucher() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    voucher_number: "OP-2",
    credit_account_head: "",
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
        return;
      }
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
      label: "Credit Account Head :",
      placeholder: "Select Option",
      name: "credit_account_head",
      chooseOptions: true,
      options: options,
      handleChange,
      value: values["credit_account_head"],
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

  useEffect(() => {
    values["date"] = `${startDate.getDate()}/${
      startDate.getMonth() + 1
    }/${startDate.getFullYear()}`;
  }, [startDate]);

  useEffect(() => {
    console.log(values);
  }, [values, startDate]);

  return (
    <FormComponent title="Debit Voucher">
      <div className="row">
        <div className="col-lg-8">
          {data.map((el, index) => (
            <>
              {index === 1 && (
                <InputComponent width="70%" label={"Date :"}>
                  <DatePicker
                    dateFormat={"dd/MM/yyyy"}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </InputComponent>
              )}

              <InputComponent
                label={el.label}
                placeholder={el.placeholder}
                chooseOptions={el.chooseOptions}
                textArea={el.textArea}
                options={el.options}
                type={el.type}
                width="70%"
                handleChange={el.handleChange}
                name={el.name}
                value={el.value}
                disabled={el.disabled}
              />
            </>
          ))}
        </div>

        <DebitVoucherTable handleChange={handleChangeTable} />

        <div style={{ width: "100%", marginTop: 20 }}>
          <ButtonComponent
            style={{ width: "200px", float: "right" }}
            onClick={handleSubmit}
            title={"Save"}
          />
        </div>
      </div>
    </FormComponent>
  );
}

export default DebitVoucher;