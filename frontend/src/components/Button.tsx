export function Button({ label, onPress, loading }: { label: string, loading?: boolean, onPress: (e: any) => void }) {
  return (
    <button
      type="button"
      disabled={loading}
      onClick={onPress}
      className={`w-full py-2.5 text-white font-medium rounded-lg bg-gray-800 hover:bg-black transition-all shadow-sm text-lg ${loading && "opacity-60 cursor-not-allowed"}`}
    >
      {loading ? "Please wait..." : label}
    </button>
  );
}
