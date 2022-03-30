import React, { useContext, useState } from 'react';
import StudentDataContext from '../context/studentData/StudentDataContext';

const Form = () => {

	const contextStudentData = useContext(StudentDataContext);
	const { studentData, setStudentData } = contextStudentData;

	const [dataToAdd, setDataToAdd] = useState({
		name: '', gender: '', email: '', imgUrl: '', website: '', skills: ''
	});

	const handleEnrollClick = () => {
		console.log(skillsAdd.toString())
		setStudentData([...studentData, dataToAdd]);
		setDataToAdd({ name: '', gender: '', email: '', imgUrl: '', website: '', skills: '' });
	}

	const onChange = (e) => {
		setDataToAdd({ ...dataToAdd, [e.target.name]: e.target.value });
	}

	let skillsAdd = []
	const onChangeRadio = (e) => {
		if (e.target.checked) {
			skillsAdd.push(e.target.value);
		} else if (!e.target.checked) {
			skillsAdd.splice(skillsAdd.indexOf(e.target.value), 1);
		}
	}

	return (
		<div className='border p-3'>
			<div className="form-floating mb-3">
				<input type="text" className="form-control" onChange={onChange} id="name" name='name' placeholder="Name" />
				<label htmlFor="name">Name</label>
			</div>
			<div className="form-floating mb-3">
				<input type="email" className="form-control" onChange={onChange} id="email" name='email' placeholder="name@example.com" />
				<label htmlFor="email">Email address</label>
			</div>
			<div className="form-floating mb-3">
				<input type="url" className="form-control" onChange={onChange} id="website" name='website' placeholder="Website" />
				<label htmlFor="website">Website</label>
			</div>
			<div className="form-floating mb-3">
				<input type="url" className="form-control" onChange={onChange} id="imgUrl" name='imgUrl' placeholder="imgUrl" />
				<label htmlFor="imgUrl">Image Link</label>
			</div>

			<div className="d-flex mb-3">
				<label className='me-4'>Gender</label>
				<div className="form-check">
					<label className="form-check-label" htmlFor="gender">
						Male
					</label>
					<input className="form-check-input" onChange={onChange} type="radio" value='male' name="gender" id="gender" />
					<br />
					<label className="form-check-label" htmlFor="gender">
						Female
					</label>
					<input className="form-check-input" onChange={onChange} type="radio" value='female' name="gender" id="gender" />
					<br />
					<label className="form-check-label" htmlFor="gender">
						Other
					</label>
					<input className="form-check-input" onChange={onChange} type="radio" value='other' name="gender" id="gender" />
				</div>
			</div>

			<div className="d-flex mb-3">
				<label className='me-4'>Skills</label>
				<div className="form-check">
					<label className="form-check-label" htmlFor="java">
						Java
					</label>
					<input className="form-check-input" onChange={onChangeRadio} type="checkbox" value="java" name='skills' id="java" />
					<br />
					<label className="form-check-label" htmlFor="html">
						HTML
					</label>
					<input className="form-check-input" onChange={onChangeRadio} type="checkbox" value="html" name='skills' id="html" />
					<br />
					<label className="form-check-label" htmlFor="css">
						CSS
					</label>
					<input className="form-check-input" onChange={onChangeRadio} type="checkbox" value="css" name='skills' id="css" />
				</div>
			</div>

			<div className="d-flex">
				<button className="btn btn-outline-primary btn-sm me-3" onClick={handleEnrollClick}>Enroll</button>
				<button className="btn btn-outline-danger btn-sm me-3">Clear</button>
			</div>
		</div>
	)
}

export default Form