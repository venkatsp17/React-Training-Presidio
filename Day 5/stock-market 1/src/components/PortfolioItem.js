import { useDispatch } from "react-redux";
import { sellstock } from "../redux/portfolioSlice";

export const PortfolioItem = ({ stock }) => {

  const dispatch = useDispatch()
  const handleSell = () => {   
    dispatch(sellstock(stock))
  }

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="flex-row gap-0-5 stock-name">
        <span>{stock.name}</span>
        <span>( {stock.qty} )</span>
      </div>
      <div>{ (stock.qty * stock.price).toFixed(2) }</div>
      <button className="sell-button" onClick={handleSell}>Sell</button>
    </li>
  );
};
