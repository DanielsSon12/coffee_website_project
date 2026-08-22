import { motion } from 'framer-motion'

import coffeeBanner from '@/assets/img/coffeeBanner.jpg'

const Banner = () => {
	return (
		<div className="relative h-150 w-full max-lg:h-200 max-md:h-170">
			<motion.div
				className="absolute mt-30 ml-70 max-lg:mt-15 max-lg:ml-20 max-md:top-20 max-md:left-1/2 max-md:ml-0 max-md:-translate-x-1/2"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 1.2,
					ease: 'easeInOut',
				}}
			>
				<h1 className="font-dancing w-70 text-8xl font-bold text-orange-200 text-shadow-amber-950 text-shadow-lg max-lg:text-7xl max-md:w-60 max-md:text-6xl">
					COFFEE WEBSITE
				</h1>
			</motion.div>

			<img src={coffeeBanner} alt="Café" className="h-full w-full object-cover" />
		</div>
	)
}

export default Banner
