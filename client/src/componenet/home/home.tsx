import SpendCard from "./spendCard";
import "./home.css"
import EarningSpendingChart from "./EarningChart";
import InvestMentGoalCard from './investmentGoalCard';
import EarningCard from "./earningCard";

function home() {

    return (
        <>

            <div className="flex ">
                <InvestMentGoalCard />
                <SpendCard />
                <EarningCard />
            </div>
            <span className="w-10/12 block relative mt-5 left-32">
                <EarningSpendingChart />
            </span>
            <span className="w-10/12 block relative mt-5 left-32">
                <EarningSpendingChart />
            </span>
        </>
    )
}

export default home
