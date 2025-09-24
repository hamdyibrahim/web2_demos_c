import Link from "next/link";
export default function Page() {
  return (
    <main>
      <h1 className="font-bold text-4xl">Welcome to Web2 Demos</h1>
      <Link href="/week-2">Week 2</Link>
      <br />
      <Link href="week-3">Week 3</Link>
      <br />
      <Link href="week-4">Week 4</Link>
    </main>
  );
}
