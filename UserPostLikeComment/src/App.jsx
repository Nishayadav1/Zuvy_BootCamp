import { PostProvider } from "./context/PostContext";
import Post from "./components/Post";

function App() {
  return (
    <PostProvider>
      <Post />
    </PostProvider>
  );
}

export default App;
