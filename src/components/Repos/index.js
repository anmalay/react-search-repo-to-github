import React from "react";

import styles from "./styles.module.css";

export const Repos = React.memo(function Repos({ repos }) {
  return (
    <div className={styles.repos}>
      {repos.length !== 0 &&
        repos.map((repo) => (
          <div className={styles.repo} key={repo.id}>
            <div className={styles.avatar}>
              <img
                className={styles.image}
                src={repo.owner.avatar_url}
                alt="avatar"
              />
            </div>
            <div className={styles.container}>
              <div className={styles.desc}>
                <span>{repo.full_name}</span>
                <span>{repo.owner.login}</span>
              </div>
              <a
                href={repo.html_url}
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                <span>{`>`}</span>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
});
