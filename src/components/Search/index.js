import styles from "./styles.module.css";

export function Search({ value, handleClick, total, handleChange, repos }) {
  const amount = total - repos.length;

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
          className={styles.loadBtn}
          onClick={handleClick}
          disabled={total === repos.length}
        >
          {amount >= 5
            ? `загрузить еще 5 из ${amount}`
            : `загрузить еще ${amount}`}
        </button>
      )}
    </>
  );
}
