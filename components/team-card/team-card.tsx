interface Props {
  name: string;
  position: string;
  company: string;
  active: string;
  exit: string;
}

const TeamCard = ({ name, position, company, active, exit }: Props) => {
  return (
    <div className='pt-5 w-[266px] h-[370px] border-t-[3px] border-[#707070]'>
      <div className='font-semibold text-3xl text-[#333333]'>{name}</div>
      <div className='text-[#666666]'>
        <div className=' text-xl'>{position}</div>
        <div className='mt-3 text-lg'>{company}</div>
        {active ? (
          <div>
            <div className='mt-3 font-semibold'>Active:</div>
            <div>{active}</div>
          </div>
        ) : null}
        {exit ? (
          <div>
            <div className='mt-3 font-semibold'>EXIT:</div>
            <div>와이엠텍, 세경하이테크, 휴이노, 가드넥, 지디케이화장품</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TeamCard;