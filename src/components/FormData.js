import React, { useContext } from 'react';
import StudentDataContext from '../context/studentData/StudentDataContext';

const FormData = () => {

	const ContextStudentData = useContext(StudentDataContext);
	const { studentData } = ContextStudentData;

	return (
		<>
			{
				studentData.map((student) => {
					return <div key={student.email} className="card mb-2">
						<div className="card-body d-flex justify-content-between">
							<div className="left">
								<p className="m-0">{student.name}</p>
								<p className="m-0">{student.gender}</p>
								<a className="m-0" href={`mailto: ${student.email}`}>{student.email}</a> <br />
								<a className="m-0" href={`${student.website}`} target='_blank'>{student.website}</a>
								<p className="m-0">{student.skills}</p>
							</div>

							<div className="right">
								<img src={student.imgUrl} className='avatar' alt="name" />
							</div>
						</div>
					</div>
				})
			}
		</>
	)
}

export default FormData