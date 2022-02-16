import React, { useCallback, useState } from "react";

import styles from "./styles.module.css";

export function Search({ value, handleClick, total, handleChange, repos }) {
  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.input}
          placeholder="Введите название репозитория"
          value={value}
          onChange={handleChange}
        />
      </div>

      {value && (
        <button
          type="button"
          onClick={handleClick}
          disabled={total === repos.length}
        >
          {total - repos.length >= 5
            ? `загрузить еще 5 из ${total - repos.length}`
            : `загрузить еще ${total - repos.length}`}
        </button>
      )}
    </>
  );
}
