import React from 'react';
import Footer from './Footer';
import Header from './Header';


const About=()=>
{
    const size={
        padding: '80px 0px',
        // minHeight:' 0px',
		// padding: '60px 0 40px 0'

    }
    const img={
        width:' 300px',
		height: '300px'

    }
    const white={
		backgroundColor: 'white'
	}
	
    // .right{
	// 	float: right;
	// }
	const h1={
		color: 'white'
	}
	

    return (
        <>
		<Header name="about"/>
    <div style={size} className="container-fluid red-background size">
	<div className="row">
		<div className="col-md-6 offset-md-3">
			<h1 className="text-center" style={{color:"#E7AB3C"}}>About Us</h1>
			<hr style={white}  className="white-bar"/>
		</div>
	</div>
</div>
<div style={size} className="container-fluid size">
	
	<div className="container">
		<div className="row">
		<div className="col-md-6"><img style={img}  src="img/binoculars.png" alt="Our Vission" className="rounded float-left img-fluid"/></div>
		<div className="col-md-6">
			<h2 style={{color:'#E7AB3C'}} className="text-center">Our Vission</h2>
			<hr className="red-bar"/>
			<p style={{fontSize:'18px'}}>
				We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
			</p>
			<p style={{fontSize:'18px'}}>
				We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
			</p>
		</div>
	</div>
	</div>
</div>

<div style={size} className="container-fluid white size">
	<div className="container ">
	<div className="container">
		<div className="row ">
		<div className="col-md-6">
			<h2 style={{color:'#E7AB3C'}} className="text-center">Our Goal</h2>
			<hr className="red-bar"/>
			<p style={{fontSize:'18px'}}>
				We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
			</p>
			<p style={{fontSize:'18px'}}>
				We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
			</p>
		</div>
		<div className="col-md-6" ><img style={img}  src="img/target.png" alt="Our Vission" className="rounded img-fluid float-right"/></div>
	</div>
	</div>		
</div>
</div>
	

	<div style={size} className="container-fluid size">
		<div className="container">
		<div className="row">
		<div className="col-md-6"><img style={img}  src="img/goal.png" alt="Our Vission" className="rounded float-left img-fluid"/></div>
		<div className="col-md-6">
			<h2 style={{color:'#E7AB3C'}} className="text-center">Our Mission</h2>
			<hr className="red-bar"/>
			<p style={{fontSize:'18px'}}>
				We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
			</p>
			<p style={{fontSize:'18px'}}>
				We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
			</p>
		</div>
	</div>
	</div>
	</div>
<Footer/>
        </>
    )
}

export default About;