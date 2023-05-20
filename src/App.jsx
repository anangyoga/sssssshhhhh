import LogoIcon from "./assets/message.svg";

const App = () => {
  return (
    <main>
      <section className="flex flex-col gap-y-6 max-w-xl py-6 sm:mx-auto bg-gray-100 shadow-md rounded-sm my-3 mx-2">
        <div className="flex flex-col items-center gap-y-2">
          <img src={LogoIcon} alt="message-icon" className="w-10 h-w-10" />
          <p className="text-green-600 text-lg font-semibold">Send Anonymous Message!</p>
        </div>
        <div className="flex flex-col items-center">
          <form className="flex flex-col gap-y-2 w-4/5 text-green-600">
            <input type="text" placeholder="write your message..." className="p-2 h-8 rounded-sm  border-none focus:outline-none" />
            <button type="submit" className="bg-green-500 text-white py-1 rounded-sm font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default App;
