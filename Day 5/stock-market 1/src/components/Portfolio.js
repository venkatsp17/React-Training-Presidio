import { useSelector } from "react-redux";
import { STOCK_LIST } from "../store/data";
import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = () => {

  const mystocks = useSelector((state) => state.portfolio.items)



  return (
    <div className="flex-column gap-1">
      <h2>Portfolio</h2>

      <ul className="flex-column gap-1">
       {
        mystocks.map((stock)=>{
          return <PortfolioItem stock={stock}/>
        })
       }
      </ul>
    </div>
  );
};
