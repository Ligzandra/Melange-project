import React from 'react'
import img1 from "../../assets/sec1.jpg"

function Search() {
	return (
		<div className="testiSSec1" >
				<div className="babcon">
				
				<div class="row row-cols-1 row-cols-lg-2 row-cols-sm-1 g-4 d-flex align-items-center coreSec1a">
					<div class="col ">
						<div class=" h-300 ">
						<div class="card-body coreB srhtxt">
							<h5 class="card-title">sign up for our newsletter to get <br/> more information</h5><br/>

							<div className="testisearch">
								<input type="search" placeholder="Type your email here" />
								<button>Subscribe</button>
							</div>
						</div>
						</div>
					</div>
					<div class="col ">
						<div class="coreImgCon h-300">
							<div class="coreImg"><div className=""><img src={img1} alt="" /></div></div>
						</div>
					</div>
				
				
					</div>
			</div>
		</div>
	)
}

export default Search
