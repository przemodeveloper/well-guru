const CommunityInvite = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2">Dołącz do społeczności</h2>
      <p className="text-xl text-gray-500 text-center mb-4">
        Raz w miesiącu otrzymasz newsletter z nadchodzącymi wydarzeniami
      </p>
      <div className="flex gap-3">
        <input
          type="email"
          placeholder="you@example.com"
          className="border border-gray-300 rounded-xl px-3 py-2"
        />
        <button className="bg-black text-white px-3 py-2 rounded-xl cursor-pointer inline-block text-center">
          Dołącz
        </button>
      </div>
    </div>
  );
};

export default CommunityInvite;
