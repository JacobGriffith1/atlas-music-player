import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="min-h-screen h-full flex flex-col justify-between p-8">
      <MusicPlayer />
      <Footer />
    </div>
  );
}
export default App;