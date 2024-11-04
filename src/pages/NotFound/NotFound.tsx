import { MdError } from "react-icons/md";
function NotFound() {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="flex flex-col gap-2 items-center">
        <h1>
          <MdError className="text-6xl text-red-500 text-center" />
        </h1>
        <span className="text-4xl text-neutral">Ooops 404! Page not found</span>
      </div>
    </div>
  );
}
export default NotFound;
