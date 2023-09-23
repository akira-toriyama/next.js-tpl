import * as c from "./ItemEdit";
import * as mock from "./itemEdit.mock";

export const Empty: React.FC = () => <c.Empty />;

export const Loading: React.FC = () => <c.Loading />;

export const ItemEditNormal: React.FC = () => (
  <c.ItemEditComponent {...mock.makeItemEditProps()} />
);

export const ItemEditError: React.FC = () => (
  <c.ItemEditComponent {...mock.makeItemEditProps({ type: "hasError" })} />
);
