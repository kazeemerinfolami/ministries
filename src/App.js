import Index from "../src/components/index"
import Navs from "../src/components/navs/Navs"

function App() {
  return (
    <>
      <Navs>
        <div className="Header">Ministries and Federal Parastatals</div>
        <Index />
      </Navs>
    </>
  );
}

export default App;
