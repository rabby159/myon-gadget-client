
import { Tb24Hours, TbBasketDollar, TbTruckDelivery } from "react-icons/tb";

const Services = () => {
    return (
        <div className="max-w-7xl mx-auto my-16">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-5">Our Services</h2>
                <p>We are committed to serve country best service.</p>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pl-10 border-y-2 p-5">
                <div className="flex gap-4">
                    <div className="bg-slate-100 rounded-full p-2 shadow-md text-5xl text-red-500">
                        <TbTruckDelivery></TbTruckDelivery>
                    </div>
                    <div >
                        <h2 className="text-2xl font-semibold">Free Delivery</h2>
                        <p>We provide fastest delivery</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="bg-slate-100 rounded-full p-2 shadow-md text-5xl text-red-500">
                        <TbBasketDollar></TbBasketDollar>
                    </div>
                    <div >
                        <h2 className="text-2xl font-semibold">30 Day Returns</h2>
                        <p>We provide Returns Guarantee</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="bg-slate-100 rounded-full p-2 shadow-md text-5xl text-red-500">
                        <Tb24Hours></Tb24Hours>
                    </div>
                    <div >
                        <h2 className="text-2xl font-semibold">24/7 Online Support</h2>
                        <p>We provide Online Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;