import { useEffect, useState } from "react"
import NavApp from '../components/NavApp';

function HomePage() {
	const [data, setData] = useState([])

    const getDataUsers = async () => {
        const response = await fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
        const data = await response.json()
        console.log(data)
        setData(data);
    }

    useEffect(() => {
        getDataUsers()
    }, [])
	return (
		<>
			<NavApp data={data} />
		</>
	);
}

export default HomePage;
