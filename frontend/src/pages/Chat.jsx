import axios from "axios";
import { useEffect, useState } from "react";
const Chat = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/chat/").then((res) => {
      console.log(res);
      setAllData(res.data);
    });
  }, []);
  return (
    <div>
      {allData.map((item, i) => (
        <h3 key={i}>{item.chatName}</h3>
      ))}
    </div>
  );
};

export default Chat;
