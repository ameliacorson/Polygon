import { Accordion } from "react-bootstrap";
import MenuItem from "./MenuItem";

export default function MenuSection({ section, title, index, onClick }) {
  const menuElements = section.map((item) => {
    return <MenuItem menuItem={item} key={item.id} onClick={() => onClick(item.id)}/>;
  });

  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>
        <h3>{title}</h3>
      </Accordion.Header>
      <Accordion.Body>
          <div className="menu-section">
          {menuElements}
          </div>
          
        </Accordion.Body>
    </Accordion.Item>
  );
}


