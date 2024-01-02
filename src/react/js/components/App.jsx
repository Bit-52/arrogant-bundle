import { useEffect, useState } from "react"
import getProductData from "../api.js"
import Banner from "./Banner.jsx"
import CriticalReceptionsContainer from "./CriticalReceptionsContainer.jsx"
import SystemRequirements from "./SystemRequirments.jsx"

const App = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [productData, setProductData] = useState({})

    useEffect(() => {

        const f = async () => {
            const productData = await getProductData(1)
            setProductData(productData)
            setIsLoading(false)
            console.log(productData)
        }

        f()

    }, [])

    if (!isLoading) {
        return (
            <>
                <Banner />
                <CriticalReceptionsContainer criticalReceptions={productData.critical_receptions} />
                <SystemRequirements systemRequirements={productData.system_requirements} />
            </>
        )
    }
}

export default App