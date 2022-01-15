import LargePersonListItem from "./components/LargePersonListItem";
import RegularList from "./components/RegularList";
import SmallPersonListItem from "./components/SmallPersonListItem";
import { useAxios } from "./hooks";
import "./styles.css";

export default function App() {
  const users = useAxios("https://jsonplaceholder.typicode.com/users");
  console.log(users);
  return (
    <div className="App">
      <RegularList
        items={users}
        resourceName="user"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={users}
        resourceName="user"
        itemComponent={LargePersonListItem}
      />
    </div>
  );
}
