import "./App.css";
import StudentProfile from "./components/StudentProfile";
function App() {
  return (
    <>
      <StudentProfile name="Jeya" email="jey@gmail.com" isPresent="true" />
      <StudentProfile name="ushantha" />
    </>
  );
}

export default App;
