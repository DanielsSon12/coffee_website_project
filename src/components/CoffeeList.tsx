import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/index.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion } from 'framer-motion'
import { DotLoader } from 'react-spinners'
import { register } from 'swiper/element/bundle'

register()

import { useEffect, useState } from 'react'

import BannerDiv from './BannerDiv'
import BenefitsDiv from './BenefitsDiv'
import CoffeesCarrousel from './CoffeesCarrousel'
import withDataFetch from './DataFetchingCoffee'

const CoffeeList = ({ loading, coffee }: any) => {
	const [showLoading, setShowLoading] = useState(true)

	const favorites = coffee?.filter((item: any) =>
		['Latte', 'Cappuccino', 'Black Tea'].includes(item.title),
	)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])

	if (loading || showLoading) {
		return (
			<main className="m-auto flex min-h-screen items-center justify-center bg-orange-100">
				<DotLoader color="#5E350E" size={100} />
			</main>
		)
	}

	return (
		<motion.main
			className="relative min-h-screen bg-orange-100"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			<div className="fixed right-8 z-50 translate-y-1/2 opacity-70 max-md:right-4">
				<a href="https://github.com/DanielsSon12/coffee_website_project" className="github-icon">
					<motion.img
						src="https://skillicons.dev/icons?i=github"
						alt="github"
						className="w-10 max-md:w-8"
						whileHover={{ scale: 1.2, rotate: 5 }}
					/>
				</a>
			</div>

			<Parallax pages={2.8} style={{ top: '0', left: '0' }} className="relative">
				<ParallaxLayer offset={0} speed={0.2} className="z-10">
					<BannerDiv />
				</ParallaxLayer>
				<ParallaxLayer offset={0.65} speed={1} className="z-20">
					<CoffeesCarrousel coffee={coffee} />
					<BenefitsDiv coffee={coffee} />
					{/* OUR FAVORITES */}
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
							{favorites.map((item: any, index: number) => (
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
				</ParallaxLayer>
			</Parallax>
		</motion.main>
	)
}

const CoffeeListWithData = withDataFetch(CoffeeList)

export default CoffeeListWithData
