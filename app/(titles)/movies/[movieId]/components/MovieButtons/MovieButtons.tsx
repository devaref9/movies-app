import Link from "next/link";

const MovieButtons = () => {
  return (
    <div className="flex gap-2">
      <Link
        href={"/"}
        className="btn btn-primary flex items-center justify-center py-2"
      >
        پخش آنلاین
      </Link>
      <Link
        href={"/"}
        className="btn btn-secondary flex items-center justify-center py-2"
      >
        دانلود
      </Link>
    </div>
  );
};

export default MovieButtons;
