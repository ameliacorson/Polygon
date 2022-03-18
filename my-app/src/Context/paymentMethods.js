const storageKey1 = "deliveryKey"
const storageKey2 = "billingKey"
const storageKey3 = "ccKey"

export function getLocalDeliveryInformation() {
    const items = localStorage.getItem(storageKey1);
    return JSON.parse(items) || [];
}

export function setDeliveryLocalState(items) {
    localStorage.setItem(storageKey1, JSON.stringify(items))
}

export function getLocalBillingInformation() {
    const items = localStorage.getItem(storageKey2);
    return JSON.parse(items) || [];
}

export function setBillingLocalState(items) {
    localStorage.setItem(storageKey2, JSON.stringify(items))
}

export function getLocalCcInformation() {
    const items = localStorage.getItem(storageKey3);
    return JSON.parse(items) || [];
}

export function setCcLocalState(items) {
    localStorage.setItem(storageKey3, JSON.stringify(items))
}