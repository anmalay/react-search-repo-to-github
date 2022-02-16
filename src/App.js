import React, { useCallback, useState } from "react";
import { Repos } from "./components/Repos";
import { Search } from "./components/Search";

import styles from "./styles.module.css";
import { useDebounce } from "./utils/useDebounce";

function App() {
  const [value, setValue] = useState("");
  const [repos, setReppos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [delay, setDelay] = useState(2000);

  const PER_PAGE = 5;

  const searchRepos = useDebounce(async (value) => {
    try {
      await fetch(
        `https://api.github.com/search/repositories?q=${value}&per_page=${PER_PAGE}&page=${currentPage}`
      )
        .then((res) => res.json())
        .then((res) => {
          if (repos.length === 0) setTotal(res.total_count);
          setReppos([...res.items, ...repos]);
          setCurrentPage((prev) => prev + 1);
          if (delay) setDelay(0);
        });
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  }, delay);

  const handleChange = useCallback((e) => {
    setLoader(true);
    setCurrentPage(1);
    setReppos([]);
    setDelay(2000);
    setValue(e.target.value);
    searchRepos(e.target.value);
  }, []);

  const handleClick = () => {
    setLoader(true);
    searchRepos(value);
    setDelay(0);
  };
  return (
    <div className="App">
      <header className="App-header"></header>

      <main className={styles.main}>
        <Search
          value={value}
          repos={repos}
          total={total}
          handleClick={handleClick}
          handleChange={handleChange}
        />

        {loader ? <span>LOADING</span> : <Repos repos={repos} />}
      </main>
    </div>
  );
}

export default App;
