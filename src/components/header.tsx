import shirtup from "../assets/shirtup.svg";

interface Props {
  items: string[];
  heading: string;
  accentColor?: "blue" | "yellow" | "pink" | "green";
}

const Header = ({ items, heading, accentColor = "blue"}: Props) => {
  return (
    <header className="bg-black text-white font-satoshi text-sm border-b border-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className={"-m-1.5 p-1.5 text-" + accentColor}>
            {heading}
          </a>
        </div>
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-6 w-auto" src={shirtup} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {items.map((item, index) => (
            <a href={"#" + item} key={index} className="text-sm leading-6 text-white">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <div className="hidden lg:hidden bg-black" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ShirtUp</span>
              <img className="h-6 w-auto" src={shirtup} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {items.map((item, index) => (
                  <a
                    href="#"
                    key={index}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-sm  leading-7 text-white "
                >
                  Made with <span className="text-pink">love</span> by Francisco
                  L. Mota
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
