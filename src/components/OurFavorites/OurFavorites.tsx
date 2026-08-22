import { motion } from 'framer-motion'

import FavoriteCard from './FavoriteCard'

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
					<FavoriteCard item={item} index={index} />
				))}
			</div>
		</div>
	)
}

export default OurFavorites
