import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <header className="row d-flex align-items-end justify-content-between">
        {router.pathname === "/" ? (
          <div className="col-sm-12">
            <h2 className="col display-3 font-weight-normal">
              <Link href="/">Blog.</Link>
            </h2>
          </div>
        ) : (
          <div className="col-sm-12">
            <h2 className="col display-5 font-weight-normal">
              <Link href="/">Blog.</Link>
            </h2>
          </div>
        )}
        {router.pathname === "/" && (
          <div className="col">
            <p className="h4 col">A Next.js Blog By Rohan Shakya.</p>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
