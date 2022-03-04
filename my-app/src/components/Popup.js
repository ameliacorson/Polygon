import React from "react";
import { useCart } from "../helpers/cartProvider";
import { formatUSD } from "../helpers/format";

function MenuItemFormPopup({ item, closePopup }) {
  const { addItemToCart } = useCart();
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(item.price);
  const [formData, setFormData] = React.useState({
    ...item,
    choice: undefined,
    spicy: undefined,
    rice: undefined,
    quantity: 1,
  });

  const calculatePrice = React.useCallback(() => {
    const { choice, spicy, rice, quantity } = formData;
    const basePrice = item.price;
    const extras = (choice?.addprice || 0) + (spicy?.addprice || 0) + (rice?.addprice || 0);
    return (basePrice + extras) * quantity;
  }, [formData, item])

  React.useEffect(() => {
    const { choice, spicy, rice } = formData;
    const price = calculatePrice();
    const isDisabled = (!choice && item.choice) || (!spicy && item.spice) || (!rice && item.rice);
    setTotalPrice(price);
    setButtonDisabled(isDisabled);
  }, [formData, item, calculatePrice])


  const addOne = () => setFormData(state => ({ ...state, quantity: state.quantity + 1 }))
  const subtractOne = () => setFormData(state => ({ ...state, quantity: Math.max(state.quantity - 1, 1) }))

  function handleSubmit(event) {
    event.preventDefault();
    addItemToCart({
      ...formData,
      totalPrice
    })
    closePopup();
  }

  return (
    <div className="popup">
      <div className="popup-container">
        <div className="popup-container-header">
          <h2> {item.name} </h2>
          <button onClick={closePopup}> X </button>
        </div>

        <p>{formatUSD(totalPrice)}</p>
        <p>{item.description}</p>

        <form>
          <RadioOptions
            options={item.choice}
            fieldName={"choice"}
            setFormData={setFormData}
            label={"Protein"}
            showPrices
          />
          <RadioOptions
            options={item.spicy?.map(option => ({ name: option, addprice: 0 }))}
            fieldName={"spicy"}
            setFormData={setFormData}
            label={"Spice"}
          />
          <RadioOptions
            options={item.rice}
            fieldName={"rice"}
            setFormData={setFormData}
            label={"Rice"}
            showPrices
          />
          <div className="modal-footer">
            <div className="quantity-container">
              <button className="quantity-btn" type="button" onClick={subtractOne}>
                -
              </button>
              <span>{formData.quantity}</span>
              <button className="quantity-btn" type="button" onClick={addOne}>
                +
              </button>
            </div>
            <button
              className="modal-button"
              onClick={handleSubmit}
              disabled={buttonDisabled}
            >
              Add to Cart
            </button>
            {buttonDisabled && <span>please fill out above options</span>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default MenuItemFormPopup;


function RadioOptions({ options, fieldName, setFormData, label, showPrices }) {
  if (!options) return null;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    const option = options.find(option => option.name === value);
    setFormData(currentFormValues => ({
      ...currentFormValues,
      [name]: option
    }))
  }

  return (
    <fieldset onChange={handleChange}>
      <legend>Choose {label}</legend>
      {
        options.map(option => (
          <div key={`option-${option.name}`}>
            <label htmlFor={option.name}>
              {`${option.name} ${showPrices ? formatUSD(option.addprice) : ""}`}
            </label>
            <input type="radio" value={option.name} name={fieldName} />
          </div>
        ))
      }
    </fieldset>
  )
}

