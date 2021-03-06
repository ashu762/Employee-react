import React from "react";
import styles from "./Card.module.css";
type inputProps = {
  firstName: string;
  lastName: string;
  gender: string;
  martial_status: string;
  spouse?: string;

  comments?: string;
};
const Card: React.FC<inputProps> = ({
  firstName,
  lastName,
  gender,
  martial_status,
  spouse,
  comments,
}) => {
  return (
    <div className={styles.card}>
      <span className={styles.avatar}>
        {(firstName[0] + lastName[0]).toUpperCase()}
      </span>
      <div>
        <span>First Name : </span>
        {firstName}
      </div>
      <div>
        <span>Last Name : </span>
        {lastName}
      </div>

      <div>
        <span>Gender : </span>
        {gender}
      </div>
      <div>
        <span>Martial Status : </span>
        {martial_status}
      </div>
      {spouse && spouse.length > 0 && (
        <div>
          <span>Spouse : </span>
          {spouse}
        </div>
      )}
      {comments && comments.length > 0 && (
        <div>
          <span>Comments : </span>
          {comments}
        </div>
      )}
    </div>
  );
};

export default Card;
