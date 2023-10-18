import PropTypes from "prop-types";

const CompanyCards = ({ aCompany }) => {
  const { logo, name } = aCompany;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-[150px] h-[150px]"
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-2xl font-semibold">{name}</h2>
        </div>
      </div>
    </div>
  );
};

CompanyCards.propTypes = {
  aCompany: PropTypes.object,
};

export default CompanyCards;
