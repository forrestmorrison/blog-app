import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { CreatePost } from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;