const Banner = () => {
  return (
    <div className=" bg-white bg-[url(https://media.istockphoto.com/id/1480574526/photo/happy-multigenerational-people-having-fun-sitting-on-grass-in-a-public-park.webp?b=1&s=612x612&w=0&k=20&c=pFM42auh4hBX6Srn2JS8xiLOqWxo2nfC5_GSZMAh6y8=)] bg-cover bg-center bg-blend-overlay bg-opacity-70  sm:h-[400px] h-[350px] flex flex-col justify-center items-center  rounded-md mb-8">
      <div className="flex rounded-md justify-center overflow-hidden bg-white w-10/12 md:w-7/12 ">
        <input
          className="bg-white py-1 px-3 block w-full"
          type="text"
          name=""
          id=""
          placeholder="Type here"
        />
        <button className="btn btn-error border-0 outline-0 rounded-none text-white font-semibold text-lg">
          search
        </button>
      </div>
    </div>
  );
};

export default Banner;
