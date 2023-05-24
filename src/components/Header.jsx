/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import LogoIcon from "../assets/message.svg";
import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";

const Header = () => {
  const [dataMessages, setDataMessages] = useState([]);
  const databaseRef = collection(db, "messages");

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await getDocs(databaseRef);
      setDataMessages(messages.docs.map((message) => ({ ...message.data(), id: message.id })));
    };

    fetchMessages();
  }, []);
  return (
    <>
      <section className="flex flex-col gap-y-6 max-w-xl py-6 sm:mx-auto bg-gray-100 shadow-md rounded-sm my-3 mx-2">
        <div className="flex flex-col items-center gap-y-2">
          <img src={LogoIcon} alt="message-icon" className="w-10 h-w-10" />
          <p className="text-green-600 text-lg font-semibold">Send Anonymous Message!</p>
        </div>
        <div className="flex flex-col items-center">
          <form className="flex flex-col gap-y-2 w-4/5  text-green-600">
            <input type="text" placeholder="Write your message..." className="p-2 h-8 rounded-sm  border-none focus:outline-none" />
            <button type="submit" className="bg-green-500 text-white py-1 rounded-sm font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <section className="flex flex-col gap-y-6 max-w-xl py-6 sm:mx-auto">
        <h2 className="text-lg font-semibold">Anonymous Messages for Fulan</h2>
        <div className="flex flex-col gap-y-4 bg-gray-50 shadow-md rounded-sm py-3 px-2">
          {dataMessages.map((data) => (
            <div key={data.id} className="bg-white px-2 py-3 rounded-sm shadow-sm">
              <p>{data.message}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Header;
