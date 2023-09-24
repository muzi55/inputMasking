"use client";
import React, { useCallback, useState } from "react";
import visibleEyeMasking from "../assets/visibility_FILL0_wght400_GRAD0_opsz24.svg";
import hiddenEyeMasking from "../assets/visibility_off_FILL0_wght400_GRAD0_opsz24.svg";
import Image from "next/image";
import { textOrPassword } from "../types/type";

const InputMasking = (): JSX.Element => {
  const [inputType, setInputType] = useState<textOrPassword>("password");
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleBtnMasking = useCallback(() => {
    if (inputType === "password") setInputType("text");
    if (inputType === "text") setInputType("password");
  }, [inputType]);

  return (
    <>
      <input className="border border-black" type={inputType} onChange={handleInputChange} value={inputValue} />
      <button onClick={handleBtnMasking}>
        <Image width={24} height={24} src={inputType === "password" ? visibleEyeMasking : hiddenEyeMasking} alt="눈모양" />
      </button>
      <p>현재 input의 타입: {inputType}</p>
    </>
  );
};

export default React.memo(InputMasking);
