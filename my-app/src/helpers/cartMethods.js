const storageKey = "shoppingCart";

export function getItemsInCart() {
  const items = localStorage.getItem(storageKey);
  return JSON.parse(items) || [];
}

export function setCartLocalState(items) {
  localStorage.setItem(storageKey, JSON.stringify(items))
}