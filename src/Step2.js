import React from "react";
import { useFormContext } from "react-hook-form"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";

const Step2 = () => {
    const { register, handleSubmit, watch, control,formState: {errors} } = useFormContext();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>WBC Count</label>
            <input {...register("wbc", {required: true})}/>
            {errors.wbc && <span>WBC required</span>}

            <label>Date of the result</label>
            <Controller
        control={control}
        name="ReactDatepicker"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <DatePicker
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
            minDate={new Date()}
          />
        )}
      />
            <input type="submit" className="demo" />
        </form>
    )
}

export default Step2 ; 