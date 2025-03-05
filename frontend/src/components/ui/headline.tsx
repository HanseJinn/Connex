import { useLocation } from 'react-router-dom';

const Headline = () => {
  const location = useLocation();

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/login":
        return "Login";
      default:
        return "Connex";
    }
  };

  return (
    <header className="grid auto-rows-min gap-4 md:grid-cols-1">
      <div className=" bg-background/100 text-center flex items-start justify-center p-3.5">
        <h1 className="label text-primary font-extrabold text-5xl">
          {getPageTitle(location.pathname)}
        </h1>
      </div>
    </header>
  );
};

export default Headline;