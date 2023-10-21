/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CompanyCards = ({ aCompany }) => {

  const {logo, name} = aCompany;

  return (
    <div>
      <Link to={`/companyProduct`}>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="w-[150px] h-[150px]" src={logo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl font-semibold">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

CompanyCards.propTypes = {
  aCompany: PropTypes.object,
};

export default CompanyCards;
