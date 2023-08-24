import LayoutOne from "./layouts/LayoutOne";
import LayoutTwo from "./layouts/LayoutTwo";

export default function App() {
  const authPage = true;
  return (
    <div className="h-screen">
      {authPage ? (
          <LayoutTwo />
      ) : (
          <LayoutOne />
      )}
    </div>
  );
}
