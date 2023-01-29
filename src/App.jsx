import MyListBox from "./components/ListBox";
import MyMenu from "./components/Menu";
import MyDisclosure from "./components/MyDisclosure";
import MySwitch from "./components/MySwitch";
import MyDialog from "./components/MyDialog";
import MyTab from "./components/MyTab";

function App() {
  return (
    <div className="px-3 py-5">
      <MyMenu />
      <MyListBox />
      <MySwitch />
      <MyDisclosure />
      <MyDialog />
      <MyTab />
    </div>
  );
}

export default App;
