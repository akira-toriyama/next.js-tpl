import * as c from "./ItemDetail";
import * as mock from "./itemDetail.mock";

export const Empty: React.FC = () => <c.Empty />;
export const Loading: React.FC = () => <c.Loading />;
export const ItemDetail: React.FC = () => (
  <c.ItemDetail {...mock.makeItemDetailProps()} />
);
