import "./DivlayoutAuthPage.css";
const DivlayoutAuthPage = () => {
  return (
    <div className="divlayout-auth-page">
      <div className="svg">
        {/* <img className="vector-icon" alt="" src="/vector.svg" /> */}
      </div>
      <div className="divpage-fg">
        <div className="section">
          <div className="heading-1">
            <div className="welcome-to-dayzero">Welcome to DayZero</div>
          </div>
          <div className="ppage-tagmargin">
            <div className="blueprint-to-brilliance">
              BLUEPRINT TO BRILLIANCE
            </div>
          </div>
          <div className="heading-2margin">
            <div className="heading-2">
              <div className="a-blueprint-engine-container">
                <span className="a-blueprint-engine">{`A blueprint engine that converts your ideas into execution focused plan of action within `}</span>
                <b>6 minutes</b>
                <span className="a-blueprint-engine">.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="section1">
          <div className="pform-title">
            <div className="create-your-account">Create your account</div>
          </div>
          <div className="pform-subtitle">
            <div className="fill-your-details">
              Fill your details to get started
            </div>
          </div>
          <div className="divor-box">
            <button className="button1">
              <img className="svg-icon" alt="" src="/svg.svg" />
              <div className="span1">
                <div className="continue-with-google">Continue With Google</div>
              </div>
            </button>
            <div className="divline">
              <div className="span2">
                <div className="or">OR</div>
              </div>
            </div>
          </div>
          <div className="form">
           
            <input className="input" type="email" placeholder="Enter Email Address"></input>
            <input className="input" type="password" placeholder="Enter Unique Password"></input>
            <button className="button2">
              <div className="create-an-account">Let's Login</div>
            </button>
            <div className="pswitch-link">
              <div className="do-you-already-container">
                <span>{`Don't have an account? `}</span>
                <span className="login">Register</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivlayoutAuthPage;
