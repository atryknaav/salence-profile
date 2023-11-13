import { useAtomValue } from "jotai";
import {
  statsFilled,
  orders,
  user,
  product,
  cart,
  settings,
  logout,
} from "../../svg/icons";
import { isDarkMode } from "../../contexts/themeContext";

interface OptionProps {
  name: string;
}

const Option = ({ name }: OptionProps) => {
  const isDark = useAtomValue(isDarkMode);
  const iconList: { [key: string]: JSX.Element } = {
    Overview: statsFilled,
    Product: product,
    Customers: user,
    Orders: orders,
    Checkout: cart,
    Settings: settings,
    "Log out": logout,
  };

  const icon = iconList[name];
  return (
    <div
      className={`flex gap-3 first:mt-10 text-lg p-2 duration-100 mr-4 rounded-xl hover:cursor-pointer select-none ${
        isDark
          ? "text-white hover:bg-back-dark dark:active:bg-active-dark"
          : "text-black hover:bg-slate-50 active:bg-slate-100"
      }`}
    >
      <div className={icon === statsFilled ? "text-success" : ""}>{icon}</div>
      {name}
    </div>
  );
};

export default Option;
