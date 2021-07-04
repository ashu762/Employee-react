import React, { useEffect, useState } from "react";
import styles from "./PreviousDetailsScreen.module.css";
import Card from "../components/Card";
const PreviousDetailsScreen = () => {
  const [loading, setLoading] = useState(true);
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    const url = `https://employeeapi2626.herokuapp.com/api/employees`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setEmployeeData(response);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className={styles.screen}>
      {loading ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div>
            <div className={styles.title}>Previous Forms</div>
            <div className={styles.form}>
              {employeeData.map((data) => {
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
