import React from 'react'
import joy from "../../assets/joy.jpg"
import olu from "../../assets/olu.jpg"
import sam from "../../assets/sam.jpg"


function Testimonials() {
	return (
		<div className="tstcon"><br/><br/><br/>
			<div class="row row-cols-1 row-cols-md-3 g-4">
				<div class="col testi">
						<img src={joy} class="card-img-top" alt="..."/>
					<div class="testiC  h-85">
					
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget leo gravida senectus at. Habitasse elementum congue sed proin ut. At eu tempus, mi nibh nibh. Mauris tristique eget a</p>
					</div>
					</div>
				</div>
				<div class="col testi">
					<img src={sam} class="card-img-top" alt="..."/>
					<div class="testiC h-85">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget leo gravida senectus at. Habitasse elementum congue sed proin ut. At eu tempus, mi nibh nibh. Mauris tristique eget a</p>
					</div>
					</div>
				</div>
				<div class="col testi">
					<img src={olu} class="card-img-top" alt="..."/>
					<div class="testiC h-85">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">TLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget leo gravida senectus at. Habitasse elementum congue sed proin ut. At eu tempus, mi nibh nibh. Mauris tristique eget a</p>
					</div>
					</div>
				</div>
			
				</div>
		</div>
	)
}

export default Testimonials
