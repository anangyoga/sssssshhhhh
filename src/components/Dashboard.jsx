const Dashboard = () => {
  return (
    <section className="mx-auto my-2 max-w-7xl">
      <h2 className="text-lg font-semibold my-3">Dashboard</h2>
      <div className="flex flex-col gap-y-3 mt-2 divide-y divide-solid">
        <div className="flex justify-between pt-4">
          <div>
            <p className="text-sm">Message:</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <button className="self-end text-red-500 font-semibold hover:underline">Delete</button>
        </div>
        <div className="flex justify-between pt-4">
          <div>
            <p className="text-sm">Message:</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, libero voluptate sit distinctio quisquam impedit suscipit laudantium beatae ex sequi, voluptatem quos dignissimos debitis facilis dicta consequatur provident
              nostrum, quam quas corporis vel! Impedit, distinctio officia! Nobis sit quos ab nostrum eos numquam.
            </p>
          </div>
          <button className="self-end text-red-500 font-semibold hover:underline">Delete</button>
        </div>
        <div className="flex justify-between pt-4">
          <div>
            <p className="text-sm">Message:</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis alias natus, doloremque rem suscipit ratione quisquam in. Consequatur quod incidunt eveniet. Explicabo ducimus omnis sequi amet ex corporis quaerat.
              Quae, quia.
            </p>
          </div>
          <button className="self-end text-red-500 font-semibold hover:underline">Delete</button>
        </div>
        <div className="flex justify-between pt-4">
          <div>
            <p className="text-sm">Message:</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis, consectetur, minus quod voluptatum provident, praesentium facilis sint blanditiis quam officiis iusto id doloremque! Doloremque minus ducimus libero at
              assumenda porro debitis optio cumque aliquid cum necessitatibus deserunt nostrum, corporis aspernatur laborum. Aliquam assumenda reiciendis esse ipsum, dicta odit magni! Saepe adipisci, amet distinctio odio modi iusto natus
              rerum temporibus reiciendis non.
            </p>
          </div>
          <button className="self-end text-red-500 font-semibold hover:underline">Delete</button>
        </div>
        <div className="flex justify-between pt-4">
          <div>
            <p className="text-sm">Message:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate mollitia quam eos sint corporis.</p>
          </div>
          <button className="self-end text-red-500 font-semibold hover:underline">Delete</button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
