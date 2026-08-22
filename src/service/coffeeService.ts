import { API_URL_COFFEE } from '@/setting'
import type { Coffee } from '@/types/coffee'

export async function getCoffees(): Promise<Coffee[]> {
	const response = await fetch(API_URL_COFFEE)

	if (!response.ok) {
		throw new Error('Falha na requisição da API!')
	}

	return response.json()
}
