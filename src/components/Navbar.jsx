const Navbar = () => {
  return (
    <nav className="flex sm:justify-end justify-center bg-green-400 py-2">
      <div className="mr-10 flex gap-x-5 text-sm text-white font-semibold">
        <button className="bg-white/40 rounded-sm px-2 py-1 hover:opacity-80">Log In</button>
        <button className="bg-white/40 rounded-sm px-2 py-1 hover:opacity-80">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
