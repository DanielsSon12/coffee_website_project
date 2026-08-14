import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../index.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion } from 'framer-motion'
import { DotLoader } from 'react-spinners'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

import coffeeBanner from '../assets/img/coffeeBanner.jpg'

register()

import { useEffect, useState } from 'react'

import withDataFetch from './DataFetchingCoffee'

const CoffeeList = ({ loading, coffee }: any) => {
	const [showLoading, setShowLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])

	if (loading || showLoading) {
		return (
			<main className="m-auto flex min-h-screen items-center justify-center bg-orange-50">
				<DotLoader color="#5E350E" size={100} />
			</main>
		)
	}

	return (
		<main className="relative min-h-screen bg-orange-100">
			<Parallax pages={2}>
				<ParallaxLayer offset={0} speed={0.2} className="z-0">
					<div className="h-150 w-full">
						<img src={coffeeBanner} alt="Café" className="h-full w-full object-cover" />
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0.65} speed={1} className="z-10">
					<section className="relative z-10 -mt-20 min-h-screen bg-orange-100 pt-32">
						<svg
							className="absolute -top-37 left-0 h-48 w-full"
							viewBox="0 0 1440 320"
							preserveAspectRatio="none"
						>
							<path
								fill="#ffedd5"
								d="M0,160 C240,260 480,260 720,160 C960,60 1200,60 1440,160 L1440,320 L0,320 Z"
							/>
						</svg>
						<div className="relative z-10 m-auto flex w-full max-w-7xl items-center overflow-hidden">
							<Swiper
								slidesPerView={3}
								spaceBetween={30}
								grabCursor={true}
								className="w-full"
								breakpoints={{
									640: {
										slidesPerView: 1,
										spaceBetween: 10,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 10,
									},
									1024: {
										slidesPerView: 3,
										spaceBetween: 10,
									},
								}}
								pagination={{ clickable: true }}
								navigation
							>
								{coffee.map((item: any) => (
									<SwiperSlide key={item.id} className="flex h-auto items-center justify-center">
										<motion.div
											className="flex w-full max-w-md cursor-grab rounded-2xl bg-amber-100 p-0"
											whileTap={{ cursor: 'grabbing' }}
										>
											<div className="w-1/2">
												<img
													draggable={false}
													className="pointer-events-none h-72 w-full rounded-l-2xl object-cover"
													src={item.image}
													alt={item.title}
												/>
											</div>

											<div className="w-1/2">
												<h2 className="mt-4 text-center text-lg font-bold text-amber-900">
													{item.title}
												</h2>

												<p className="m-3 text-justify text-xs tracking-wider text-gray-800">
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
					</section>
				</ParallaxLayer>
			</Parallax>
		</main>
	)
}

const CoffeeListWithData = withDataFetch(CoffeeList)

export default CoffeeListWithData
