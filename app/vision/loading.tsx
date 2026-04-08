export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
      <div className="animate-pulse space-y-4 text-center">
        <div className="h-10 w-56 bg-white/10 rounded mx-auto" />
        <div className="h-4 w-72 bg-white/10 rounded mx-auto" />
        <div className="h-4 w-64 bg-white/10 rounded mx-auto" />
      </div>
    </div>
  );
}
