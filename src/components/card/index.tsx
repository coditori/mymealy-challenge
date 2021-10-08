export const Card = ({ children }): JSX.Element => (
  <div className="container w-full lg:w-2/3 xl:w-1/2 bg-white p-2 md:p-10 rounded flex flex-col md:flex-row items-center space-y-4 md:space-x-10 shadow-2xl">
    {children}
  </div>
)
