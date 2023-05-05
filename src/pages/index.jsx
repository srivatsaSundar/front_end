import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
return (
	<div>
		<p style={{fontFamily:'revert-layer',fontStyle:'italic',fontSize:'xx-large',textAlign:'center'}}><strong>TextSlice</strong></p>
		<p style={{fontFamily:'revert-layer',fontStyle:'italic',fontSize:'x-large',textAlign:'center'}}>A simple and easy to use tool to extract text from PDF files.</p>
		<p style={{fontFamily:'revert-layer',fontStyle:'italic',fontSize:'x-large',textAlign:'center'}}>Upload your PDF file and get the text extracted from it.</p>
		<p style={{fontFamily:'revert-layer',fontStyle:'italic',fontSize:'x-large',textAlign:'center'}}>You can also edit the extracted text and save it as a text file.</p>
		<p style={{fontFamily:'revert-layer',fontStyle:'italic',fontSize:'x-large',textAlign:'center'}}>You can also upload a text file and get the text extracted from it.</p>
		<p style={{fontFamily:'revert-layer',fontStyle:'italic',fontSize:'x-large',textAlign:'center'}}>You can also edit the extracted text and save it as a text file.</p>
		<p style={{fontFamily:'revert-layer',fontStyle:'italic',fontSize:'x-large',textAlign:'center'}}>You can also download the extracted text as a text file.</p>
		<div>
		<p style={{fontFamily:'revert-layer',fontStyle:'italic',fontSize:'x-large',textAlign:'center'}}>Click on the <strong>Button</strong> to get started.</p>
		<Link to='/service'>
		<button type="button" className="btn-7 custom-btn7 " style={{marginLeft:'700px'}}>Get Started</button>
		</Link>
		</div>
	</div>
);
};

export default Home;
