import Meta from "./meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="container mx-auto  my-5">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
