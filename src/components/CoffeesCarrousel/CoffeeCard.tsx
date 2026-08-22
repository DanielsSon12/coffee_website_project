import { motion } from 'framer-motion'

const CoffeeCard = ({ item }: { item: any }) => {
	return (
		<motion.div
			className="flex w-full cursor-grab flex-col overflow-hidden rounded-2xl bg-amber-100 md:w-[95%] md:flex-row"
			whileTap={{ cursor: 'grabbing' }}
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ type: 'spring', stiffness: 100 }}
		>
			<div className="w-full md:w-2/5">
				<img
					draggable={false}
					className="pointer-events-none h-48 w-full object-cover md:h-72 md:rounded-l-2xl"
					src={item.image}
					alt={item.title}
				/>
			</div>

			<div className="w-full md:w-3/5">
				<h2 className="mt-3 text-center text-base font-bold text-amber-950 md:mt-4 md:text-lg">
					{item.title}
				</h2>

				<p className="m-3 text-justify text-sm tracking-wider text-amber-950">{item.description}</p>

				<div className="m-3">
					<ul className="list-none">
						{item.ingredients.map((ingredient: any) => (
							<li
								key={ingredient}
								className="mt-1 text-[11px] font-bold tracking-wider text-amber-800"
							>
								➜ {ingredient}
							</li>
						))}
					</ul>
				</div>
			</div>
		</motion.div>
	)
}

export default CoffeeCard
