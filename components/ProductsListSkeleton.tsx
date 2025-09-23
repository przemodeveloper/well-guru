const ProductListSkeleton = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{Array.from({ length: 6 }).map((_, index) => (
				<div
					key={index}
					className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse"
				>
					{/* Image skeleton with "retreat" badge */}
					<div className="relative">
						<div className="bg-gray-200 h-48 w-full"></div>
						{/* Badge skeleton */}
						<div className="absolute top-3 right-3">
							<div className="bg-gray-300 h-6 w-16 rounded-full"></div>
						</div>
					</div>

					{/* Content skeleton */}
					<div className="p-4">
						{/* Title skeleton */}
						<div className="bg-gray-200 h-6 w-3/4 rounded mb-3"></div>

						{/* Organizer name skeleton */}
						<div className="bg-gray-200 h-4 w-1/2 rounded mb-2"></div>

						{/* Location skeleton */}
						<div className="bg-gray-200 h-4 w-2/3 rounded mb-4"></div>

						{/* Price and button row */}
						<div className="flex justify-between items-center">
							{/* Price skeleton */}
							<div className="bg-gray-200 h-6 w-20 rounded"></div>

							{/* Button skeleton */}
							<div className="bg-gray-300 h-9 w-20 rounded"></div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductListSkeleton;
