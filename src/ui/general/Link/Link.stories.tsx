import * as c from "./Link";
import { pagesPath } from "~/$path";

export const Link: React.FC = () => (
  <c.Link
    {...{
      href: pagesPath.$url().path,
    }}
  >
    Home
  </c.Link>
);
