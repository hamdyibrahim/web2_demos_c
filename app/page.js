import Link from "next/link";
export default function Page() {
  const weeks = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main>
      <h1 className="text-4xl text-blue-600 font-bold">
        Welcome to Web2 Demos
      </h1>
      {weeks.map((week) => (
        <div key={week}>
          <Link href={`week-${week}`} className="font-bold text-xl">
            Week {week}
          </Link>
        </div>
      ))}
    </main>
  );
}
