import Link from "next/link";

interface AppCardProps {
  appName: string;
  appDescription: string;
}

export default function AppCard({ appName, appDescription }: AppCardProps) {
  return (
    <Link href="/form-app">
      <div className="flex flex-col h-48 text-center bg-slate-400">
        <h1 className="p-6 text-lg">{appName}</h1>
        <div>{appDescription}</div>
      </div>
    </Link>
  );
}
