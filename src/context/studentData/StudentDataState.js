import React, { useState } from 'react';
import StudentDataContext from './StudentDataContext';

const StudentDataState = (props) => {

	const [studentData, setStudentData] = useState([
		{ name: 'John Doe', gender: 'male', email: 'johndoe@gmail.com', imgUrl: 'https://picsum.photos/200', website: 'www.johndoe.com', skills: 'JAVA, HTML' }
	]);

	return (
		<>
			<StudentDataContext.Provider value={{ studentData, setStudentData }}>
				{props.children}
			</StudentDataContext.Provider>
		</>
	)
}

export default StudentDataState