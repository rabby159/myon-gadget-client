import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import CompanyCards from "../../Components/Company/CompanyCards";


const Home = () => {

    const company = useLoaderData();
    // console.log(company)

    return (
        <div>
           <Banner></Banner>
           <div>
            {
                company?.map(aCompany => <CompanyCards key={aCompany.id} aCompany={aCompany}></CompanyCards>)
            }
           </div>
        </div>
    );
};

export default Home;