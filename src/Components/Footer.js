import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Bookie</h1>
          <p>
            by Sarah Rexford | Be Productive, Enjoy Creative Exercises,
            Resources for Writers
          </p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>BOOKS-Log</h4>

          <a href="/">Changelog</a>
          <a href="/">License</a>
          <a href="/">status</a>
          <a href="/">All version</a>
        </div>
        <div>
          <h4>Community</h4>

          <a href="/">Github</a>
          <a href="/">booklibrary</a>
          <a href="/">status</a>
          <a href="/">All version</a>
        </div>
        <div>
          <h4>Help</h4>

          <a href="/">Support</a>
          <a href="/">Contactus</a>
        </div>
        <div>
          <h4>Others</h4>

          <a href="/">Teams of service</a>
          <a href="/">License</a>
          <a href="/">Privacy policy</a>
          <a href="/">All version</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
