import Banner from "./Banner.jsx"


// TODO put the div containers into their own components
const App = () => {
    return (
        <>
            <div className="body ctn">
                <div className="nav ctn">
                    <h1>nav</h1>
                    {/* <Nav/> */}
                </div>
                <div className="banner ctn">
                    <Banner />
                </div>
                <div className="hero ctn">
                    <h1>hero</h1>
                </div>
                {/* <Product Hero */}
                <div className='main-carousel ctn'>
                    <h1>main-carousel</h1>
                </div>
                <div className='product-description ctn'>
                    <h1>product-description</h1>
                </div>
                
            </div>

        </>
    )
}

export default App