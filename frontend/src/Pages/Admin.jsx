import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAdmin } from "../api";

const Login = () => {

  const navigate = useNavigate();
  const initialState = { email: "", password: "" };
  const [form, setForm] = useState(initialState);
  const handleChange = (e) =>
   { setForm({ ...form, [e.target.name]: e.target.value });}

  const onSubmit = (e) => {
    e.preventDefault();
    fetchAdmin(form)
      .then((response) => {

        localStorage.setItem('manager', JSON.stringify({ ...form }))
        navigate("/panel");
      })
      .catch((error) => {

      });
  }


  return (
    <div className="">

      <div className="showcase-content " style={{ paddingTop: "10%" }}>
        <div className=" p-5 col-md-7 col-12" style={{ background: "white", borderRadius: "10px" }}>
          <form onSubmit={onSubmit} className="col-12">
            <h3 style={{ textAlign: "center", color: "black" }}><b> Panel Giriş</b></h3>
            <br></br>

            <input
              className="email form-control "
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="E-mail "
              style={{ outline: "none" }}
            />
            <input
              className="email form-control "
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Parola"
              style={{ outline: "none" }}
            />


            <button className="btn-primary pb-1"  style={{ outline: "none", border: "none", height: "45px" }}>
              <h6>Giriş yap</h6>

            </button>


          </form>
        </div>


      </div>
    </div>
  );
};

export default Login;