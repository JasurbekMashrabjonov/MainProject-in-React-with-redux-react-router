import React, { useEffect, useState } from "react";
import "../styles/Registration.css";
import { useDispatch, useSelector } from "react-redux";

function Registration(props) {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [sighn, setSighn] = useState(false);
  const [log, setLog] = useState(false);
  const { ucerName, ucerPassword } = useSelector((state) => state);

  useEffect(() => {
    if (click && ucerName !== "" && ucerPassword !== "") {
      let ms;
      fetch("http://localhost:3000/ucerInfo")
        .then((data) => data.json())
        .then((data) => {
          data.forEach((item, idx) => {
            if (
              item.ucerName === ucerName &&
              item.ucerPassword === ucerPassword
            ) {
              
              ms = "Boshqa acaunt tanlang bu band";
            } else {
             
              ms = "success";
            }
          });
      console.log(ms);
      if(ms ==="success"){
        dispatch("GET_UCER_NAME2");
        dispatch("GET_UCER_PASSWORD2");
      }

        });
      dispatch("SET_UCER_INFO_TO_SERVER");
    }
    // eslint-disable-next-line
  }, [click]);
  return (
    <>
      <div
        className="Registration"
        onClick={() => {
          dispatch("CHANGE_STATE_REGISTRATION");
        }}
      >
        {!sighn && !log && (
          <div className="box letter_box" onClick={(e) => e.stopPropagation()}>
            <h4>Had you had any acaunt for shop?</h4>
            <h5>if You have,Click "singn up"</h5>
            <h5>Otherwise, Click "Log in"</h5>
            <div className="row">
              <button
                className="btn btn-success"
                onClick={() => {
                  setSighn(!sighn);
                }}
              >
                Sighn up
              </button>
            </div>
            <div className="row">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setLog(!log);
                }}
              >
                Log in
              </button>
            </div>
          </div>
        )}
        {sighn ? (
          <div className="box" onClick={(e) => e.stopPropagation()}>
            <h4>Registration:</h4>
            <div class="row">
              <div class="input-field col s12">
                {/* <i class="material-icons prefix">account_box</i> */}
                <input
                  type="text"
                  id="autocomplete-input"
                  class="autocomplete"
                  onInput={(e) =>
                    dispatch({ type: "GET_UCER_NAME", payload: e.target.value })
                  }
                />
                <label htmlFor="autocomplete-input">Name</label>
              </div>
              <div class="input-field col s12">
                {/* <i class="material-icons prefix">lock</i> */}
                <input
                  type="password"
                  id="autocomplete-input2"
                  class="autocomplete"
                  onInput={(e) => {
                    dispatch({
                      type: "GET_UCER_PASSWORD",
                      payload: e.target.value,
                    });
                  }}
                />
                <label htmlFor="autocomplete-input2">Password</label>
              </div>
              <p>
                <label>
                  <input id="indeterminate-checkbox" type="checkbox" />
                  <span>Remember me</span>
                </label>
              </p>
              <a
                class="waves-effect waves-light btn btn10"
                href="#!"
                onClick={() => {
                  setClick(!click);
                }}
              >
                Sighn up
              </a>
            </div>
          </div>
        ) : null}
        {log ? (
          <div className="box" onClick={(e) => e.stopPropagation()}>
            <h4>Continue:</h4>
            <div class="row">
              <div class="input-field col s12">
                {/* <i class="material-icons prefix">account_box</i> */}
                <input
                  type="text"
                  id="autocomplete-input"
                  class="autocomplete"
                  onInput={(e) =>
                    dispatch({ type: "GET_UCER_NAME", payload: e.target.value })
                  }
                />
                <label htmlFor="autocomplete-input">Name</label>
              </div>
              <div class="input-field col s12">
                {/* <i class="material-icons prefix">lock</i> */}
                <input
                  type="password"
                  id="autocomplete-input2"
                  class="autocomplete"
                  onInput={(e) => {
                    dispatch({
                      type: "GET_UCER_PASSWORD",
                      payload: e.target.value,
                    });
                  }}
                />
                <label htmlFor="autocomplete-input2">Password</label>
              </div>

              <a
                class="waves-effect waves-light btn btn10"
                href="#!"
                onClick={() => {
                  // setClick(!click);
                }}
              >
                Log in
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Registration;
