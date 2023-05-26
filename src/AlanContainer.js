import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useFormContext } from "react-hook-form";
import moment from "moment-timezone";

const AlanContainer = () => {
  const navigate = useNavigate();
  const rootElRef = useRef(null);
  const methods = useFormContext();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    window.alanBtnInstance.playText("ok");
  };
  const onErrors = (errors) => {
    window.alanBtnInstance.playText("please check the results again doctor");
  };

  const handleSubmit = methods.handleSubmit(onSubmit, onErrors);

  useEffect(() => {
    window.welcomeMsg = false;

    window.alanBtnInstance = alanBtn({
      key: "6222386b7daa9feb1c68584ab1ab582a2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onButtonState: async (status) => {
        if (status === "ONLINE") {
          if (!window.welcomeMsg) {
            window.alanBtnInstance.activate();
            window.alanBtnInstance.playText(
              "Hello, I'm Medisys brother Doctor Mehdi and I'm here to help you with the test results. If you want to start, just say 'blood test' or click the button below."
            );
            window.welcomeMsg = true;
          }
        }
      },
      onCommand: (commandData) => {
        if (commandData.command === "openForm") {
          navigate("/Step2");
        }
        if (commandData.command === "getwbc") {
          methods.setValue("wbc", commandData.value);
        }
        if (commandData.command === "setFormDate") {
          methods.setValue("formDate", commandData.value);
          let formDate = moment(commandData.value).format("MM-DD--YYYY");
          formDate = moment(formDate).toDate();
          methods.setValue("formDate", formDate);
        }
        if (commandData.command === "submitData") {
          handleSubmit();
        }
      },
    });
  }, [navigate, methods]);

  return (
    <div className="alan-btn-container">
      <div ref={rootElRef}></div>
    </div>
  );
};

export default AlanContainer;
