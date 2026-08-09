import withDataFetch from './DataFetching'

const CoffeeList = ({ loading, coffee }: any) => {
	if (loading) {
		return <h1>Carregando...</h1>
	}

	return (
		<>
			<div className="m-auto p-8 text-center">
				<h1>Coffee Website</h1>
			</div>
			<div className="m-auto flex w-xl items-center justify-center overflow-x-auto">
				{coffee.map((item: any) => (
					<div className="m-5 rounded-md bg-amber-100 p-10" key={item.id}>
						<img className="min-h-full w-full" src={item.image} alt={item.title} />
						<h2>{item.title}</h2>
						<p>{item.description}</p>
						<div>
							<ul>
								{item.ingredients.map((ingredient: any) => (
									<li>{ingredient}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

const CoffeeListWithData = withDataFetch(CoffeeList)

export default CoffeeListWithData
