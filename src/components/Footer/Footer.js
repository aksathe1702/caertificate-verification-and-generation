import './Footer.css';
const Footer=()=> {
  return (
    <>
     <div id="footer">
        <div class="container-fluid">
            <div class="social-icons mt-4">
               
                <a href="https://www.facebook.com/" target="_blank"><img src="images/youtube.png" alt="not loaded"  className='icons'/></a>
                <a href="https://www.instagram.com/" target="_blank"><img src="images/instagram.png" alt="not loaded"   className='icons'/></a>
                <a href="https://www.twitter.com/" target="_blank"><img src="images/linkedin.png" alt="not loaded"  className='icons'/></a>
                <a href="https://www.linkedin.com/" target="_blank"><img src="images/linkedin.png" alt="not loaded"   className='icons'/></a>
                <a href="https://www.twitch.tv/" target="_blank"><i class="fab fa-twitch"></i></a>
            </div>
        </div>
    </div>
    </>
  );
}

export default Footer;
