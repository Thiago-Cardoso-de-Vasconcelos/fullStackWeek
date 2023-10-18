import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Haeder = () => {
  return (
    <Card className="flex items-center justify-between p-[1.85rem]">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>
      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>
      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Haeder;
