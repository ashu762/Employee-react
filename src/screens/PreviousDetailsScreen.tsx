import React, { useEffect, useState, useCallback } from "react";
import styles from "./PreviousDetailsScreen.module.css";
import Card from "../components/Card";
import { debounce } from "../utils/debounce";
const PreviousDetailsScreen = () => {
  const [loading, setLoading] = useState(true);
  const [employeeData, setEmployeeData] = useState<any>([]);
  const [globalData, setGlobalData] = useState<any>([]);
  const [type, setType] = useState("firstName");
  const [value, setValue] = useState(" ");

  useEffect(() => {
    setValue("");
    const url = `https://employeeapi2626.herokuapp.com/api/employees`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setGlobalData(response);
        setEmployeeData(response);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    console.log("In use Effect!");
    console.log(type);
    if (!value || value.length === 0) {
      setEmployeeData(globalData);
      return;
    }
    let tempData = [];
    console.log(type);
    console.log(value);
    for (let data of globalData) {
      if (value && data[type].toLowerCase() === value.toLowerCase()) {
        tempData.push(employeeData);
      }
    }

    setEmployeeData(tempData);
  }, [type]);
  function filterData(value: string) {
    if (!value || value.length === 0) {
      setEmployeeData(globalData);
      return;
    }
    let tempData = [];
    console.log(type);
    console.log(value);
    console.log(globalData);
    for (let data of globalData) {
      if (value && data[type].toLowerCase() === value.toLowerCase()) {
        tempData.push(data);
      }
    }
    console.log(tempData);

    setEmployeeData(tempData);
  }
  function filterDataWhenDropDownChanges(value: string, type: string) {}
  function setChangeHandler(e: any) {
    setType(e.target.value);
    filterDataWhenDropDownChanges(value, e.target.value);
  }

  const inputFilterHandler = useCallback(
    debounce((text: string) => filterData(text), 1000),
    []
  );
  return (
    <div className={styles.screen}>
      {loading ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div>
            <div className={styles.title}>Previous Forms</div>

            <div className={styles.filter}>
              <input
                className={styles.input}
                onChange={(e) => {
                  setValue(e.target.value);
                  inputFilterHandler(e.target.value);
                }}
                value={value}
              />

              <select
                name="options"
                value={type}
                id="selector"
                onChange={(e) => setChangeHandler(e)}
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
              {employeeData.map((data: any) => {
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
