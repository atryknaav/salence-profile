const Upgrade = () => {
  return (
    <div className="flex flex-col bg-upgrade flex-1 p-3 rounded-lg justify-center items-center gap-6">
      <div className="font-semibold text-xl text-white flex justify-start items-start w-full">
        Release your maximal
        <br /> potential software
      </div>
      <button className="py-2 px-6 w-full  bg-success rounded-md font-bold hover:bg-[#b1e15d] active:bg-[#a4d157] active:scale-95 duration-100">
        Upgrade to Pro
      </button>
    </div>
  );
};

export default Upgrade;
