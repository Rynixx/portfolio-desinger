// pages/projects/[id].js
import { useRouteData } from "@solidjs/router";

export default function Project() {
  const user = useRouteData();
  return <h1>{user().name}</h1>;
}