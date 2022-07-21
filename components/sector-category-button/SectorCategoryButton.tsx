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
      className={`inline-block align-middle mt-3 px-8 py-3 h-11 mr-4 ${
        selectedSectorId === categoryId ? 'bg-black' : `bg-[${color}]`
      } text-[${textColor}] hover:bg-black transition-all`}
    >
      {name}
    </button>
  );
};

export default SectorCategoryButton;
