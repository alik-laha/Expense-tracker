import SpendCard from "./spendCard";
import EarningAndSpenting from "./earningSpentchart";
import "./home.css"
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
                <EarningAndSpenting />
            </div>
        </>
    )
}

export default home
