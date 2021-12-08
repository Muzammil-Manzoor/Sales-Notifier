import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import '../style.css';


const SelectBrand = () => {
    useEffect(() => {
        if (!localStorage.getItem('name')) {
            history.push('./login')
        }
    }, [])

    const [load, setLoad] = useState(false);


    const history = useHistory();

    const [brand, setBrand] = useState([]);

    const handleCheck = (e) => {
        if (e.target.checked) {
            console.warn(brand.length)
            if (brand.length < 3) {
                setBrand([...brand, e.target.value])

            }
            else {
                alert("Select 3 brands")
                e.target.checked = false
            }
        }
        else {
            setBrand(brand.filter(b => b !== e.target.value))

        }
    }

    var brand_str = brand.toString();
    const username = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const item = { first_name: username, email: email, re_password: password, password: password, interested_brands: brand_str, recommended_brands: "" };
    const submit = async (e) => {
        setLoad(true);

        e.preventDefault();
        const response = await fetch('https://sales-notifierb.herokuapp.com/auth/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        });
        console.warn('****************' + response.status)
        if (response.status == 201) {
            console.warn("************************Successful****************")
            localStorage.setItem("name", username)
            alert("Activation link has been send to your email")
            history.push('/login')
        }
        else {
            console.warn("Eror login again")
            console.warn(response)
            console.warn('************************')
            console.warn(response.email)

            const content = await response.json();

            alert('Password is too common')

            history.push('/register')

        }
        setTimeout(() => {
            setLoad(false);
        }, 2000)




    }
    console.warn(brand)



    return (
        <>

            <body className="body1">
                <div className="wrapper1">
                    
                    <form>

                        <div className="container1">
                            <div class="container">
                            <div className="title1">
                        <h2 class="h2" class="font-effect-neon">Select your favorite Brands from below List</h2>

                            </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <div className="shake-slow">
                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="GULAHMED" onChange={handleCheck} />
                                                <div className="option_inner whatsapp">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name "><span style={{ 'fontWeight': 'bold' }}> GulAhmed</span></div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-sm">

                                        <div className="shake-slow">
                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="JUNAIDJAMSHED" onChange={handleCheck} />
                                                <div className="option_inner facebook">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> J.</span></div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-sm">

                                        <div className="shake-slow">
                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="WARDA" onChange={handleCheck} />
                                                <div className="option_inner twitter">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Warda</span></div>
                                                </div>
                                            </label>
                                        </div>

                                    </div>
                                    <div class="col-sm">

                                        <div className="shake-slow">
                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="SANASAFINAZ" onChange={handleCheck} />
                                                <div className="option_inner instagram">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Sana Safinaz</span></div>      </div>
                                            </label>
                                        </div>
                                    </div>

                              

                                    <div class="col-sm">

                                        <div className="shake-slow">
                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="BATA" onChange={handleCheck} />
                                                <div className="option_inner whatsapp">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Bata</span></div>      </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-sm">

                                        <div className="shake-slow">
                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="KHAADI" onChange={handleCheck} />
                                                <div className="option_inner google">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Khaadi</span></div>      </div>
                                            </label>
                                        </div>
                                    </div>

                                

                                  

                                    <div class="col-sm">

                                        <div className="shake-slow">
                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="STYLO" onChange={handleCheck} />
                                                <div className="option_inner instagram">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Stylo</span></div>      </div>
                                            </label>
                                        </div>
                                    </div>


                                   


                                    <div class="col-sm">

                                        <div className="shake-slow">

                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="LIMELIGHT" onChange={handleCheck} />
                                                <div className="option_inner google">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Limelight</span></div>      </div>
                                            </label>
                                        </div>
                                    </div>


                                    <div class="col-sm">

                                        <div className="shake-slow">

                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="BONANZA" onChange={handleCheck} />
                                                <div className="option_inner instagram">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Bononza</span></div>      </div>
                                            </label>
                                        </div>

                                    </div>



                                    <div class="col-sm">

                                        <div className="shake-slow">

                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="BEECHTREE" onChange={handleCheck} />
                                                <div className="option_inner quora">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Beechtree</span></div>      </div>
                                            </label>
                                        </div>
                                    </div>


                                    <div class="col-sm">
                                        <div className="shake-slow">

                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="BAREEZE" onChange={handleCheck} />
                                                <div className="option_inner linkedin">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Bareeze</span></div>      </div>
                                            </label>
                                        </div>
                                    </div>




                                    <div class="col-sm">


                                        <div className="shake-slow">

                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="MARIAB" onChange={handleCheck} />
                                                <div className="option_inner quora">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Maria.B</span></div>      </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-sm">

                                        <div className="shake-slow">

                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="ALKARAMSTUDIO" onChange={handleCheck} />
                                                <div className="option_inner google">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Alkaram Studio</span></div>      </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-sm">

                                        <div className="shake-slow">

                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="BORJAN" onChange={handleCheck} />
                                                <div className="option_inner facebook">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Borjan</span></div>      </div>
                                            </label>
                                        </div>
                                    </div>

                                   

                                    <div class="col-sm">

                                        <div className="shake-slow">

                                            <label className="option_item1">
                                                <input type="checkbox" className="checkbox" value="METRO" onChange={handleCheck} />
                                                <div className="option_inner linkedin">
                                                    <div className="tickmark"></div>
                                                    <div className="icon"><i className="fas fa-tshirt"></i></div>
                                                    <div className="name"><span style={{ 'fontWeight': 'bold' }}> Metro</span></div>      </div>
                                            </label>
                                        </div>
                                    </div>

                                    

                                 


                                </div>
                            </div>
                        </div>




                        <br></br>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm col-md-3">

                                    {/* <div className="col-md-12 text-center"> */}
                                        <button type="submit" onClick={submit} className="btn btn-warning b_s" disabled={load}>{load && <i className="fa fa-refresh fa-spin"></i>}Submit your interest</button>

                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </form>


                </div>
            </body>
        </>

    );
}
export default SelectBrand;