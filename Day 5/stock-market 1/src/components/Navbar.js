import { useSelector } from "react-redux";

export const Navbar = () => {

  const {balance} = useSelector((state) => state.portfolio)

  return (
    <nav className="flex-row flex-space-between">
      <h1 style={{ fontWeight: 'bold' }}>Stock Market</h1>
      <h1>Balance: ${balance}</h1>
    </nav>
  );
};
