export function formatUSD(num) {
    return num.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
}