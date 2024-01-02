import Banner from "./Banner.jsx"


// TODO put the div containers into their own components
// TODO Context API for all app images and text content?
const App = () => {
    return (
        <>
            <div className="nav ctn">
                    <h1>nav</h1>
                    {/* <Nav/> */}
                </div>
            <div className="charity-nav ctn">
                <h1>charity-nav</h1>
            </div>
            <div className="banner ctn">
                <Banner />
            </div>

            <div className='body ctn'>
                <h1>body</h1>
                <div className="app-content ctn">
                    <div className="hero ctn">
                        <h1>hero</h1>
                        <div className='product-hero ctn'>
                            <h2>Super Mario RPG</h2>
                        </div>
                        <div className='main-carousel ctn'>
                            <h1>main-carousel</h1>
                        </div>
                    </div>
                    <div className="product-details ctn">
                        <h1>product-details</h1>
                        <div>
                            PLATFORM OPERATING SYSTEM PUBLISHER
                            
                            
                            SYSTEM REQUIREMENTS
                            Learn More
                            LINKS
                            Official Website
                            Mild Fantasy Violence
                        </div>
                    </div>

                    <div className='product-description ctn'>
                        <h3>Super Mario RPG is provided via Nintendo eShop Download Code.</h3>
                        <h3>Description</h3>
                        <p>​Mario, Bowser, and Peach partner up to repair the wish-granting Star Road in this approachable role-playing adventure</p>
                        
                        <p>Team up with an oddball group of heroes to save Star Road and stop the troublemaking Smithy Gang. This colorful RPG has updated graphics and cinematics that add even more charm to the unexpected alliance between Mario, Bowser, Peach, and original characters Mallow and Geno Enter (or revisit) this world of eccentric allies and offbeat enemies in an RPG for everyone.</p>

                        <p>Jump through a colorful world and give attacks some extra oomph in battle!</p>

                        <p>Explore the vibrant environments with your party and jump towards your next goal! Run into monsters to enter turn-based battles with your party of three. Press the button at the right time for a satisfying dose of extra damage or helpful guard.</p>
                    </div>
                    <div className="critical-reception ctn">
                        <h1>critical-reception</h1>
                        <div>Much of what has changed about Super Mario RPG for the remake beyond the visuals is behind the scenes. The pace is brisker, and my hour count (even after beating the big optional boss) came in lower than the average playtime of the original. The game has been tweaked only slightly to add some new mechanics and make the adventure even more welcoming than it already was. The result is an experience that only shows its age slightly and rewards longtime fans and newcomers alike.
                        8.75 / 10
                        Kyle Hilliard Game Informer
                        </div>
                        <div>Super Mario RPG is considered a classic for a reason, and this faithful remake makes it easy for anyone who missed it in the SNES era to see why. 8 / 10 Tom Marks IGN
                        </div>
                        <div>
                        The game that kicked off Mario's RPG adventures retains its charm in this cheerful remake.
                        </div>

                    </div>
                    <div className='popular-carousel ctn'>
                        <h1>popular-carousel</h1>
                    </div>
                    <div className='system-req ctn'>
                        <h1>system-req</h1>
                        <div>
                        SYSTEM REQUIREMENTS
                        Platform: Nintendo Switch

                        Supported Languages: Dutch, English, French, German, Italian, Japanese, Korean, Simplified Chinese, Spanish, and Traditional Chinese
                        </div>
                    </div>
                    <div className='footer ctn'>
                        <h1>footer</h1>
                    </div>

                </div> {/* end app-content ctn */}
            </div> {/* end body ctn */}
        </>
    )
}

export default App