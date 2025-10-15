import "./App.css";
function Header() {
  return (
    <>
      <h1>Header</h1>
    </>
  );
}

function Welcome() {
  return (
    <>
      <h2>Well come to UKI </h2>
    </>
  );
}
function Footer() {
  return (
    <>
      <h1>Footer </h1>
    </>
  );
}

function App() {
  return (
    <>
      <div>
        <h1>hello world</h1>
        <Header />
        <Footer />
        <Welcome />
      </div>
    </>
  );
}
export default App;
