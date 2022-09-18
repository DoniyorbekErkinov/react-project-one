import React, { useState, useContext } from "react";
import MyInput from "../../components/MyInput/MyInput";
import { AuthContext } from "../../context";
import "./Login.css";
function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  let [loginForm, setLoginForm] = useState({ userName: "", password: "", token: "token4687l0v31sd1g3rtoken3254" });
  let [isValid, setValid] = useState(false)

  function login(e) {
    e.preventDefault();
    console.log('clicked')
    if (loginForm.userName === 'panda' && loginForm.password === 'panda') {
      setIsAuth(true)
      localStorage.setItem('user', JSON.stringify(loginForm))
    } else {
      console.log('clicked2')
      setIsAuth(false)
      setValid(true)
    }
  }
  return (
    <div>
      {isValid ? <div className="row d-flex justify-content-end">
        <div className="col-4">
          <div className="alert alert-danger" role="alert">
            Make sure you type correct username and password
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      </div> : ''}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-title">ADMIN PANEL</div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form onSubmit={login}>
                  <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
                    <MyInput required onChange={(e) => setLoginForm({ ...loginForm, userName: e.target.value })} value={loginForm.userName} type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <MyInput required onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} value={loginForm.password} type="password" className="form-control" />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text"></div>
                    <div className="col-lg-6 login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary">
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
