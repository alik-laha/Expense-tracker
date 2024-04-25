import SpendCard from "./spendCard";
import "./home.css"
import EarningSpendingChart from "./Spentchart";
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
            <div className="mt-5 w-4/5 absolute left-10">
                <EarningSpendingChart />
            </div>
        </>
    )
}

export default home
