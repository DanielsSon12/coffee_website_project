import withDataFetch from './DataFetching'

const CoffeeList = ({ loading, coffee }: any) => {
	if (loading) {
		return <h1>Carregando...</h1>
	}

	return (
		<main className="min-h-screen bg-orange-50">
			<div className="m-auto p-8 text-center">
				<h1>Coffee Website</h1>
			</div>
			<div className="m-auto flex w-7xl cursor-grab items-center overflow-x-auto scroll-smooth">
				{coffee.map((item: any) => (
					<div
						className="m-5 flex h-auto w-auto flex-none cursor-grab rounded-2xl bg-amber-100 p-0"
						key={item.id}
					>
						<div>
							<img
								className="h-105 w-xs rounded-l-2xl object-cover"
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
					</div>
				))}
			</div>
		</main>
	)
}

const CoffeeListWithData = withDataFetch(CoffeeList)

export default CoffeeListWithData
