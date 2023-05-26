import { StoreContext } from "../context/dataContext";

const Dashboard = () => {
  const { dataMessages, deleteMessage } = StoreContext();
  return (
    <section className="mx-auto my-2 max-w-7xl px-5">
      <h2 className="text-lg font-semibold my-3">Dashboard</h2>
      <div className="flex flex-col gap-y-3 mt-2 divide-y divide-solid">
        {dataMessages.map((data) => (
          <div key={data.id} className="flex justify-between pt-4">
            <div>
              <p className="text-sm">Message:</p>
              <p>{data.message}</p>
            </div>
            <button onClick={() => deleteMessage(data.id)} className="self-end text-red-500 font-semibold hover:underline">
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
