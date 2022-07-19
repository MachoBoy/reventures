interface Props {
  name: string;
  color: string;
  textColor: string;
  bgHover?: string;
  selectedSector?: string;
}

const SectorCategoryButton = ({
  name,
  color,
  textColor,
  bgHover,
  selectedSector,
}: Props) => {
  return (
    <button
      className={`inline-block align-middle mt-3 px-8 py-3 h-11 mr-4 ${
        selectedSector === name ? 'bg-black' : ` bg-[${color}]`
      } text-[${textColor}] hover:${bgHover}`}
    >
      {name}
    </button>
  );
};

export default SectorCategoryButton;
