import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold">This is a piece of text</h1>
      <UserButton />
    </div>
  );
}
