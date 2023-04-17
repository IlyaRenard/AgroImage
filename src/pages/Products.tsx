import DropDownMenu from "../components/DropDownMenu";
import {
  cereals,
  corn,
  fertilizer,
  herbs,
  rapeseed,
  soya,
} from "../data/category";

const Products = () => {
  return (
    <div>
      <div className="flex flex-row justify-around mt-5">
        <div className=" border-r-2">
          <h1 className=" text-2xl border-b-2">Ассортимент</h1>
          <DropDownMenu category={corn} />
          <DropDownMenu category={soya} />
          <DropDownMenu category={cereals} />
          <DropDownMenu category={rapeseed} />
          <DropDownMenu category={herbs} />
          <DropDownMenu category={fertilizer} />
        </div>
        <div>Товар</div>
      </div>
    </div>
  );
};

export default Products;
