import React from 'react'
import img1 from "../../assets/sec2.jpg"

function Banner() {
	return (
		<div className="babcon">
			<div className="banbg">
			<div className="bantext">
				<h1>Welcome To Melange<br/>Projects</h1>
				<button className="banbtn">More</button>
			</div>
			</div>
			<div>
				<div className="bansec1">	
					<div className="bansec1con">
						<div className="bansec1text">About Us</div>
						<div className="bansec1bcon">
								<div className="bansec1b"><img src={img1} alt=""/></div>
								<div className="banlorem">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget leo gravida senectus at. Habitasse elementum congue sed proin ut. At eu tempus, mi nibh nibh. Mauris tristique eget a eget in. Lectus malesuada in sed tellus volutpat viverra sagittis sit. Tortor non morbi ultricies vel etiam sit risus. Lacus, nisl urna quam sem diam bibendum posuere cursus tincidunt. In commodo aliquam, felis viverra accumsan diam maecenas egestas nunc. Sagittis mi aenean habitant a velit odio at suspendisse ut.<br/><br/>

										Auctor adipiscing nunc sollicitudin porttitor ultricies tincidunt elementum a. Sit mi aliquet aliquet turpis ac egestas lorem senectus. Quis odio nulla sed cursus turpis. In feugiat commodo suscipit nisi sed. Nunc habitasse a sed scelerisque  
									</p>
								</div>
								
						</div>
					</div>		
				</div>
			
			</div>
			<div className="cardSec1">
				<div className="cardSecTxt "><h4>What we do</h4></div>
				<div class="row row-cols-1 row-cols-lg-4 row-cols-sm-2 g-4 cardSec1a">
					<div class="col">
						<div class="card h-300 cardCol">
						<div class="card-body  cardB">
							<h5 class="card-title">Construction Management</h5><br/>
							<p class="card-text ptxt">Auctor adipiscing nunc sollicitudin porttitor ultricies tincidunt elementum a. Sit mi aliquet aliquet turpis ac egestas lorem senectus. Quis odio nulla sed cursus turpis. In feugiat</p>
							<button className="crdbtn"> More</button>
						</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-300 cardCol">
						<div class="card-body cardB">
							<h5 class="card-title">Architecture</h5><br/>
							<p class="card-text ptxt">Auctor adipiscing nunc sollicitudin porttitor ultricies tincidunt elementum a. Sit mi aliquet aliquet turpis ac egestas lorem senectus. Quis odio nulla sed cursus turpis. In feugiat</p>
							<button className="crdbtn">More</button>
						</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-300 cardCol">
						<div class="card-body cardB">
							<h5 class="card-title">Property Sale</h5><br/>
							<p class="card-text ptxt">Auctor adipiscing nunc sollicitudin porttitor ultricies tincidunt elementum a. Sit mi aliquet aliquet turpis ac egestas lorem senectus. Quis odio nulla sed cursus turpis. In feugiat</p>
							<button className="crdbtn">More</button>
						</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-300 cardCol">
						<div class="card-body cardB">
							<h5 class="card-title">Advisory</h5><br/>
							<p class="card-text ptxt">Auctor adipiscing nunc sollicitudin porttitor ultricies tincidunt elementum a. Sit mi aliquet aliquet turpis ac egestas lorem senectus. Quis odio nulla sed cursus turpis. In feugiat</p>
							<button className="crdbtn">More</button>
						</div>
						</div>
					</div>
					</div>
			</div>
		</div>

		
	)
}

export default Banner
