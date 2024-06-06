export default () => {
  return (
    <>
      <div
        className={`h-screen flex items-center flex-col pt-36 object-fit`}
        style={{
          backgroundImage: "URL(bacgroundForSearchingComponent.png)",
          backgroundSize: "cover",
          backgroundPosition: "auto",
        }}
      >
        <div className="bg-white w-1/2 p-2 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Type your destination"
            className="p-1 w-10/12"
          ></input>
          <button className="bg-[#3C8F7C] float-end rounded-lg px-6 py-1 ">
            Search
          </button>
        </div>
        <h1 className="mt-12 text-3xl font-bold text-[#54c2a8]">
          Exploring a new city is easier now
        </h1>
      </div>
    </>
  );
};
