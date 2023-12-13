import { useQuery } from "@tanstack/react-query"
import { redirect, useParams } from "react-router-dom"
import axios from 'axios'

export const App = () => {
	const params = useParams()
	const { isLoading, data } = useQuery({
		queryKey: [`url-${params.url}`],
		queryFn: () => axios.get<{ acf: { link: string } }[]>(`https://www.fb24m.ru/fb24m/wp-json/wp/v2/shortcuts?slug=${params.url}`)
	})

	if (data) {
		redirect(data.data[0].acf.link)
	}

	if (isLoading)
		return (
			<p>Перемещение на {params.url}</p>
		)
	if (!data?.data[0]) return <p>Ошибка. Данные скрыты в целях конфиденциальности</p>
	if (data?.data[0]) {
		location.href = data.data[0].acf.link
		return <p>{<a href={data.data[0].acf.link}>Если перемещение не произошло, перейдите напрямую {data.data[0].acf.link}</a>}</p>
	}
}