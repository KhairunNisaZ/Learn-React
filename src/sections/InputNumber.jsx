export const InputNumber = () => {
  return (
    <div className="max-w-fit border flex p-2 rounded-full bg-white">
      <form className="flex items-center gap-2">
        <div>
          <input
            className="text-lg p-2 font-semibold focus:outline-none"
            placeholder="+6200912311"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-orange-500 text-base text-white font-medium py-2 px-8 rounded-full active:scale-95 active:bg-orange-600"
          >
            Dapatkan Diskon
          </button>
        </div>
      </form>
    </div>
  );
};
