import { MenuItem } from "@/lib/mockData/menuList";
import Link from "next/link";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

const MobileNavigation = ({
  mobileNavigationOpen,
  data,
}: {
  mobileNavigationOpen: boolean;
  data: MenuItem[];
}) => {
  const [dropdownOpen, setIsDropdownOpen] = useState<null | number>(null);
  const handleDropdownClick = (id: number) => {
    setIsDropdownOpen((prev) => (prev === id ? null : id));
  };
  return (
    <ul
      className={`main-menu one-page-nav ${
        mobileNavigationOpen ? "active" : ""
      }`}
    >
      {data.map((item, index) => {
        const isOpen = index === dropdownOpen;
        return (
          <li key={index}>
            <span className="d-flex justify-content-between align-items-center">
              <Link href={item.href}>{item.label}</Link>
              {item.subMenu && (
                <span
                  onClick={() => handleDropdownClick(index)}
                  style={{
                    width: "30px",
                    height: "30px",
                    fontSize: "18px",
                    display: "block",
                  }}
                >
                  {isOpen ? (
                    <i className="fa-solid fa-minus"></i>
                  ) : (
                    <i className="fa-solid fa-plus"></i>
                  )}
                </span>
              )}
            </span>
            {item.subMenu && (
              <AnimateHeight height={isOpen ? "auto" : 0}>
                <ul className="sub-menu">
                  {item.subMenu.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link href={sub.href}>{sub.label}</Link>
                    </li>
                  ))}
                </ul>
              </AnimateHeight>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MobileNavigation;
