import PropTypes from "prop-types";

const CategoryCard = ({category}) => {

    const {name, logo} = category


    return (
        <div>
            <div>
                <div className="flex justify-center">
                    <img className="w-[150px] h-[150px]" src={logo} alt="" />
                </div>
                <div>
                    <h2 className="text-center">{name}</h2>
                </div>
            </div>
        </div>
    );
};

CategoryCard.propTypes={
    category: PropTypes.object
}

export default CategoryCard;