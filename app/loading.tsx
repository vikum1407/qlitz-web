export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <div className="h-10 w-10 rounded-full bg-white/10" />
        <div className="h-4 w-40 rounded bg-white/10" />
        <div className="h-4 w-64 rounded bg-white/10" />
      </div>
    </main>
  );
}
