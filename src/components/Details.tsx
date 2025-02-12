import { useLocation } from "react-router-dom";

const Details = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col md:flex-row p-4 gap-6">
            <img 
                src={location?.state?.data?.image} 
                alt="Product" 
                className="w-full md:w-1/2 max-w-md h-auto rounded-lg shadow-lg object-cover"
            />

            <div>
                <h1 className="font-bold text-3xl">${location?.state?.data?.price}</h1>
                <h1 className="mt-5"><span className="font-semibold">Category</span> : {location?.state?.data?.category}</h1>
                <h1 className="mt-5"><span className="font-semibold">Title</span> : {location?.state?.data?.title}</h1>
                <h1 className="mt-5"><span className="font-semibold">Description</span> : {location?.state?.data?.description}</h1>
            </div>
        </div>
    );
};

export default Details;
