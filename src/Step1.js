import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./index.css"
const Step1 = () => {
    const { handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = () => {
        navigate("./step2");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>hhhhhhhhhhhh</div>
            <input type="submit" value="blood test" className="demo" />
        </form>
    );
};

export default Step1;
