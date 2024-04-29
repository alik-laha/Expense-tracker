import SpendCard from "./spendCard";
import "./home.css"
import EarningSpendingChart from "./spendingChart";
import InvestMentGoalCard from './investmentGoalCard';
import EarningCard from "./earningCard";
import InvestedChart from "./investmentChart";

function home() {

    return (
        <div className="ml-40">

            <div className="flex">
                <InvestMentGoalCard />
                <SpendCard />
                <EarningCard />
            </div>
            <span className="w-10/12 block relative mt-5 left-32">
                <EarningSpendingChart />
            </span>
            <span className="w-10/12 block relative mt-5 left-32">
                <InvestedChart />
            </span>
        </div>
    )
}

export default home