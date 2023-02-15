import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-center text-white mt-5">
      <div className="container p-4">
        <div>
          <div>
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example21"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form5Example21">
                    Email address
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <button className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link href="#!" className="text-white">
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Link 2
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Link 3
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Link 4
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link href="#!" className="text-white">
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Link 2
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Link 3
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Link 4
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link href="#!" className="text-white">
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Link 2
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Link 3
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Link 4
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link href="#!" className="text-white">
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Link 2
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Link 3
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Link 4
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <Link className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
