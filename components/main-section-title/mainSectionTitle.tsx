interface Props {
  title: string;
  isDark: boolean;
}

const MainSectionTitle = ({ title, isDark }: Props) => {
  return (
    <div>
      <div
        className={`font-pretender text-4xl ${
          isDark ? 'text-white' : 'text-gray-40'
        } uppercase`}
      >
        {title}
      </div>
      <div
        className={`mt-[22px] w-[117px] h-[5px] ${
          isDark ? 'bg-[#FFFFFF87]' : 'bg-[#00000087]'
        }`}
      ></div>
    </div>
  );
};

export default MainSectionTitle;
