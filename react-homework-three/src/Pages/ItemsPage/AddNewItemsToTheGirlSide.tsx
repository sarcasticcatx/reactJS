import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TravelListModel } from "../../model/travel-list.model";
import "./AddNewItems.css";
import { v4 as uuidv4 } from 'uuid'; 
import { GirlItemsContext } from "../../Context/GirlsItemsContext";

interface FormValues {
  title: string;
  quantity: number;
}


//take this for the form trip details cuz u already have a shema ili dodaj samo nekoj bits and pices
export function AddItemPageForGirls() {
  const { addItem } = useContext(GirlItemsContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitted },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      quantity: 0,
    },
  });

  const onSubmit = (itemData: FormValues) => {
    if (!isValid) {
      console.error("Form is not valid");
      return;
    }

    
    try {
      const newestItemToTheFamily: TravelListModel = {
        id: uuidv4() ,
        title: itemData.title,
        quantity: itemData.quantity,
        isPacked: false,
      };
      console.log("added the item");

      addItem(newestItemToTheFamily);

      navigate("/items-for-girls");
      reset();
    } catch (error) {
      console.log("Can't add the item");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          {...register("title", {
            required: { value: true, message: "Title is required" },
          })}
        />
      </div>
      {!isValid && isSubmitted && (
        <div className="form-error">All fields are required</div>
      )}

      <div className="form-controls">
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
