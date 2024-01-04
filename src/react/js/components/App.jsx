import Banner from "./Banner.jsx"
import CurtainModal from "./CurtainModal.jsx"
import Navbar from "./NavBar.jsx"
import Hero from "./AppContent/Hero.jsx"
import ProductDetails from "./AppContent/ProductDetails.jsx"
import ProductDescription from "./AppContent/ProductDescription.jsx"
import CriticalReception from "./AppContent/CriticalReception.jsx"
import PopularCarousel from "./AppContent/PopularCarousel.jsx"
import SystemReq from "./AppContent/SystemReq.jsx"
import Footer from "./Footer.jsx"
import ShoppingCartContext from "./ShoppingCartContext/ShoppingCartContext.mjs"
import ShoppingCartProvider from "./ShoppingCartContext/ShoppingCartProvider.jsx"


// TODO put the div containers into their own components
// TODO Context API for all app images and text content?
const App = () => {
    return (
        <>
        <ShoppingCartProvider>
            <CurtainModal />
            <Banner />
            
            <Navbar/>
            <div className='body ctn'>
                <div className="app-content ctn">
                    <Hero/>
                    <ProductDetails/>
                    <ProductDescription/>
                    <CriticalReception/>
                    <PopularCarousel/>
                    <SystemReq/>
                </div> {/* end app-content ctn */}
            </div> {/* end body ctn */}
            <Footer/>
        </ShoppingCartProvider>
        </>
    )
}

export default App