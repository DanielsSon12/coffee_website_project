import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import withDataFetch from './DataFetching'

const CoffeeList = ({ loading, coffee }: any) => {
	const carousel = useRef<HTMLDivElement>(null)
	const innerCarousel = useRef<HTMLDivElement>(null)

	const [width, setWidth] = useState(0)

	useEffect(() => {
		if (!carousel.current || !innerCarousel.current) return

		const containerWidth = carousel.current.offsetWidth
		const contentWidth = innerCarousel.current.scrollWidth

		setWidth(contentWidth - containerWidth)
	}, [coffee])

	if (loading) {
		return <h1>Carregando...</h1>
	}

	return (
		<main className="min-h-screen bg-orange-50">
			<div className="m-auto p-8 text-center">
				<h1>Coffee Website</h1>
			</div>
			<motion.div
				ref={carousel}
				className="m-auto flex w-full max-w-7xl items-center overflow-hidden scroll-smooth"
			>
				<motion.div
					ref={innerCarousel}
					className="flex cursor-grab"
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					dragElastic={0}
					whileTap={{ cursor: 'grabbing' }}
				>
					{coffee.map((item: any) => (
						<motion.div
							key={item.id}
							className="m-5 flex h-auto w-auto flex-none cursor-grab rounded-2xl bg-amber-100 p-0"
							whileTap={{ cursor: 'grabbing' }}
						>
							<div>
								<img
									draggable={false}
									className="pointer-events-none h-105 w-full max-w-xs rounded-l-2xl object-cover"
									src={item.image}
									alt={item.title}
								/>
							</div>
							<div>
								<h2 className="mt-5 text-center text-2xl font-bold text-amber-900">{item.title}</h2>
								<p className="text-md m-5 w-60 tracking-wider text-gray-800">{item.description}</p>
								<div className="m-5">
									<ul className="list-none">
										{item.ingredients.map((ingredient: any) => (
											<li className="mt-2 text-sm font-bold tracking-wider text-amber-800">
												➜ {ingredient}
											</li>
										))}
									</ul>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</main>
	)
}

const CoffeeListWithData = withDataFetch(CoffeeList)

export default CoffeeListWithData
