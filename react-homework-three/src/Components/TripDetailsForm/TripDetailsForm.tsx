import { useForm } from "react-hook-form";
import "./TripDetailsForm.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../../Context/ItemsContext";
// import { useContext } from "react";
// import { ItemsContext } from "../../Context/ItemsContext";

export interface TripDetailsFormInterface {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
}

export function TripDetailsForm() {
  // const { addTrip } = useContext(ItemsContext);
  const { onSubmit } = useContext(ItemsContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitted },
  } = useForm<TripDetailsFormInterface>({
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
    },
  });

  //   const onSubmit = (tripData: TripDetailsFormInterface) => {
  //     if (!isValid) {
  //       console.error("Form is not valid");
  //       return;
  //     }
  // console.log(tripData)
  //   try {
  //     const newTrip: TripDetailsFormInterface = {
  //       firstName: tripData.firstName,
  //       lastName: tripData.lastName,
  //       dateOfBirth: tripData.dateOfBirth,
  //       email: tripData.email,
  //       phoneNumber: tripData.phoneNumber,
  //     };
  //     console.log("added the trip");

  //     addTrip(newTrip);

  //     navigate("/summary");
  //   } catch (error) {
  //     console.log("Can't add the trip");
  //   }
  // };

  return (
    <div className="TripDetailsForm">
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-groups">
          <label   style={{backgroundColor: "hotpink"}} htmlFor="firstName">First Name</label>
          <input
            {...register("firstName", { required: true })}
            id="firstName"
            type="text"
          />
        </div>
        <div className="form-groups">
          <label  style={{backgroundColor: "hotpink"}} htmlFor="lastName">Last Name</label>
          <input
            {...register("lastName", { required: true })}
            id="lastName"
            type="text"
          />
        </div>
        <div className="form-groups">
          <label   style={{backgroundColor: "hotpink"}} htmlFor="DateOfBirth">Date of Birth</label>
          <input
            {...register("dateOfBirth", { required: true })}
            id="DateOfBirth"
            type="text"
          />
        </div>
        <div className="form-groups">
          <label  style={{backgroundColor: "hotpink"}} htmlFor="phoneNumber">Phone Number</label>
          <input
            {...register("phoneNumber", { required: true })}
            id="phoneNumber"
            type="text"
          />
        </div>
        <div className="form-groups">
          <label  style={{backgroundColor: "hotpink"}} htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="text"
          />
        </div>
        <div className="form-controlss">
          <button  style={{backgroundColor: "hotpink"}} type="submit">Add</button>
        </div>
      </form>
      {!isValid && isSubmitted && (
        <div className="form-errors" ><strong> All fields are required</strong></div>
      )}{" "}
      <button className="display-data" onClick={() => navigate("/summary")}>
        Display Trip Data
      </button>
    </div>
  );
}
