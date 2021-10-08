export const Layout = ({ children }): JSX.Element => (
  <div className="w-full flex flex-col p-2 md:p-32 space-y-8 items-center bg-gray-200 fixed inset-0 overflow-y-scroll">
    {children}
  </div>
)
