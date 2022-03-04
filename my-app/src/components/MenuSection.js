import { Accordion } from "react-bootstrap";
import MenuItem from "./MenuItem";

export default function MenuSection({ sectionData, sectionTitle, index, handleItemClick }) {
  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>
        <h3> {sectionTitle} </h3>
      </Accordion.Header>
      <Accordion.Body>
        <div className="menu-section">
          {sectionData.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              onClick={handleItemClick}
            />
          ))}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  )
}