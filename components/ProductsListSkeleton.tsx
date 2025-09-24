const ProductListSkeleton = ({ length }: { length: number }) => {
	return (
		<div className="flex flex-wrap gap-5 justify-center">
			{Array.from({ length: length }).map((_, index) => (
				<div key={index} className="animate-pulse">
					{/* Image skeleton with badge - matching ProductCard dimensions */}
					<div className="w-[400px] h-[200px] relative border border-gray-300 rounded mb-2">
						<div className="bg-gray-200 h-full w-full rounded"></div>
						{/* Badge skeleton */}
						<div className="absolute top-1 right-1">
							<div className="bg-gray-300 h-6 w-16 rounded-full"></div>
						</div>
					</div>

					{/* Content skeleton - matching ProductCard layout */}
					<div className="flex justify-between items-end">
						<div>
							{/* Title skeleton */}
							<div className="bg-gray-200 h-6 w-48 rounded mb-2"></div>

							{/* Organizer name skeleton */}
							<div className="bg-gray-200 h-4 w-32 rounded mb-1"></div>

							{/* Location skeleton */}
							<div className="bg-gray-200 h-4 w-40 rounded mb-2"></div>

							{/* Price skeleton */}
							<div className="bg-gray-200 h-6 w-20 rounded"></div>
						</div>

						{/* Button skeleton */}
						<div className="bg-gray-300 h-8 w-20 rounded-xl"></div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductListSkeleton;
