import { formatUSD } from "../helpers/format"

export default function MenuItem({ item, onClick }) {
  return (
    <div className="menu-item" onClick={() => onClick(item.id)}>
      <div className="menu-item-header">
        <h4>{item.name}</h4>
        <p>{formatUSD(item.price)}</p>
      </div>
      <p> {item.description}</p>
    </div>
  );
}
