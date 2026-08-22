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
				{/* BANNER */}
				<ParallaxLayer offset={0} speed={0.2} className="z-10">
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
				</ParallaxLayer>

				{/* COFFEES */}
				<ParallaxLayer offset={0.65} speed={1} className="z-20">
					<div className="relative z-10 -mt-10 bg-orange-100 py-32 max-lg:-mt-20 max-md:-mt-10 max-md:py-20">
						<svg
							className="absolute -top-50 left-0 h-50 w-full max-md:-top-35 max-md:h-35"
							viewBox="300 55 1100 200"
							preserveAspectRatio="none"
						>
							<path
								fill="#451a03"
								d="M0,160 C240,60 480,60 720,160 C960,260 1200,260 1440,160 L1440,320 L0,320 Z"
							/>
						</svg>

						<svg
							className="absolute -top-35 left-0 h-48 w-full max-md:-top-25 max-md:h-30"
							viewBox="0 0 1440 320"
							preserveAspectRatio="none"
						>
							<path
								fill="#ffedd5"
								d="M0,160 C240,260 480,260 720,160 C960,60 1200,60 1440,160 L1440,320 L0,320 Z"
							/>
						</svg>

						<div className="m-auto">
							<motion.h1
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.8, ease: 'easeOut' }}
								className="font-dancing text-center text-7xl font-bold text-amber-950 max-md:text-5xl"
							>
								Coffees
							</motion.h1>
						</div>

						<div className="font-nunito relative z-10 m-auto mt-20 flex w-full max-w-7xl items-center overflow-hidden px-4 max-md:mt-12 max-md:px-6">
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
									751: {
										slidesPerView: 2,
										spaceBetween: 10,
									},
									1110: {
										slidesPerView: 3,
										spaceBetween: 15,
									},
								}}
							>
								{coffee.map((item: any) => (
									<SwiperSlide key={item.id} className="flex items-center justify-center">
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

												<p className="m-3 text-justify text-sm tracking-wider text-amber-950">
													{item.description}
												</p>

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
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>

					{/* BENEFITS */}
					<div className="relative mt-32 bg-amber-950 py-30 max-md:mt-20 max-md:py-20">
						<svg
							className="absolute -top-37 left-0 h-48 w-full max-md:-top-25 max-md:h-32"
							viewBox="0 0 1440 320"
							preserveAspectRatio="none"
						>
							<path
								fill="#451a03"
								d="M0,160 C240,60 480,60 720,160 C960,260 1200,260 1440,160 L1440,320 L0,320 Z"
							/>
						</svg>

						<div className="font-nunito relative mx-auto mt-20 flex w-full max-w-7xl items-center justify-center gap-20 px-8 max-lg:flex-col max-lg:gap-15 max-md:mt-10 max-md:gap-10 max-md:px-6">
							<motion.div
								className="flex w-1/2 justify-center max-lg:w-full"
								initial={{ opacity: 0 }}
								whileHover={{ scale: 1.1 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{
									type: 'spring',
									stiffness: 100,
									damping: 25,
								}}
							>
								<Swiper
									modules={[EffectCards]}
									effect="cards"
									slidesPerView={1}
									spaceBetween={15}
									grabCursor={true}
									className="h-110 w-75 max-lg:h-90 max-lg:w-70 max-md:h-80 max-md:w-60"
									cardsEffect={{
										slideShadows: false,
									}}
								>
									{coffee.map((item: any) => (
										<SwiperSlide key={item.id} className="flex h-auto">
											<motion.div className="h-100 w-75 overflow-hidden rounded-2xl max-lg:h-90 max-lg:w-70 max-md:h-80 max-md:w-60">
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

							<div className="flex w-1/2 items-center border-l border-amber-200 pl-12 max-lg:w-full max-lg:border-t-2 max-lg:border-l-0 max-lg:pt-10 max-md:px-2 max-md:pt-8">
								<motion.p
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8 }}
									className="font-nanito max-lg:text-md text-2xl leading-relaxed font-bold tracking-wider text-amber-100 text-shadow-gray-950 text-shadow-sm max-lg:font-black max-md:text-base max-md:leading-relaxed"
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
