import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../Closing/SearchBar";

function AddDesignation({ hideHeader = false, hideCard = false }) {
  const { t } = useTranslation();

  const defaultValues = useRef({
    designation: "",
    details: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  function handleSubmit(e) {
    // e.preventDefault();
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"));
      }
    }
  }

  const data = [
    {
      label: "Designation :",
      placeholder: "Designation",
      name: "designation",
      handleChange,
      value: values["designation"],
    },

    {
      label: "Details :",
      placeholder: "Details",
      name: "details",
      handleChange,
      value: values["details"],
    },
  ];

  return (
    <SearchBar
      listView
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      data={data}
      values={values}
      hideCard={hideCard}
      hideHeader={hideHeader}
      CardTitle="Add Designation"
    />
  );
}

export default AddDesignation;
