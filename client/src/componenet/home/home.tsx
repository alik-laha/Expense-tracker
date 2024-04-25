import SpendCard from "./spendCard";
import "./home.css"
import EarningSpendingChart from "./earningSpentchart";
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
            <div className="mt-5 flex">
                <EarningSpendingChart />
            </div>
        </>
    )
}

export default home
