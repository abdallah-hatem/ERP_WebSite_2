import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

function QrCode({ rowId }) {
  const { t } = useTranslation();

  const defaultValues = useRef({
    quantity: "",
    number: "",
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
        return;
      }
    }
  }

  const data = [
    {
      label: "Qr-Code / row :",
      placeholder: "Qr-Code qunatity for each row",
      name: "quantity",
      handleChange,
      value: values["quantity"],
      type: "number",
    },
    {
      label: "No. Of Qr-Code  :",
      placeholder: "No. Of Qr-Code ",
      name: "number",
      handleChange,
      value: values["number"],
      type: "number",
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <FormComponent hideCard hideHeader>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        {data.map((el) => (
          <div style={{ width: "42%" }}>
            <InputComponent
              label={el.label}
              placeholder={el.placeholder}
              type={el.type}
              width="100%"
              handleChange={el.handleChange}
              name={el.name}
              //   value={el.value}
            />
          </div>
        ))}
        <ButtonComponent
          onClick={handleSubmit}
          title="Generate"
          style={{ width: "100px" }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/my-assets/image/qr/63538869.png"
          class="img-responsive center-block qrcode-image"
          alt=""
        />
      </div>

      <ButtonComponent
        style={{ width: "100px", float: "right", marginTop: 20 }}
        title={"Print"}
      />
    </FormComponent>
  );
}

export default QrCode;
