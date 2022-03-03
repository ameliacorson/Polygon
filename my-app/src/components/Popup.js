import React from "react";
import { CartState } from "../Context/Context";

function Popup(props) {

   const { dispatch } = CartState()

   const [buttonDisabled, setButtonDisabled] = React.useState(false)
   
 
  const [formData, setFormData] = React.useState({
      id: props.item.id,
      name: props.item.name,
      price: props.item.price,
      description: props.item.description,
      choice: "",
      spice: "",
      rice: "",
      quantity: 1,

  });

  const [selectedItems, setSelectedItems] = React.useState({})

  React.useEffect(() => {
    setSelectedItems({
        ...formData,
        price: formData.price + (formData.choice === "beef" ? 2 : 0) + (formData.rice === "steam rice" ? 1.5 : 0) +(formData.rice === "brown rice" ? 2 : 0)
    });
}, [formData])

React.useEffect(() => {
    if(props.item.choice){
        if (formData.spice === "" | formData.rice === "" | formData.choice === "") {
            setButtonDisabled(true)
        } else if (formData.spice && formData.rice && formData.choice){
            setButtonDisabled(false)
        }
    } else {
        return
    }
    
}, [formData, props])
  
console.log(buttonDisabled)

  function addOne() {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            quantity: prevFormData.quantity + 1
        }
    })
  }

  function subOne() {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            quantity: prevFormData.quantity - 1
        }
    })
  }

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })

  }

  function handleSubmit(event) {
    event.preventDefault()
    props.closePopup()
    dispatch({
        type:'ADD_TO_CART',
        payload: selectedItems
    })
  }

  

  return (
    <div className="popup">
      <div className="popup-container container">
        <button onClick={props.closePopup}> x </button>
        <h2> {props.item.name} </h2>
        <p>{props.item.price}</p>
        <p>{props.item.description}</p>

        <form>
          {props.item.choice && (
            <fieldset>
              <legend>Choose Protein</legend>
              <input
                name="choice"
                type="radio"
                value="chicken"
                id="chicken"
                onChange={handleChange}
                checked={formData.choice === "chicken"}
              />
              <label htmlFor="chicken">Chicken</label>
              <br></br>
              <input
                name="choice"
                type="radio"
                value="beef"
                id="beef"
                onChange={handleChange}
                checked={formData.choice === "beef"}
              />
              <label htmlFor="beef">Beef (+$2.00)</label>
              <br></br>
              <input
                name="choice"
                type="radio"
                value="tofu"
                id="tofu"
                onChange={handleChange}
                checked={formData.choice === "tofu"}
              />
              <label htmlFor="tofu">Tofu</label>
              <br></br>
              <input
                name="choice"
                type="radio"
                value="veggie"
                id="veggie"
                onChange={handleChange}
                checked={formData.choice === "veggie"}
              />
              <label htmlFor="veggie">Veggie</label>
              <br></br>
            </fieldset>
          )}
          <br></br>
          {props.item.spicy && (
            <fieldset>
              <legend>Choose Spiciness Level</legend>
              <input
                name="spice"
                type="radio"
                value="mild"
                id="mild"
                onChange={handleChange}
                checked={formData.spice === "mild"}
              />
              <label htmlFor="mild">Mild</label>
              <br></br>
              <input
                name="spice"
                type="radio"
                value="medium"
                id="medium"
                onChange={handleChange}
                checked={formData.spice === "medium"}
              />
              <label htmlFor="medium">Medium</label>
              <br></br>
              <input
                name="spice"
                type="radio"
                value="hot"
                id="hot"
                onChange={handleChange}
                checked={formData.spice === "hot"}
              />
              <label htmlFor="hot">Hot</label>
              <br></br>
              <input
                name="spice"
                type="radio"
                value="extra hot"
                id="extra hot"
                onChange={handleChange}
                checked={formData.spice === "extra hot"}
              />
              <label htmlFor="extra-hot">Extra Hot</label>
              <br></br>
            </fieldset>
          )}
          <br></br>
          {props.item.rice && (
            <fieldset>
              <legend>Choose Rice</legend>
              <input
                name="rice"
                type="radio"
                value="steam rice"
                id="steam rice"
                onChange={handleChange}
                checked={formData.rice === "steam rice"}
              />
              <label htmlFor="steam-rice">Steamed Rice (+$1.50)</label>
              <br></br>
              <input
                name="rice"
                type="radio"
                value="brown rice"
                id="brown rice"
                onChange={handleChange}
                checked={formData.rice === "brown rice"}
              />
              <label htmlFor="brown-rice">Brown Rice (+$2.00)</label>
              <br></br>
              <input
                name="rice"
                type="radio"
                value="none"
                id="none"
                onChange={handleChange}
                checked={formData.rice === "none"}
              />
              <label htmlFor="none">None</label>
              <br></br>
            </fieldset>
          )}
          <button type="button" onClick={subOne}>
            -
          </button>
          <span>{formData.quantity}</span>
          <button type="button" onClick={addOne}>
            +
          </button>
          <button onClick={handleSubmit} disabled={buttonDisabled}>Add to Cart</button>
          {buttonDisabled && <span>please fill out above options</span>}
        </form>
      </div>
    </div>
  );
}

export default Popup;
