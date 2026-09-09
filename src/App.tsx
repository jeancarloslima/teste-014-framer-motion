import AnimatedButton from "./components/AnimatedButton";
import AnimatedModal from "./components/AnimatedModal";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-500">
      <AnimatedButton />
      <AnimatedModal />
    </div>
  );
}

export default App;
