import { motion } from 'framer-motion'

const OurFavorites = ({ fav }: { fav: any[] }) => {
	return (
		<div className="relative bg-orange-100 py-32 max-md:py-20">
			<motion.h1
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="font-dancing text-center text-7xl font-bold text-amber-950 max-md:text-5xl"
			>
				Our Favorites
			</motion.h1>

			<p className="font-nunito mx-auto mt-5 max-w-2xl px-6 text-center text-lg text-amber-900 max-md:text-sm">
				Discover some of our favorite drinks.
			</p>

			<div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-10 px-8 max-md:mt-12 max-md:gap-6 max-md:px-6 md:grid-cols-3">
				{fav.map((item: any, index: number) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							delay: index * 0.15,
						}}
						viewport={{ once: true }}
						whileHover={{
							y: -15,
							scale: 1.03,
						}}
						className="overflow-hidden rounded-2xl bg-amber-950 shadow-xl"
					>
						<img
							src={item.image}
							alt={item.title}
							className="h-64 w-full object-cover max-md:h-52"
						/>

						<div className="p-6 max-md:p-4">
							<h2 className="font-dancing text-4xl font-bold text-amber-100 max-md:text-3xl">
								{item.title}
							</h2>

							<p className="font-nunito mt-3 text-sm leading-relaxed text-orange-100 max-md:text-sm">
								{item.description}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default OurFavorites
