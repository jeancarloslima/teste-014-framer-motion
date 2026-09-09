import AnimatedButton from "./components/AnimatedButton";
import AnimatedCard from "./components/AnimatedCard";
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
      <AnimatedCard />
    </div>
  );
}

export default App;
