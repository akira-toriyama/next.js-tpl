import * as c from "./Items";
import * as mock from "./items.mock";

export const Empty: React.FC = () => <c.Empty />;
export const Loading: React.FC = () => <c.Loading />;
export const Items: React.FC = () => <c.Items {...mock.makeItemsProps()} />;
