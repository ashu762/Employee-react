import React, { useEffect, useState, useCallback, useReducer } from "react";
import styles from "./PreviousDetailsScreen.module.css";
import Card from "../components/Card";
import { debounce } from "../utils/debounce";

const initialState = {
  loading: true,
  globalData: [],
  employeeData: [],
  dropDownType: "firstName",
  value: "",
};
function reducer(state: any, action: any) {
  switch (action.type) {
    case "filter-data":
      return {
        ...state,
        employeeData: state.globalData.filter((ele: any) => {
          if (state.value === "") return 1;
          return ele[state.dropDownType] === state.value;
        }),
      };
    case "add-globalData":
      return {
        loading: false,
        globalData: action.data,
        employeeData: action.data,
        value: state.value,
        dropDownType: state.dropDownType,
      };
    case "change-input":
      return {
        ...state,
        value: action.value,
        employeeData: state.globalData.filter((ele: any) => {
          if (action.value === "") return 1;
          return (
            ele[state.dropDownType].toLowerCase() === action.value.toLowerCase()
          );
        }),
      };
    case "change-dropdown":
      return {
        ...state,
        dropDownType: action.dropDownType,
        employeeData: state.globalData.filter((ele: any) => {
          if (state.value === "") return 1;
          return (
            ele[action.dropDownType].toLowerCase() === state.value.toLowerCase()
          );
        }),
      };
  }
}

const PreviousDetailsScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const url = `https://employeeapi2626.herokuapp.com/api/employees`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: "add-globalData", data: response });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const inputFilterHandler = useCallback(
    debounce(
      (text: string) => dispatch({ type: "change-input", value: text }),
      500
    ),
    []
  );
  return (
    <div className={styles.screen}>
      {state.loading ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div>
            <div className={styles.title}>Previous Forms</div>

            <div className={styles.filter}>
              <input
                className={styles.input}
                onChange={(e) => {
                  inputFilterHandler(e.target.value);
                }}
              />

              <select
                name="options"
                value={state.dropDownType}
                id="selector"
                onChange={(e) => {
                  dispatch({
                    type: "change-dropdown",
                    dropDownType: e.target.value,
                  });
                }}
              >
                <option value="firstName">First Name</option>
                <option value="lastName">Last Name</option>
                <option value="gender">Gender</option>
                <option value="martial_status">Martial Status</option>
                <option value="spouse">Spouse</option>
              </select>
              <button className={styles.button} id="filter-btn" type="submit">
                Submit
              </button>
            </div>

            <div className={styles.form}>
              {state.employeeData.map((data: any) => {
                return <Card {...data}></Card>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviousDetailsScreen;
