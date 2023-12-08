import Nav from "./component/navbar/Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Body from "./component/body/Body.jsx";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [currentpage, setCurrenpage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  useEffect(() => {
    async function fetchData() {
      await fetch(import.meta.env.VITE_API_URL, {})
        .then((res) => res.json())
        .then((json) => setData(json));
    }
    fetchData();
  }, []);
  const lastPostIndex = currentpage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const item = data.slice(firstPostIndex, lastPostIndex);
  const NextPage = (pagedata) => {
    setCurrenpage(pagedata);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Body
                  data={item}
                  page={currentpage}
                  all={data}
                  NextPage={NextPage}
                />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
