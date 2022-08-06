import { useState } from "react";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown__title" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <svg
          className={isOpen ? "arrow-up" : "arrow-down"}
          width="9"
          height="15"
          viewBox="0 0 13 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.48999 18.13L2.25999 19.9L12.16 9.99998L2.25999 0.0999756L0.48999 1.86998L8.61999 9.99998L0.48999 18.13Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        className={isOpen ? "dropdown__content" : "dropdown__content hidden"}
      >
        {content}
      </div>
    </div>
  );
}
