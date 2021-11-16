import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, useHistory } from 'react-router-dom';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';
import About from './About';
import Home from './Home';
import Protected from './Protected'
import SelectBrand from './SelectBrand';
import Product from './Product';
import Header from './Header';
import Gender_product from './Gender_product';
import Gender from './Gender';
import Male_category from './Male_category';
import Female_category from './Female_category';
import Category from './Category';
import Category_results from './Category_results';
import Activate from './Activate';
import Email_selectBrand from './Email_selectBrand';
import Changepassword from './Changepassword';
import Confirmpassword from './Confirmpassword';
import Bookmark from './Bookmark';
import Footer from './Footer';
import Map from './Map';
import Toprated from './Toprated';
import { recognition } from "../API/voicerecognition";
import Testing from './Testing';
import Privacy_policy from './Privacy_policy';


const Main = () => {
    const history = useHistory();
    const [stopReco, setStopReco] = useState(false);

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript;

        if (command.includes("go to") || command.includes("navigate to")) {
            if (command.includes("home") || command.includes("index")) {
                history.push("/");
            } else if (
                command.includes("contact") ||
                command.includes("contact us")
            ) {
                history.push("/contact");
            } else if (
                command.includes("tutorials") ||
                command.includes("tutorial")
            ) {
                history.push("/tutorials");
            } else if (command.includes("about") || command.includes("about us")) {
                history.push("/about");
            }
            else if (command.includes("category") || command.includes("categories")) {
                history.push("/category");
            }
            else if (command.includes("khaadi") || command.includes("khaadi")) {
                history.push("/khaadi");
            }
            else if (command.includes("male") || command.includes("men category")) {
                history.push("/men");
            }
            else if (command.includes("women") || command.includes("women category")) {
                history.push("/women");
            }
            else if (command.includes("kid") || command.includes("kids")) {
                history.push("/kid");
            }
            else if (command.includes("Top rated") || command.includes("Top rate")) {
                history.push("/toprated");
            }
            
        } else if (
            command.includes("stop listening") ||
            command.includes("stop recognition") ||
            command.includes("stop recognizing") ||
            command.includes("stop voice controlling") ||
            command.includes("stop voice control")
        ) {
            recognition.stop();
            setStopReco(true);
        }
    };

    recognition.onend = () => {
        if (!stopReco) {
            recognition.start();
        }
    };


    return (
        <>
            {/* <Header /> */}


            <Switch>

                {/* map */}



                <Route exact path='/map'>

                    <Protected component={() => {
                        return <Map center={{ lat: 33.603584, lng: 73.0759168 }}
                            height='300px'
                            zoom={15} />
                    }} />

                </Route>



                {/* Nav bar */}
                <Route exact path='/activate/:uid/:token' component={Activate} />
                
                <Route exact path='/google44b0973cac63df01.html' component={Testing} />
                <Route exact path='/password/reset/confirm/:uid/:token' component={Confirmpassword} />
                <Route exact path='/terms' component={Privacy_policy} />


                <Route exact path='/login' component={Login} />
                <Route exact path='/bookmark' component={Bookmark} />


                <Route exact path='/changepassword' component={Changepassword} />
                <Route exact path='/email_selectBrand' component={Email_selectBrand} />


                <Route exact path='/register' component={Register} />
                <Route exact path='/selectbrand' component={SelectBrand} />

                <Route exact path='/home'>
                    <Protected component={Home} />
                </Route>


                <Route exact path='/about'>
                    <Protected component={() => {
                        return <About />
                    }} /></Route>


                <Route exact path='/toprated'>
                    <Protected component={() => {
                        return <Toprated />
                    }} /></Route>

                <Route exact path='/women'>
                    <Protected component={() => {
                        return <Gender_product name="female" />
                    }} /></Route>

                <Route exact path='/men'>
                    <Protected component={() => {
                        return <Gender_product name="male" />
                    }} /></Route>

                <Route exact path='/kid'>
                    <Protected component={() => {
                        return <Gender_product name="kid" />
                    }} /></Route>


                <Route exact path='/contact'>
                    <Protected component={() => {
                        return <Contact />
                    }} /></Route>

                <Route exact path='/category'>
                    <Protected component={() => {
                        return <Category />
                    }} /></Route>



                {/* All Brands Sites */}
                <Route exact path='/khaadi'>
                    <Protected component={() => {
                        return <Gender name="khaadi" />
                    }} /></Route>
                <Route exact path='/gulahmed'>
                    <Protected component={() => {
                        return <Gender name="Gulahmed" />
                    }} /></Route>

                <Route exact path='/bata'>
                    <Protected component={() => {
                        return <Gender name="Bata" />
                    }} /></Route>

                <Route exact path='/mariab'>
                    <Protected component={() => {
                        return <Gender name="MariaB" />
                    }} /></Route>

                <Route exact path='/sanasafinaz'>
                    <Protected component={() => {
                        return <Gender name="Sanasafinaz" />
                    }} /></Route>

                <Route exact path='/borjan'>
                    <Protected component={() => {
                        return <Gender name="Borjan" />
                    }} /></Route>


                <Route exact path='/limelight'>
                    <Protected component={() => {
                        return <Gender name="Limelight" />
                    }} /></Route>


                <Route exact path='/junaidjamshed'>
                    <Protected component={() => {
                        return <Gender name="junaidjamshed" />
                    }} /></Route>


                <Route exact path='/metro'>
                    <Protected component={() => {
                        return <Gender name="Metro" />
                    }} /></Route>

                <Route exact path='/bareeze'>
                    <Protected component={() => {
                        return <Gender name="Bareeze" />
                    }} /></Route>

                <Route exact path='/alkaramstudio'>
                    <Protected component={() => {
                        return <Gender name="AlkaramStudio" />
                    }} /></Route>

                <Route exact path='/bonanza'>
                    <Protected component={() => {
                        return <Gender name="Bonanza" />
                    }} /></Route>

                <Route exact path='/warda'>
                    <Protected component={() => {
                        return <Gender name="Warda" />
                    }} /></Route>

                <Route exact path='/stylo'>
                    <Protected component={() => {
                        return <Gender name="stylo" />
                    }} /></Route>




                {/* navbar end */}

                {/* category for all brands */}
                <Route exact path='/women_bag'>
                    <Protected component={() => {
                        return <Category_results name='female-bags' />
                    }} /></Route>

                <Route exact path='/women_shawl'>
                    <Protected component={() => {
                        return <Category_results name='female-shawl' />
                    }} /></Route>


                <Route exact path='/jewellery'>
                    <Protected component={() => {
                        return <Category_results name='female-jewellery' />
                    }} /></Route>
                <Route exact path='/fragrances'>
                    <Protected component={() => {
                        return <Category_results name='female-fragrances' />
                    }} /></Route>


                <Route exact path='/cosmetics'>
                    <Protected component={() => {
                        return <Category_results name='female-cosmetics' />
                    }} /></Route>

                <Route exact path='/male_eastren_stitched'>
                    <Protected component={() => {
                        return <Category_results name='male-kameezshalwar_stitched' />
                    }} /></Route>


                <Route exact path='/male_westren'>
                    <Protected component={() => {
                        return <Category_results name='male-shirt_pant' />
                    }} /></Route>


                <Route exact path='/male_eastren_unstitched'>
                    <Protected component={() => {
                        return <Category_results name='male-kameezshalwar_unstitched' />
                    }} /></Route>

                <Route exact path='/male_shoes'>
                    <Protected component={() => {
                        return <Category_results name='male-shoes' />
                    }} /></Route>


                <Route exact path='/female_eastren_stitched'>
                    <Protected component={() => {
                        return <Category_results name='female-kameezshalwar_stitched' />
                    }} /></Route>


                <Route exact path='/female_westren'>
                    <Protected component={() => {
                        return <Category_results name='female-shirt_pant' />
                    }} /></Route>


                <Route exact path='/female_eastren_unstitched'>
                    <Protected component={() => {
                        return <Category_results name='female-kameezshalwar_unstitched' />
                    }} /></Route>


                <Route exact path='/female_shoes'>
                    <Protected component={() => {
                        return <Category_results name='female-shoes' />
                    }} /></Route>

                <Route exact path='/female_trouser'>
                    <Protected component={() => {
                        return <Category_results name='female-pant' />
                    }} /></Route>

                <Route exact path='/female_shirt'>
                    <Protected component={() => {
                        return <Category_results name='female-shirt' />
                    }} /></Route>

                {/* category all brands end */}


                {/* Male category for all brands */}
                <Route exact path='/gulahmed-male_category'>
                    <Protected component={() => {
                        return <Male_category name='gulahmed' />
                    }} /></Route>

                <Route exact path='/khaadi-male_category'>
                    <Protected component={() => {
                        return <Male_category name='khaadi' />
                    }} /></Route>


                <Route exact path='/sanasafinaz-male_category'>
                    <Protected component={() => {
                        return <Male_category name='Sana safinaz' />
                    }} /></Route>

                <Route exact path='/mariab-male_category'>
                    <Protected component={() => {
                        return <Male_category name='Mariab' />
                    }} /></Route>

                {/* Male category end */}

                {/* female catery start */}
                <Route exact path='/gulahmed-female_category'>
                    <Protected component={() => {
                        return <Female_category name='gulahmed' />
                    }} /></Route>

                <Route exact path='/khaadi-female_category'>
                    <Protected component={() => {
                        return <Female_category name='khaadi' />
                    }} /></Route>


                <Route exact path='/sanasafinaz-female_category'>
                    <Protected component={() => {
                        return <Female_category name='Sanasafinaz' />
                    }} /></Route>

                <Route exact path='/mariab-female_category'>
                    <Protected component={() => {
                        return <Female_category name='Mariab' />
                    }} /></Route>

                {/* female category  end*/}






                {/* Gulahmed male */}

                <Route exact path='/gulahmed-male_westren'>
                    <Protected component={() => {
                        return <Product name="Gul Ahmed-male-shirt_pant" />
                    }} /></Route>
                <Route exact path='/gulahmed-male_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="Gul Ahmed-male-kameezshalwar_unstitched" />
                    }} /></Route>
                <Route exact path='/gulahmed-male_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="Gul Ahmed-male-kameezshalwar_stitched" />
                    }} /></Route>




                {/* gulahmed female */}
                <Route exact path='/gulahmed-female_westren'>
                    <Protected component={() => {
                        return <Product name="Gul Ahmed-female-shirt_pant" />
                    }} /></Route>

                <Route exact path='/gulahmed-female_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="Gul Ahmed-female-kameezshalwar_stitched" />
                    }} /></Route>
                <Route exact path='/gulahmed-female_eastren_unstitched'>

                    <Protected component={() => {
                        return <Product name="Gul Ahmed-female-kameezshalwar_unstitched" />
                    }} /></Route>

                <Route exact path='/gulahmed-female_shirt'>
                    <Protected component={() => {
                        return <Product name="Gul Ahmed-female-shirt" />
                    }} /></Route>

                <Route exact path='/gulahmed-female_trouser'>
                    <Protected component={() => {
                        return <Product name="Gul Ahmed-female-pant" />
                    }} /></Route>

                <Route exact path='/gulahmed-female_shawl'>
                    <Protected component={() => {
                        return <Product name="Gul Ahmed-female-shawl" />
                    }} /></Route>
                {/* gulahmed kid */}
                <Route exact path='/gulahmed-kid_category'>
                    <Protected component={() => {
                        return <Product name="Gul Ahmed-kid-shirt_pant" />
                    }} /></Route>


                {/********************** *Gulahmed End here********************* */}


                {/* khaadi male */}

                <Route exact path='/khaadi-male_westren'>
                    <Protected component={() => {
                        return <Product name="Khaadi-male-shirt_pant" />
                    }} /></Route>
                <Route exact path='/khaadi-male_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="Khaadi-male-kameezshalwar_unstitched" />
                    }} /></Route>
                <Route exact path='/khaadi-male_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="Khaadi-male-kameezshalwar_stitched" />
                    }} /></Route>



                {/************************  Khaadi female *******************/}
                <Route exact path='/khaadi-female_westren'>
                    <Protected component={() => {
                        return <Product name="khaadi-female-shirt_pant" />
                    }} /></Route>

                <Route exact path='/khaadi-female_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="khaadi-female-kameezshalwar_stitched" />
                    }} /></Route>

                <Route exact path='/khaadi-female_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="khaadi-female-kameezshalwar_unstitched" />
                    }} /></Route>

                <Route exact path='/khaadi-female_shirt'>
                    <Protected component={() => {
                        return <Product name="khaadi-female-shirt" />
                    }} /></Route>

                <Route exact path='/khaadi-female_trouser'>
                    <Protected component={() => {
                        return <Product name="khaadi-female-pant" />
                    }} /></Route>

                <Route exact path='/khaadi-female_shawl'>
                    <Protected component={() => {
                        return <Product name="khaadi-female-shawl" />
                    }} /></Route>
                {/* gulahmed kid */}
                <Route exact path='/khaadi-kid_category'>
                    <Protected component={() => {
                        return <Product name="khaadi-kid-shirt_pant" />
                    }} /></Route>

                {/* ********************************Khaadi end here****************************** */}

                {/* ****************Bata************ */}

                {/* Bata Male */}
                <Route exact path='/bata-male_category'>
                    <Protected component={() => {
                        return <Product name="bata-male-shoes" />
                    }} /></Route>

                {/* Bata Female */}
                <Route exact path='/bata-female_category'>
                    <Protected component={() => {
                        return <Product name="bata-female-shoes" />
                    }} /></Route>


                {/* Bata kid */}
                <Route exact path='/bata-kid_category'>
                    <Protected component={() => {
                        return <Product name="bata-kid-shoes" />
                    }} /></Route>
                {/* *************************bata end************************** */}

                {/* ****************borjan************ */}

                {/* borjan Male */}
                <Route exact path='/borjan-male_category'>
                    <Protected component={() => {
                        return <Product name="borjan-male-shoes" />
                    }} /></Route>

                {/* borjan Female */}
                <Route exact path='/borjan-female_category'>
                    <Protected component={() => {
                        return <Product name="borjan-female-shoes" />
                    }} /></Route>


                {/* borjan kid */}
                <Route exact path='/borjan-kid_category'>
                    <Protected component={() => {
                        return <Product name="borjan-kid-shoes" />
                    }} /></Route>
                {/* *************************borjan end************************** */}



                {/* *******************Sana Safinaz ************************* */}

                {/* sanasafinaz male */}

                <Route exact path='/sanasafinaz-male_westren'>
                    <Protected component={() => {
                        return <Product name="Sana Safinaz-male-shirt_pant" />
                    }} /></Route>
                <Route exact path='/sanasafinaz-male_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="Sana Safinaz-male-kameezshalwar_unstitched" />
                    }} /></Route>
                <Route exact path='/sanasafinaz-male_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="Sana Safinaz-male-kameezshalwar_stitched" />
                    }} /></Route>



                {/* sansafunaz female */}
                <Route exact path='/sanasafinaz-female_westren'>
                    <Protected component={() => {
                        return <Product name="sana safinaz-female-shirt_pant" />
                    }} /></Route>

                <Route exact path='/sanasafinaz-female_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="Sana Safinaz-female-kameezshalwar_stitched" />
                    }} /></Route>

                <Route exact path='/sanasafinaz-female_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="sana safinaz-female-kameezshalwar_unstitched" />
                    }} /></Route>

                <Route exact path='/sanasafinaz-female_shirt'>
                    <Protected component={() => {
                        return <Product name="sana safinaz-female-shirt" />
                    }} /></Route>

                <Route exact path='/sanasafinaz-female_trouser'>
                    <Protected component={() => {
                        return <Product name="sana safinaz-female-pant" />
                    }} /></Route>

                <Route exact path='/sanasafinaz-female_shawl'>
                    <Protected component={() => {
                        return <Product name="sana safinaz-female-shawl" />
                    }} /></Route>
                {/* gulahmed kid */}
                <Route exact path='/sanasafinaz-kid_category'>
                    <Protected component={() => {
                        return <Product name="sana safinaz-kid-shirt_pant" />
                    }} /></Route>
                {/* **************************Sana Safinaz end here*********************** */}



                {/* *******************Maria.B start************************* */}

                {/* Maria male */}

                <Route exact path='/mariab-male_westren'>
                    <Protected component={() => {
                        return <Product name="MariaB-male-shirt_pant" />
                    }} /></Route>
                <Route exact path='/mariab-male_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="MariaB-male-kameezshalwar_unstitched" />
                    }} /></Route>
                <Route exact path='/mariab-male_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="MariaB-male-kameezshalwar_stitched" />
                    }} /></Route>

                {/* mariab male */}


                <Route exact path='/mariab-female_westren'>
                    <Protected component={() => {
                        return <Product name="MariaB-female-shirt_pant" />
                    }} /></Route>

                <Route exact path='/mariab-female_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="MariaB-female-kameezshalwar_stitched" />
                    }} /></Route>

                <Route exact path='/mariab-female_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="MariaB-female-kameezshalwar_unstitched" />
                    }} /></Route>

                <Route exact path='/mariab-female_shirt'>
                    <Protected component={() => {
                        return <Product name="MariaB-female-shirt" />
                    }} /></Route>

                <Route exact path='/mariab-female_trouser'>
                    <Protected component={() => {
                        return <Product name="MariaB-female-pant" />
                    }} /></Route>

                <Route exact path='/mariab-female_shawl'>
                    <Protected component={() => {
                        return <Product name="MariaB-female-shawl" />
                    }} /></Route>
                {/* gulahmed kid */}
                <Route exact path='/mariab-kid_category'>
                    <Protected component={() => {
                        return <Product name="MariaB-kid-shirt_pant" />
                    }} /></Route>
                {/* **************************Maria.B end here*********************** */}


                {/* ********************Warda****************************** */}

                {/* warda male */}
                <Route exact path='/warda-male_category'>
                    <Protected component={() => {
                        return <Male_category name='Warda' />
                    }} /></Route>

                <Route exact path='/warda-male_westren'>
                    <Protected component={() => {
                        return <Product name="warda-male-shirt_pant" />
                    }} /></Route>
                <Route exact path='/warda-male_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="warda-male-kameezshalwar_unstitched" />
                    }} /></Route>
                <Route exact path='/warda-male_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="warda-male-kameezshalwar_stitched" />
                    }} /></Route>




                {/* warda female */}

                <Route exact path='/warda-female_category'>
                    <Protected component={() => {
                        return <Female_category name='Warda' />
                    }} /></Route>
                <Route exact path='/warda-female_westren'>
                    <Protected component={() => {
                        return <Product name="warda-female-shirt_pant" />
                    }} /></Route>

                <Route exact path='/warda-female_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="warda-female-kameezshalwar_stitched" />
                    }} /></Route>
                <Route exact path='/warda-female_eastren_unstitched'>

                    <Protected component={() => {
                        return <Product name="warda-female-kameezshalwar_unstitched" />
                    }} /></Route>

                <Route exact path='/warda-female_shirt'>
                    <Protected component={() => {
                        return <Product name="warda-female-shirt" />
                    }} /></Route>

                <Route exact path='/warda-female_trouser'>
                    <Protected component={() => {
                        return <Product name="warda-female-pant" />
                    }} /></Route>

                <Route exact path='/warda-female_shawl'>
                    <Protected component={() => {
                        return <Product name="warda-female-shawl" />
                    }} /></Route>
                {/* warda kid */}
                <Route exact path='/warda-kid_category'>
                    <Protected component={() => {
                        return <Product name="warda-kid-shirt_pant" />
                    }} /></Route>


                {/********************** *warda End here********************* */}


                {/* ********************limelight****************************** */}

                {/* limelight male */}
                <Route exact path='/limelight-male_category'>
                    <Protected component={() => {
                        return <Male_category name='Limelight' />
                    }} /></Route>

                <Route exact path='/limelight-male_westren'>
                    <Protected component={() => {
                        return <Product name="limelight-male-shirt_pant" />
                    }} /></Route>
                <Route exact path='/limelight-male_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="limelight-male-kameezshalwar_unstitched" />
                    }} /></Route>
                <Route exact path='/limelight-male_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="limelight-male-kameezshalwar_stitched" />
                    }} /></Route>




                {/* limelight female */}

                <Route exact path='/limelight-female_category'>
                    <Protected component={() => {
                        return <Female_category name='limelight' />
                    }} /></Route>
                <Route exact path='/limelight-female_westren'>
                    <Protected component={() => {
                        return <Product name="limelight-female-shirt_pant" />
                    }} /></Route>

                <Route exact path='/limelight-female_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="limelight-female-kameezshalwar_stitched" />
                    }} /></Route>
                <Route exact path='/limelight-female_eastren_unstitched'>

                    <Protected component={() => {
                        return <Product name="limelight-female-kameezshalwar_unstitched" />
                    }} /></Route>

                <Route exact path='/limelight-female_shirt'>
                    <Protected component={() => {
                        return <Product name="limelight-female-shirt" />
                    }} /></Route>

                <Route exact path='/limelight-female_trouser'>
                    <Protected component={() => {
                        return <Product name="limelight-female-pant" />
                    }} /></Route>

                <Route exact path='/limelight-female_shawl'>
                    <Protected component={() => {
                        return <Product name="limelight-female-shawl" />
                    }} /></Route>
                {/* gulahmed kid */}
                <Route exact path='/limelight-kid_category'>
                    <Protected component={() => {
                        return <Product name="limelight-kid-shirt_pant" />
                    }} /></Route>





                {/********************** *limelight End here********************* */}


                {/* ********************j.****************************** */}

                {/* j. male */}
                <Route exact path='/junaidjamshed-male_category'>
                    <Protected component={() => {
                        return <Male_category name='JunaidJamshed' />
                    }} /></Route>

                <Route exact path='/junaidjamshed-male_westren'>
                    <Protected component={() => {
                        return <Product name="junaid jamshed-male-shirt_pant" />
                    }} /></Route>
                <Route exact path='/junaidjamshed-male_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="junaid jamshed-male-kameezshalwar_unstitched" />
                    }} /></Route>
                <Route exact path='/junaidjamshed-male_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="junaid jamshed-male-kameezshalwar_stitched" />
                    }} /></Route>




                {/* j. female */}

                <Route exact path='/junaidjamshed-female_category'>
                    <Protected component={() => {
                        return <Female_category name='junaidjamshed' />
                    }} /></Route>
                <Route exact path='/junaidjamshed-female_westren'>
                    <Protected component={() => {
                        return <Product name="Junaid Jamshed-female-shirt_pant" />
                    }} /></Route>

                <Route exact path='/junaidjamshed-female_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="junaid jamshed-female-kameezshalwar_stitched" />
                    }} /></Route>
                <Route exact path='/junaidjamshed-female_eastren_unstitched'>

                    <Protected component={() => {
                        return <Product name="junaid jamshed-female-kameezshalwar_unstitched" />
                    }} /></Route>

                <Route exact path='/junaidjamshed-female_shirt'>
                    <Protected component={() => {
                        return <Product name="junaid jamshed-female-shirt" />
                    }} /></Route>

                <Route exact path='/junaidjamshed-female_trouser'>
                    <Protected component={() => {
                        return <Product name="junaid jamshed-female-pant" />
                    }} /></Route>

                <Route exact path='/junaidjamshed-female_shawl'>
                    <Protected component={() => {
                        return <Product name="junaid jamshed-female-shawl" />
                    }} /></Route>
                {/* j. kid */}
                <Route exact path='/junaidjamshed-kid_category'>
                    <Protected component={() => {
                        return <Product name="junaid jamshed-kid-shirt_pant" />
                    }} /></Route>


                {/********************** *j. End here********************* */}

                {/* ****************metro************ */}

                {/* metro Male */}
                <Route exact path='/metro-male_category'>
                    <Protected component={() => {
                        return <Product name="metro-male-shoes" />
                    }} /></Route>

                {/* metro Female */}
                <Route exact path='/metro-female_category'>
                    <Protected component={() => {
                        return <Product name="metro-female-shoes" />
                    }} /></Route>


                {/* metro kid */}
                <Route exact path='/metro-kid_category'>
                    <Protected component={() => {
                        return <Product name="metro-kid-shoes" />
                    }} /></Route>
                {/* *************************metro end************************** */}

                {/* ****************stylo************ */}

                {/* stylo Male */}
                <Route exact path='/stylo-male_category'>
                    <Protected component={() => {
                        return <Product name="stylo-male-shoes" />
                    }} /></Route>

                {/* stylo Female */}
                <Route exact path='/stylo-female_category'>
                    <Protected component={() => {
                        return <Product name="stylo-female-shoes" />
                    }} /></Route>


                {/* stylo kid */}
                <Route exact path='/stylo-kid_category'>
                    <Protected component={() => {
                        return <Product name="stylo-kid-shoes" />
                    }} /></Route>
                {/* *************************stylo end************************** */}

                {/* limelight ***************************************male */}
                <Route exact path='/bareeze-male_category'>
                    <Protected component={() => {
                        return <Male_category name='bareeze' />
                    }} /></Route>

                <Route exact path='/bareeze-male_westren'>
                    <Protected component={() => {
                        return <Product name="bareeze-male-shirt_pant" />
                    }} /></Route>
                <Route exact path='/bareeze-male_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="bareeze-male-kameezshalwar_unstitched" />
                    }} /></Route>
                <Route exact path='/bareeze-male_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="bareeze-male-kameezshalwar_stitched" />
                    }} /></Route>
                {/* bareeze female */}

                <Route exact path='/bareeze-female_category'>
                    <Protected component={() => {
                        return <Female_category name='bareeze' />
                    }} /></Route>
                <Route exact path='/bareeze-female_westren'>
                    <Protected component={() => {
                        return <Product name="bareeze-female-shirt_pant" />
                    }} /></Route>

                <Route exact path='/bareeze-female_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="bareeze-female-kameezshalwar_stitched" />
                    }} /></Route>
                <Route exact path='/bareeze-female_eastren_unstitched'>

                    <Protected component={() => {
                        return <Product name="bareeze-female-kameezshalwar_unstitched" />
                    }} /></Route>

                <Route exact path='/bareeze-female_shirt'>
                    <Protected component={() => {
                        return <Product name="bareeze-female-shirt" />
                    }} /></Route>

                <Route exact path='/bareeze-female_trouser'>
                    <Protected component={() => {
                        return <Product name="bareeze-female-pant" />
                    }} /></Route>

                <Route exact path='/bareeze-female_shawl'>
                    <Protected component={() => {
                        return <Product name="bareeze-female-shawl" />
                    }} /></Route>
                {/* bareeze kid */}
                <Route exact path='/bareeze-kid_category'>
                    <Protected component={() => {
                        return <Product name="bareeze-kid-shirt_pant" />
                    }} /></Route>


                {/********************** *Bareeze End here********************* */}


                {/* bonanza ***************************************male */}
                <Route exact path='/bonanza-male_category'>
                    <Protected component={() => {
                        return <Male_category name='bonanza' />
                    }} /></Route>

                <Route exact path='/bonanza-male_westren'>
                    <Protected component={() => {
                        return <Product name="bonanza-male-shirt_pant" />
                    }} /></Route>
                <Route exact path='/bonanza-male_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="bonanza-male-kameezshalwar_unstitched" />
                    }} /></Route>
                <Route exact path='/bonanza-male_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="bonanza-male-kameezshalwar_stitched" />
                    }} /></Route>
                {/* bareeze female */}

                <Route exact path='/bonanza-female_category'>
                    <Protected component={() => {
                        return <Female_category name='bonanza' />
                    }} /></Route>
                <Route exact path='/bonanza-female_westren'>
                    <Protected component={() => {
                        return <Product name="bonanza-female-shirt_pant" />
                    }} /></Route>

                <Route exact path='/bonanza-female_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="bonanza-female-kameezshalwar_stitched" />
                    }} /></Route>
                <Route exact path='/bonanza-female_eastren_unstitched'>

                    <Protected component={() => {
                        return <Product name="bonanza-female-kameezshalwar_unstitched" />
                    }} /></Route>

                <Route exact path='/bonanza-female_shirt'>
                    <Protected component={() => {
                        return <Product name="bonanza-female-shirt" />
                    }} /></Route>

                <Route exact path='/bonanza-female_trouser'>
                    <Protected component={() => {
                        return <Product name="bonanza-female-pant" />
                    }} /></Route>

                <Route exact path='/bonanza-female_shawl'>
                    <Protected component={() => {
                        return <Product name="bonanza-female-shawl" />
                    }} /></Route>
                {/* bonanza kid */}
                <Route exact path='/bonanza-kid_category'>
                    <Protected component={() => {
                        return <Product name="bonanza-kid-shirt_pant" />
                    }} /></Route>


                {/********************** *bonanza End here********************* */}



                {/* bonanza ***************************************male */}
                <Route exact path='/alkaramstudio-male_category'>
                    <Protected component={() => {
                        return <Male_category name='bonanza' />
                    }} /></Route>

                <Route exact path='/alkaramstudio-male_westren'>
                    <Protected component={() => {
                        return <Product name="alkaram studio-male-shirt_pant" />
                    }} /></Route>
                <Route exact path='/alkaramstudio-male_eastren_unstitched'>
                    <Protected component={() => {
                        return <Product name="alkaram studio-male-kameezshalwar_unstitched" />
                    }} /></Route>
                <Route exact path='/alkaramstudio-male_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="alkaram studio-male-kameezshalwar_stitched" />
                    }} /></Route>
                {/* bareeze female */}

                <Route exact path='/alkaramstudio-female_category'>
                    <Protected component={() => {
                        return <Female_category name='alkaramstudio' />
                    }} /></Route>
                <Route exact path='/alkaramstudio-female_westren'>
                    <Protected component={() => {
                        return <Product name="alkaram studio-female-shirt_pant" />
                    }} /></Route>

                <Route exact path='/alkaramstudio-female_eastren_stitched'>
                    <Protected component={() => {
                        return <Product name="alkaram studio-female-kameezshalwar_stitched" />
                    }} /></Route>
                <Route exact path='/alkaramstudio-female_eastren_unstitched'>

                    <Protected component={() => {
                        return <Product name="alkaram studio-female-kameezshalwar_unstitched" />
                    }} /></Route>

                <Route exact path='/alkaramstudio-female_shirt'>
                    <Protected component={() => {
                        return <Product name="alkaram studio-female-shirt" />
                    }} /></Route>

                <Route exact path='/alkaramstudio-female_trouser'>
                    <Protected component={() => {
                        return <Product name="alkaram studio-female-pant" />
                    }} /></Route>

                <Route exact path='/alkaramstudio-female_shawl'>
                    <Protected component={() => {
                        return <Product name="alkaram studio-female-shawl" />
                    }} /></Route>
                {/* bonanza kid */}
                <Route exact path='/alkaramstudio-kid_category'>
                    <Protected component={() => {
                        return <Product name="alkaram studio-kid-shirt_pant" />
                    }} /></Route>


                {/********************** *bonanza End here********************* */}







                {/* <Route component={Error} /> */}
                <Redirect to='/home' />








            </Switch>



        </>
    )
}
export default Main;