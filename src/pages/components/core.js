import React from 'react';
import img1 from "../../assets/solo.jpg"
import img1a from "../../assets/sec2a.jpg"
import img1b from "../../assets/sec2b.jpg"
import img1c from "../../assets/sec2c.jpg"

function Core() {
	return (
		<div>
			<div className="babcon">
			<div className="coreSec1">
				<div className="cardSecTxt "><h4>Our Core</h4></div>
				<div class="row row-cols-1 row-cols-lg-2 row-cols-sm-1 g-4 coreSec1a">
					<div class="col ">
						<div class=" h-300 ">
						<div class="card-body coreB">
							<h5 class="card-title">We can service all of your<br/> construction needs<hr/></h5><br/>

								<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget leo gravida senectus at. Habitasse elementum congue sed proin ut. At eu tempus, mi nibh nibh. Mauris tristique eget a eget in. Lectus malesuada in sed tellus volutpat viverra sagittis sit. Tortor non morbi ultricies vel etiam sit risus. Lacus, nisl urna quam sem diam bibendum posuere cursus tincidunt. In commodo aliquam, felis viverra accumsan diam maecenas egestas nunc. Sagittis mi aenean habitant a velit odio at suspendisse ut.<br/><br/>

										Auctor adipiscing nunc sollicitudin porttitor ultricies tincidunt elementum a. Sit mi aliquet aliquet turpis ac egestas lorem senectus. Quis odio nulla sed cursus turpis. In feugiat commodo suscipit nisi sed. Nunc habitasse a sed scelerisque  
									</p>
						</div>
						</div>
					</div>
					<div class="col ">
						<div class="coreImgCon h-300">
							<div class="coreImg"><div className="coreSub"><img src={img1} alt="" /></div></div>
						</div>
					</div>
				
				
					</div>
			</div>
	
			</div>
			<div className="babcon2">
			<div className="babcon">
					<div className="cardSecTxt "><h4>Our Projects</h4></div>
					<div class="row row-cols-1 row-cols-md-3 g-4">
					<div class="col">
						<div class="card h-100">
						<img src={img1a} class="card-img-top" alt="..."/>
						<div class="card-body">
							<p class="card-title coreTitle">Peaked Terraces</p>
						</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-100">
						<img src={img1b} class="card-img-top" alt="..."/>
						<div class="card-body">
							<p class="card-title coreTitle">5Bedrooms Fully detached duplex</p>
						</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-100">
						<img src={img1c} class="card-img-top" alt="..."/>
						<div class="card-body">
							<p class="card-title coreTitle">Cubiq Duplex Fully detached duplex</p>
						</div>
						</div>
					</div>
				
				</div>
					<div className="corebtnC"><button className="corebtn">View More</button></div>
				
			</div>
			</div>
			</div>
	)
}

export default Core
