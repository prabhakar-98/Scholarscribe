import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import  axios from "axios";
import { FiMinusCircle } from "react-icons/fi"; // Import the minus circle icon from react-icons library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import DarkMode from "./dmprovider";


type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  description: string;
  files: FileList[];
};

export const Ordernow = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");


  const [fileInputs, setFileInputs] = useState<number[]>([0]);
  const handleGoBack = () => {
    navigate("/", { state: { skipIntro: true } });
    setTimeout(() => {
      navigate("/", { state: { skipIntro: false } });
    }, 100); // Adjust this delay as needed
  };

  const handleAddFileInput = () => {
    const newFileInput = fileInputs.length;
    setFileInputs([...fileInputs, newFileInput]);
  };

  const handleRemoveFileInput = (index: number) => {
    const updatedFileInputs = fileInputs.filter((inputIndex) => inputIndex !== index);
    setFileInputs(updatedFileInputs);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone_no', data.phoneNumber);
      formData.append('description', data.description);
  
      // Append all files to formData
      const fileInputElements = document.querySelectorAll('input[type="file"]');
      fileInputElements.forEach((fileInput, index) => {
        const files = (fileInput as HTMLInputElement).files;
        if (files && files.length > 0) {
          formData.append('files', files[0]);
        }
      });
  
      await axios.post('http://localhost:3000/user/adduser', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setIsSubmitted(true);
      setErrorMessage("");
      reset(); // Optionally reset the form after submission
      console.log('Form submitted successfully');
     
    } catch (error) {
       // Set error message
    setIsSubmitted(false);
    setErrorMessage("Error submitting form. Please try again later.");
    console.error('Error submitting form:', error);
    }
  };
  
  return (
    
    <div id="art2" className="form-container">
<div className="flex flex-col items-center justify-center h-screen bg-ee8038 dark:bg-0a082a">
       <button className="close-button" onClick={handleGoBack}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      
      
      <h2 className="text-3xl font-semibold text-center mb-6">Fill in your requirements here</h2>
      <form
        className="form bg-white rounded-lg shadow-lg p-8 mx-auto max-w-2xl flex flex-col md:flex-row border-2 border-black "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full md:w-1/2 pr-4">
          {/* Name, Email, Phone Number Inputs */}
          <label htmlFor="name" className="mb-2 text-gray-700">
            Name:
          </label>
          <input
            id="name"
            className="input-field mb-4 border border-gray-300 h-12"
            {...register("name", { required: true })}
            placeholder="  Enter your name"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
          <label htmlFor="email" className="mb-2 text-gray-700">
            Email:
          </label>
          <input
            id="email"
            className="input-field mb-4 border border-gray-300 h-12"
            {...register("email", { required: true })}
            placeholder="  Enter your email"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
          <label htmlFor="phoneNumber" className="mb-2 text-gray-700">
            Phone Number:
          </label>
          <input
            id="phoneNumber"
            className="input-field mb-4 border border-gray-300 h-12"
            {...register("phoneNumber", { required: true })}
            placeholder="  Enter your phone number"
          />
          {errors.phoneNumber && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        {/* <DarkMode /> */}

        <div className="flex flex-col w-full md:w-1/2 pl-4">
          <div className="mb-4">
            <label htmlFor="files" className="block text-lg text-gray-700 mb-2">
              Add Files:
              <button
                type="button"
                className="ml-2 bg-blue-500 hover:bg-blue-600 text-black font-bold py-1 px-2 rounded-full"
                onClick={handleAddFileInput}
                style={{ fontSize: "1.2rem", lineHeight: "1" }} // Adjust font size and line height as needed
              >
                +
              </button>
            </label>
            {fileInputs.map((index) => (
              <div key={index} className="flex items-center mb-2">
                {/* Add margin-bottom */}
                <input
                  id={`file${index}`}
                  type="file"
                  className="input-field border border-gray-300"
                  {...register('files' as const)}
                />
                {index !== 0 && ( // Allow removing files except the first one
                  <button
                    type="button"
                    className="ml-2 text-red-500 focus:outline-none bg-transparent border-none"
                    onClick={() => handleRemoveFileInput(index)}
                    style={{
                      padding: 0,
                      backgroundColor: "transparent", // Set background color to transparent
                      color: "inherit", // Use the default text color
                      borderRadius: "50%", // Make the button circular
                    }}
                    onMouseOver={(e) =>
                      (e.target as HTMLButtonElement).style.backgroundColor =
                        "transparent"
                    } // Remove gray background on hover
                    onFocus={(e) =>
                      (e.target as HTMLButtonElement).style.backgroundColor =
                        "transparent"
                    } // Remove gray background on focus
                    onMouseDown={(e) =>
                      (e.target as HTMLButtonElement).style.backgroundColor =
                        "transparent"
                    } // Remove orange color on active state
                  >
                    <FiMinusCircle />
                  </button>
                )}
              </div>
            ))}

            {errors.files && (
              <span className="text-red-500">Please upload at least one file</span>
            )}
          </div>
          {/* Description TextArea */}
          <label htmlFor="description" className="mb-2 text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            className="input-field mb-4 border border-gray-300 h-32" // Adjusted height here
            {...register("description")}
            placeholder="Enter what problem you are facing and how do you need help"
          />
        </div>
        
      </form>
      <div className="flex justify-center mt-8">
        {/* Increased top margin */}
        <button
  className="btn bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-full shadow-lg dark:bg-gray-600 dark:hover:bg-gray-700"
  type="submit"
  onClick={handleSubmit(onSubmit)}
>
  Submit
</button>

        
      </div>
      {isSubmitted && <p className="text-black font-bold">Thank you for your response. We will contact you soon.</p>}
{errorMessage && <p className="text-red-500 font-bold">{errorMessage}</p>}
        
    </div>
    
    </div>
  );
};
