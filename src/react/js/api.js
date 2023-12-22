// This function performs a GET request for a single product
const getProduct = async (id) => {

    // The url for performing the API request
    const url = `/api/products/${id}`

    // Peforms the request
    const res = await fetch(url)
    const data = await res.json()

    // If there was an error, throw it
    if (data.error === true) {
        throw new Error(data.error_message)
    }

    // Otherwise, return the product object (this is the data received)
    return data
}