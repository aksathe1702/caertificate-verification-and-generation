import './Verification.css';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
const Verification=()=> {
  return (
    <>
     <Header/>
     <div className="second">
        <br />
        <p className="certi">Certificates of origin</p>
        <p className="verifi">Direct Verify Your Document</p>
      </div>
      <div className="verify">
        <center><input type='file' className='uploadfile'/></center>
      </div>



     <center> <div class="container_verify">
    <div class="button-wrap">
        <label class="button" for="upload">Upload File</label>
        <input id="upload" type="file"/>
      </div>
	
    </div>
	</center>
	<button ><a href="/certificate">certificate</a></button>
     <Footer/>
    </>
  );
}

export default Verification;
