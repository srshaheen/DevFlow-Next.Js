import Image from "next/image";

export default function GlobalSearch() {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="bg-black/5 relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image src="/assets/icons/search.svg" alt="search" width={24} height={24} />
      </div>
    </div>
  );
}
