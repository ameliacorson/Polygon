const storageKey1 = "deliveryKey"
const storageKey2 = "ccKey"

export function getLocalDeliveryInformation() {
    const items = localStorage.getItem(storageKey1);
    return JSON.parse(items) || [];
}

export function setDeliveryLocalState(items) {
    localStorage.setItem(storageKey1, JSON.stringify(items))
}

export function getLocalCcInformation() {
    const items = localStorage.getItem(storageKey2);
    return JSON.parse(items) || [];
}

export function setCcLocalState(items) {
    localStorage.setItem(storageKey2, JSON.stringify(items))
}