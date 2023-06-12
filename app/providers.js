import { MovieProvider } from "./contexts/MovieContext";

export function Providers({ children }) {
  return <MovieProvider>{children}</MovieProvider>;
}
