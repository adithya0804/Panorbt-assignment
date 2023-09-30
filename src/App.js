import LandingPage from "./Components/Scenes/LandingPage";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./Components/Scenes/ProfilePage";
import GalleryPage from "./Components/Scenes/GalleryPage";
import TodoPage from "./Components/Scenes/TodoPage";
import PostPage from "./Components/Scenes/PostPage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/gallery" element={<GalleryPage />} />
        <Route exact path="/todo" element={<TodoPage />} />
        <Route exact path="/post" element={<PostPage />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
