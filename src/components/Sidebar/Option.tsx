import { statsFilled, orders, user, product, cart, settings, logout } from "../../svg/icons";

interface OptionProps {
    name: string;
  }
  
  const Option = ({ name }: OptionProps) => {
    const iconList: {[key: string]: JSX.Element} = {
        'Overview': statsFilled,
        'Product': product,
        'Customers': user,
        'Orders': orders,
        'Checkout': cart,
        'Settings': settings,
        'Log out': logout
    };

    const icon = iconList[name];
  return (
    <div className="dark:text-white flex gap-3 first:mt-10 text-lg dark:hover:bg-back-dark p-2 duration-100 mr-4 rounded-xl dark:active:bg-active-dark hover:cursor-pointer select-none">
        <div className={icon===statsFilled ? 'text-success' : ''}>
          {icon}
        </div>
        {name}
    </div>
  )
}

export default Option