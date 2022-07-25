interface Props {
  name: string | null;
  categoryId: number | null;
  color: string;
  textColor: string;
  selectedSectorId: number;
  getSectorItems: Function;
}

const SectorCategoryButton = ({
  name,
  color,
  textColor,
  selectedSectorId,
  categoryId,
  getSectorItems,
}: Props) => {
  // console.log(selectedSectorId, categoryId);
  return (
    <button
      onClick={() => getSectorItems(categoryId)}
      className={`inline-flex align-middle mt-3 px-8 py-3 h-11 text-base justify-center items-center mr-4 ${
        selectedSectorId === categoryId ? 'bg-black' : `bg-[${color}]`
      } text-[${textColor}] hover:bg-black transition-all sm:px-5 sm:py-[10px] sm:h-[30px] sm:text-[10px] sm:mr-[10px] sm:mt-2`}
    >
      {name}
    </button>
  );
};

export default SectorCategoryButton;
