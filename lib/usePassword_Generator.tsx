import { useState } from "react";
import { toast } from "react-hot-toast";

const passwordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkboxOption: any, length: any) => {
    let charset = "";
    let generatedPassword = "";

    const selectedOption = checkboxOption.filter(
      (checkbox: any) => checkbox.state
    );

    // handling the error if user not selected the option
    if (selectedOption.length === 0) {
      toast.error("Select at least one option");
      setErrorMessage("Please select any option from this.");
      setPassword("");
      return;
    }

    selectedOption.forEach((option: any) => {
      switch (option.title) {
        case "ABC":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "abc":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "123":
          charset += "0123456789";
          break;
        case "#$&":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  };

  return { password, errorMessage, generatePassword };
};

export default passwordGenerator;
