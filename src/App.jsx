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
      <section className="flex flex-col gap-y-6 max-w-xl py-6 sm:mx-auto">
        <h2 className="text-lg font-semibold">Anonymous Messages for Fulan</h2>
        <div className="flex flex-col gap-y-4 bg-gray-50 shadow-md rounded-sm py-3 px-2">
          <div className="bg-white px-2 py-3 rounded-sm shadow-sm">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse libero autem earum dolor corrupti, quaerat asperiores obcaecati dolorum harum veritatis voluptatibus ab, illum officiis?</p>
          </div>
          <div className="bg-white px-2 py-3 rounded-sm shadow-sm">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur error deserunt distinctio.</p>
          </div>
          <div className="bg-white px-2 py-3 rounded-sm shadow-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam rem excepturi quam facilis ullam pariatur voluptates. Perspiciatis excepturi repellat aperiam alias sequi sapiente expedita omnis quam vitae repellendus?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
