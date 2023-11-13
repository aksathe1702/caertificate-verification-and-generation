import "./Generate.css";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
const Generate = () => {
  return (
    <>
      <Header />
      <div className="second">
        <br />
        <p className="certi">Certificates of origin</p>
        <p className="verifi">Direct Verify Your Document</p>
      </div>
      <div className="verify">
        <center>
          <input type="file" className="uploadfile" />
        </center>
      </div>

      <div class="container_generate">
        <form action="#" method="post">
          <label for="customerName" className="label">
            NAME <em>&#x2a;</em>
          </label>
          <input type="text" id="customerName" name="customerName" className="input"required />

          <label for="customerEmail" className="label">
            EMAIL <em>&#x2a;</em>
          </label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            className="input"
            required
          />

          <label for="customerPhone" className="label">PHONE</label>
          <input
            type="tel"
            id="customerPhone"
            name="customerPhone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="input"
          />

          <label for="orderNumber" className="label">ORDER NUMBER</label>
          <input type="text" id="orderNumber" name="orderNumber" className="input"/>

          <label for="customerNote" className="label">
            YOUR MESSAGE <em>&#x2a;</em>
          </label>
          <textarea
            rows="4"
            id="customerNote"
            name="customerNote"
            required className="textarea"
          ></textarea>

          <h3>Please provide all the information about your issue you can.</h3>

          <label for="spamProtection" className="label">
            SPAM PROTECTION <em>&#x2a;</em>
          </label>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;What day comes before July 11th?</span>
          <input type="text" id="spamProtection" name="spamProtection"className="input" />

          <button  className="generate_cert" type="submit" id="customerOrder">
            SUBMIT
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Generate;
