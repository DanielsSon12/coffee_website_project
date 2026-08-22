import '@/styles/index.css'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion } from 'framer-motion'
import { DotLoader } from 'react-spinners'
import { register } from 'swiper/element/bundle'

register()

import { useEffect, useState } from 'react'

import Banner from '../Banner/Banner'
import Benefits from '../Benefits/Benefits'
import CoffeesCarrousel from '../CoffeesCarrousel/CoffeesCarrousel'
import withDataFetch from '../DataFetchingCoffee'
import OurFavorites from '../OurFavorites/OurFavorites'

const CoffeeHome = ({ loading, coffee }: any) => {
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
					{/* Banner de fundo */}
					<Banner />
				</ParallaxLayer>
				<ParallaxLayer offset={0.65} speed={1} className="z-20">
					{/* Carrosel */}
					<CoffeesCarrousel coffee={coffee} />

					{/* Benefícios do Café */}
					<Benefits coffee={coffee} />

					{/* Favoritos do Café */}
					<OurFavorites fav={favorites} />
				</ParallaxLayer>
			</Parallax>
		</motion.main>
	)
}

const CoffeeHomeWithData = withDataFetch(CoffeeHome)

export default CoffeeHomeWithData
