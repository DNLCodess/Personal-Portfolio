import { MenuItem } from "@/lib/mockData/menuList";
import Link from "next/link";

const Navigation = ({ data }: { data: MenuItem[] }) => {
  return (
    <ul className={`main-menu one-page-nav `}>
      {data.map((item, index) => {
        return (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>

            {item.subMenu && (
              <ul className="sub-menu">
                {item.subMenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link href={sub.href}>{sub.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
