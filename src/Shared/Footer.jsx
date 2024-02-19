const Footer = () => {
  return (
    <div className="bg-slate-900 py-10">
      <footer className="flex flex-wrap  items-start text-slate-300 max-w-7xl justify-between mx-auto p-10">
        <nav className="flex flex-col">
          <h1 className="text-2xl pb-5 font-semibold text-white">Services</h1>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h1 className="text-2xl pb-5 font-semibold text-white">Company</h1>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="text-2xl pb-5 font-semibold text-white">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h1 className="text-2xl pb-5 font-semibold text-white">Newsletter</h1>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="py-5">
        <p className="text-center text-slate-400">Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
