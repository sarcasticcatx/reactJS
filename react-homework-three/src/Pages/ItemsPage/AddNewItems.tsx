import { useContext } from "react";
import { ItemsContext } from "../../Context/ItemsContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TravelListModel } from "../../model/travel-list.model";

interface FormValues {
  title: string;
  quantity: number;
}

export function AddItemPage() {
  const { list, setTwoLists } = useContext(ItemsContext);

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
        id: list.length + 1,
        title: itemData.title,
        quantity: itemData.quantity,
        isPacked: false,
      };
      console.log(list);

      setTwoLists((item) => [...item, newestItemToTheFamily]);

      navigate("/items-for-boys");
      reset();
    } catch (error) {
      console.log("Can't add the item");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          {...register("title", {
            required: { value: true, message: "Title is required" },
          })}
        />
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          type="text"
          {...register("quantity", { required: true, min: 0, max: 10000 })}
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
