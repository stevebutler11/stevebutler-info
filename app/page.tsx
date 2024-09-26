import Link from "next/link";

export const runtime = "edge";

export default function Home() {
  return (
    <main>
      <p className="text-4xl md:text-6xl py-8 font-extrabold">
        Hi, I&#39;m Steve 👋
      </p>
      <p className="text-lg md:text-xl py-2">
        I live in Saltaire, West Yorkshire.
      </p>
      <p className="text-lg md:text-xl py-2">
        I wear many hats at{" "}
        <Link
          className="underline"
          href="https://asdlighting.com"
          target="_blank"
        >
          ASD lighting plc
        </Link>
        , but mainly I&#39;m focused on software development.
      </p>
      <p className="text-lg md:text-xl py-2">
        Have a look around. If you&#39;d like to chat, contact me! I&#39;m on{" "}
        <Link
          className="underline"
          href="https://github.com/stevebutler11"
          target="_blank"
        >
          GitHub
        </Link>{" "}
        and{" "}
        <Link
          className="underline"
          href="https://www.linkedin.com/in/steven-butler-3749a6a4/"
          target="_blank"
        >
          LinkedIn
        </Link>
        , or you can email me at{" "}
        <p className="italic">contact at stevebutler dot info</p>
      </p>
    </main>
  );
}
