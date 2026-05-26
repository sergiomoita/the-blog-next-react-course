import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-2xl/tight sm:text-4xl",
    h2: "text-2xl/tight ",
  };

  const commonClasses = "font-extrabold";

  return (
    <Tag className={`${headingClassesMap[Tag]} ${commonClasses}`}>
      <Link href={url} className="hover:text-slate-600">
        {children}
      </Link>
    </Tag>
  );
}
