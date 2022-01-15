import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url) => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url);
        setUsers(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [url]);

  return users;
};
