import React from 'react';
import Form from './Form';
import FormData from './FormData';

const Home = () => {
	return (
		<>
			<div className="container px-4 mt-4">
				<div className="row gx-3">
					<div className="col-lg-6">
						<Form />
					</div>
					<div className="col-lg-6">
						<FormData />
					</div>
				</div>
			</div>
		</>
	)
}

export default Home