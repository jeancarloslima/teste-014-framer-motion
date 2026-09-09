import AnimatedButton from "./components/AnimatedButton";
import AnimatedList from "./components/AnimatedList";
import AnimatedModal from "./components/AnimatedModal";
import AnimatedScroll from "./components/AnimatedScroll";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-500">
      <AnimatedButton />
      <AnimatedModal />
      {/* <AnimatedScroll /> */}
      <AnimatedList />
    </div>
  );
}

export default App;
