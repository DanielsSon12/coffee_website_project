import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/index.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion } from 'framer-motion'
import { DotLoader } from 'react-spinners'
import { register } from 'swiper/element/bundle'
import { EffectCards, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import coffeeBanner from '../assets/img/coffeeBanner.jpg'

register()

import { useEffect, useState } from 'react'

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
			<div className="fixed right-8 z-50 translate-y-1/2 opacity-70">
				<a href="https://github.com/DanielsSon12/coffee_website_project" className="github-icon">
					<motion.img
						src="https://skillicons.dev/icons?i=github"
						alt="github"
						className="w-10"
						whileHover={{ scale: 1.2, rotate: 5 }}
					/>
				</a>
			</div>
			<Parallax pages={2.3} style={{ top: '0', left: '0' }} className="relative">
				<ParallaxLayer offset={0} speed={0.2} className="z-10">
					<div className="relative h-150 w-full max-lg:h-200">
						<motion.div
							className="absolute mt-30 ml-70 overflow-hidden max-lg:mt-15 max-lg:ml-20"
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{
								duration: 2,
								ease: 'easeInOut',
							}}
						>
							<h1 className="font-dancing w-70 text-8xl font-bold text-orange-200 text-shadow-amber-950 text-shadow-lg">
								COFFEE WEBSITE
							</h1>
						</motion.div>
						<img src={coffeeBanner} alt="Café" className="h-full w-full object-cover" />
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0.65} speed={1} className="z-20">
					<div className="relative z-10 -mt-10 max-h-screen bg-orange-100 pt-30 max-lg:-mt-140 max-lg:h-220">
						<svg
							className="absolute -top-50 left-0 h-50 w-full"
							viewBox="300 55 1100 200"
							preserveAspectRatio="none"
						>
							<path
								fill="#451a03"
								d="M0,160 C240,60 480,60 720,160 C960,260 1200,260 1440,160 L1440,320 L0,320 Z"
							/>
						</svg>
						<svg
							className="absolute -top-35 left-0 h-48 w-full"
							viewBox="0 0 1440 320"
							preserveAspectRatio="none"
						>
							<path
								fill="#ffedd5"
								d="M0,160 C240,260 480,260 720,160 C960,60 1200,60 1440,160 L1440,320 L0,320 Z"
							/>
						</svg>
						<motion.div
							className="m-auto overflow-hidden"
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{ duration: 3, ease: 'easeInOut' }}
						>
							<h1 className="font-dancing mb-30 text-center text-8xl font-bold text-amber-950 max-lg:text-7xl">
								Coffees
							</h1>
						</motion.div>
						<div className="font-nunito relative z-10 m-auto flex w-full max-w-7xl items-center overflow-hidden">
							<Swiper
								modules={[EffectCoverflow]}
								effect="coverflow"
								pagination={{ clickable: true }}
								navigation
								slidesPerView={1}
								spaceBetween={15}
								grabCursor={true}
								className="w-full"
								coverflowEffect={{
									rotate: 25,
									stretch: 20,
									depth: 350,
									modifier: 1,
									slideShadows: false,
								}}
								breakpoints={{
									640: {
										slidesPerView: 1,
										spaceBetween: 10,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 10,
									},
									1289: {
										slidesPerView: 3,
										spaceBetween: 15,
									},
								}}
							>
								{coffee.map((item: any) => (
									<SwiperSlide key={item.id} className="flex h-auto items-center justify-center">
										<motion.div
											className="max-w-auto flex w-full cursor-grab rounded-2xl bg-amber-100 p-0"
											whileTap={{ cursor: 'grabbing' }}
											initial={{ opacity: 0, y: 1200 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.9, ease: 'easeOut' }}
										>
											<div className="w-4/5">
												<img
													draggable={false}
													className="pointer-events-none h-72 w-full rounded-l-2xl object-cover"
													src={item.image}
													alt={item.title}
												/>
											</div>

											<div className="w-5/5">
												<h2 className="mt-4 text-center text-lg font-bold text-amber-950 text-shadow-lg text-shadow-orange-200">
													{item.title}
												</h2>

												<p className="m-3 text-justify text-xs tracking-wider text-amber-950">
													{item.description}
												</p>

												<div className="m-3">
													<ul className="list-none">
														{item.ingredients.map((ingredient: any) => (
															<li
																key={ingredient}
																className="mt-1 text-xs font-bold tracking-wider text-amber-800"
															>
																➜ {ingredient}
															</li>
														))}
													</ul>
												</div>
											</div>
										</motion.div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>

					<div className="relative mt-32 bg-amber-950">
						<svg
							className="absolute -top-37 left-0 h-48 w-full"
							viewBox="0 0 1440 320"
							preserveAspectRatio="none"
						>
							<path
								fill="#451a03"
								d="M0,160 C240,60 480,60 720,160 C960,260 1200,260 1440,160 L1440,320 L0,320 Z"
							/>
						</svg>
						<div className="font-nunito relative m-auto flex min-h-screen w-full max-w-7xl items-center gap-20 overflow-hidden px-8 max-lg:h-200 max-lg:gap-10">
							<motion.div
								className="flex w-1/2 justify-center max-lg:w-2xl"
								whileHover={{ rotate: -2, skewX: 2, scale: 1.1 }}
								animate={{ rotate: -12, skewX: 5 }}
								transition={{ type: 'spring', stiffness: 200, damping: 25 }}
							>
								<Swiper
									modules={[EffectCards]}
									effect="cards"
									slidesPerView={1}
									spaceBetween={15}
									grabCursor={true}
									className="h-100 w-75"
									cardsEffect={{
										slideShadows: false,
									}}
								>
									{coffee.map((item: any) => (
										<SwiperSlide key={item.id} className="flex h-auto">
											<motion.div className="h-100 w-75 overflow-hidden rounded-2xl max-lg:h-90 max-lg:w-70">
												<img
													draggable={false}
													src={item.image}
													alt={item.title}
													className="pointer-events-none h-full w-full rounded-2xl object-cover"
												/>
											</motion.div>
										</SwiperSlide>
									))}
								</Swiper>
							</motion.div>
							<div className="rounded-base max-lg:w-1xl m-15 flex w-4xl items-center border-l-2 border-amber-200 pl-15 max-lg:m-0">
								<motion.p
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8 }}
									viewport={{ once: true }}
									className="font-nanito max-lg:text-md text-2xl leading-relaxed font-bold tracking-wider text-amber-100 text-shadow-gray-950 text-shadow-sm max-lg:font-black"
								>
									Coffee is a beverage that promotes many health benefits, such as preventing
									premature aging, improving physical disposition, preventing depression, and aiding
									in weight loss. These benefits of coffee are possible because this beverage is
									rich in antioxidant and anti-inflammatory bioactive compounds, such as caffeine,
									chlorogenic acid, caffeic acid, and kahweol.
								</motion.p>
							</div>
						</div>
					</div>

					<div className="relative bg-orange-100 py-32">
						<motion.h1
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="font-dancing text-center text-7xl font-bold text-amber-950"
						>
							Our Favorites
						</motion.h1>

						<p className="font-nunito mx-auto mt-5 max-w-2xl text-center text-lg text-amber-900">
							Discover some of our favorite drinks.
						</p>

						<div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-10 px-8 md:grid-cols-3">
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
									<img src={item.image} alt={item.title} className="h-64 w-full object-cover" />

									<div className="p-6">
										<h2 className="font-dancing text-4xl font-bold text-amber-100">{item.title}</h2>

										<p className="font-nunito mt-3 text-sm leading-relaxed text-orange-100">
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
