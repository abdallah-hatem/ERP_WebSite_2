import React, { useEffect } from "react";
import DatePicker from "react-datepicker";

function DateInput({
   dateData = [],
   startDate,
   endDate,
   setValidDate,
   values,
   hideDays,
}) {
   useEffect(() => {
      function formattedDate(name) {
         return `${!hideDays ? name.getDate() : ""}/${
            name.getMonth() + 1
         }/${name.getFullYear()}`;
      }

      if (startDate > endDate) {
         setValidDate && setValidDate(false);
      } else {
         setValidDate && setValidDate(true);
      }

      dateData.map((el) => (values[el.value] = formattedDate(el.selected)));
   }, [startDate, endDate]);

   return dateData.map((el) => (
      <DatePicker
         dateFormat={!hideDays ? "dd/MM/yyyy" : "MM/yyyy"}
         selected={el.selected}
         onChange={(date) => el.onChange(date)}
         showMonthYearPicker={el.showMonthYearPicker}
      />
   ));
}

export default DateInput;
