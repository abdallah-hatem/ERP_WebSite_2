import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import ReportTable from "./ReportTable";
import SearchBar from "./SearchBar";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";

function DueReport() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    start_date: "",
    end_date: "",
  });

  const [values, setValues] = useState(defaultValues.current);

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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [validDate, setValidDate] = useState(true);

  const columns = [
    {
      field: "sales_date",
      caption: t("Sales Date"),
    },
    {
      field: "invoice_no",
      caption: t("Invoice No."),
    },
    {
      field: "customer_name",
      caption: t("Customer Name"),
    },
    {
      field: "total_amount",
      caption: t("Total Amount"),
      format: "currency",
    },
    {
      field: "paid_amount",
      caption: t("Paid Amount"),
      format: "currency",
    },
    {
      field: "due_amount",
      caption: t("Due Amount"),
      format: "currency",
    },
  ];

  const summary = [
    {
      column: "total_amount",
      summaryType: "sum",
      valueFormat: "currency",
    },
    {
      column: "paid_amount",
      summaryType: "sum",
      valueFormat: "currency",
    },
    {
      column: "due_amount",
      summaryType: "sum",
      valueFormat: "currency",
    },
  ];

  const buttons = [
    {
      title: "Sales Report",
      path: "sales-report",
      iconClass: "ti-align-justify",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Purchase Report",
      path: "purchase-report",
      iconClass: "ti-align-justify",
      class: "btn btn-primary m-b-5 m-r-2",
    },
    {
      title: "Sales Report (Product Wise)",
      path: "sales-report-product",
      iconClass: "ti-align-justify",
      class: "btn btn-success m-b-5 m-r-2",
    },
    {
      title: "Profit Report (Sale Wise)",
      path: "profit-report-sale",
      iconClass: "ti-align-justify",
      class: "btn btn-warning m-b-5 m-r-2",
    },
  ];

  const dateData = [
    {
      label: "Start Date :",
      value: "start_date",
      selected: startDate,
      onChange: setStartDate,
    },
    {
      label: "End Date :",
      value: "end_date",
      selected: endDate,
      onChange: setEndDate,
    },
  ];

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    console.log(values);
  }, [values, startDate, endDate]);

  return (
    <>
      <SearchBar
        hideHeader
        hideCard={false}
        width="56%"
        handleSubmit={handleSubmit}
        dateData={dateData}
        startDate={startDate}
        endDate={endDate}
        values={values}
        setValidDate={setValidDate}
      />

      <div className="d-flex justify-content-end mb-2">
        <ButtonComponent
          title={"Print"}
          style={{ width: "100px" }}
          onClick={handlePrint}
        />
      </div>

      <div ref={componentRef}>
        <ReportTable title="Sales Report" summary={summary} columns={columns} />
      </div>
      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default DueReport;
