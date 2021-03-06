import chair from "./images/chair.png";
import book from "./images/book.png";
import plant from "./images/plant.png";
import arrow from "./images/arrow.png";

const Banner = () => {
	return (
		<div className="py-9 px-4 box-border flex flex-col w-full mx-auto  items-center justify-center  lg:max-w-max">
			<div className="text-center">
				<h1 className="text-xl font-semibold text-heading md:text-2xl lg:text-4xl">
					Act Before it’s too late!
				</h1>
				<p className="text-sub-heading text-sm mt-4 mb-8 md:text-base">
					It is a long established fact that a reader will be distracted by the
					readable content.
				</p>
			</div>
			<div className="flex flex-wrap xs-screen gap-3 mx-auto lg:flex-row lg:flex-nowrap">
				<img
					src={chair}
					alt="product"
					className="e-prod-phone md:e-prod-tab lg:e-prod-full"
				/>
				<img
					src={book}
					alt="product"
					className="e-prod-phone md:e-prod-tab lg:e-prod-full"
				/>
				<img
					src={plant}
					alt="product"
					className="e-prod-phone md:e-prod-tab lg:e-prod-full"
				/>
			</div>
			<div className="w-full flex items-center">
				<button className="font-medium mx-auto text-sm md:text-base border border-heading w-36 h-10 mt-6 md:h-11">
					Explore <img className="inline-block" src={arrow} />
				</button>
			</div>
		</div>
	);
};

export default Banner;
