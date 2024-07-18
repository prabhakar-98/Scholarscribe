import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  schoolCode: string;
  phoneNumber: string;
  numberOfWords: number;
  deadline: Date;
  serviceType: string;
  assignmentDescription: string;
  assignmentFile: FileList;
};

export const Form = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <>
      <form
        className="form w-[100%] p-4 flex flex-col gap-10 items-center rounded-[1.5em]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Add radio group for service type */}
        <div className="flex flex-col items-center gap-4">
          <label className="its-time text-center flex flex-col md:flex-row gap-1 text-[1.3em]">
            <span>It’s time you sought help from</span>
            <span> Scholarscribe.com experts!</span>
          </label>
          <div className="flex gap-5">
            <label>
              <input
                type="radio"
                value="Writing"
                {...register("serviceType", { required: true })}
              />
              Writing
            </label>
            <label>
              <input
                type="radio"
                value="Rewriting"
                {...register("serviceType", { required: true })}
              />
              Rewriting
            </label>
            <label>
              <input
                type="radio"
                value="Editing"
                {...register("serviceType", { required: true })}
              />
              Editing
            </label>
          </div>
          {errors.serviceType && (
            <span>Please select a service type</span>
          )}
        </div>
        <div className="col-wrapper-form flex flex-col md:flex-row gap-4  w-[100%]">
            <div className="col-1-form flex items-center flex-col gap-4 w-[100%]">


            {/* register your input into the hook by invoking the "register" function */}
            <input className="test w-[80%]" {...register("email")} 
            placeholder="Your Email"
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              className="test w-[80%]"
              {...register("schoolCode", { required: true })}
              placeholder="Your Subject/Course Code"
            />
            {/* errors will return when field validation fails  */}
            {errors.schoolCode && <span>This field is required</span>}


            {/* Add input for number of words */}
            <input
              type="number"
              className="test w-[80%]"
              {...register("numberOfWords")}
              placeholder="Number of Words"
            />
            {/* Add input for deadline with calendar */}
            <input
              type="date"
              className="test w-[80%]"
              {...register("deadline", { required: true })}
              placeholder="Deadline"
            />
            {/* errors will return when field validation fails  */}
            {errors.deadline && <span>This field is required</span>}

            </div>

            <div className="col-2-form flex items-center flex-col gap-4 w-[100%]">

              {/* Add input for phone number with recommended country code */}
              <input
              className="test w-[80%]"
              {...register("phoneNumber", { required: true })}
              placeholder="Phone Number"
            />

            {/* Add textarea for assignment description */}
            <textarea
              className="test w-[80%]"
              {...register("assignmentDescription")}
              placeholder="Assignment Description"
            />

            {/* Add input for assignment file */}
            <input
              type="file"
              className="test w-[80%]"
              {...register("assignmentFile", { required: true })}
            />
            {errors.assignmentFile && (
              <span>Please upload a file</span>
            )}

            </div>
        </div>
        <input
          className="form-button w-[10em] p-2 rounded-[0.5em]"
          type="submit"
        />
      </form>
    </>
  );
};
