namespace MENU {
  export type GetMenuRequest = void;

  export type ProductList = {
    id: number;
    name: string;
    product_description: string;
    price: number;
  };

  export type CategoryList = {
    id: number;
    title: string;
    category_name: string;
    foods: ProductList[];
  };

  export type MenuList = {
    id: number;
    title: string;
    category: CategoryList;
    menu_name: string;
    menu_description?: string | null; 
  };

  export type GetMenuResponse = MenuList[];
}
