import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import CompanyCards from "../../Components/Company/CompanyCards";
import Category from "../../Components/Category/Category";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";


const Home = () => {

    const company = useLoaderData();
    // console.log(company)

    return (
        <div>
           <Banner></Banner>
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
            {
                company?.map(aCompany => <CompanyCards key={aCompany.id} aCompany={aCompany}></CompanyCards>)
            }
           </div>
           <Category></Category>
           <Services></Services>
           <Footer></Footer>
        </div>
    );
};

export default Home;