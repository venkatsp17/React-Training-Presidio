import { useDispatch } from "react-redux";
import { buystock } from "../redux/portfolioSlice";

export const StockListItem = ({ stock }) => {

  const dispatch = useDispatch()
  const handleBuy = () => {
   dispatch( buystock(stock))
  }

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="stock-name">{stock.name}</div>
      <div>${stock.price.toFixed(2)}</div>
      <button className="buy-button" onClick={handleBuy}>Buy</button>
    </li>
  );
}