import React, { useState } from "react";

const NewsContext = React.createContext();

export function NewsProvider(props) {
  const [news, setNews] = useState([]);

  function addNews() {
    setNews([...news, { title: `News ${news.length + 1}` }]);
  }

  return (
    <NewsContext.Provider value={{ data: news, addNews: addNews }}>
      {props.children}
    </NewsContext.Provider>
  );
}

export default NewsContext;
