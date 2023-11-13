import { useAtom, useAtomValue } from "jotai";
import { arrowUp, shopBag, users, star, arrowBack } from "../svg/icons";
import { blockAtom } from "../contexts/blockContext";
import { BlockName } from "../types/BlockName";
import { isDarkMode } from "../contexts/themeContext";

const TopBlock = (props: {
  name: BlockName;
  status: string;
  weekPercent: string;
  weekNum: string;
}) => {
  const isDark = useAtomValue(isDarkMode);
  const { name, status, weekPercent, weekNum } = props;
  const [currBlock, setCurrBlock] = useAtom(blockAtom);

  const iconList: { [key: string]: JSX.Element } = {
    "Total sales": shopBag,
    Visitors: users,
    "Total orders": star,
    Refunded: arrowBack,
  };

  const icon = iconList[name];

  const styleBody =
    name === currBlock
      ? ` bg-success ${
          isDark
            ? "text-white border-border border-r-[1px] border-r-border last:border-none"
            : "text-black border-[1px] border-slate-200"
        }`
      : ` transition-colors hover:bg-success hover:cursor-pointer ${
          isDark
            ? "bg-back-dark text-white border-border border-r-[1px] last:border-none"
            : "bg-white text-black border-[1px] border-slate-200"
        }`;

  return (
    <div
      className={
        "flex flex-col group flex-1 first:rounded-l-lg last:rounded-r-lg p-3 mt-15 lg:mt-0 first:mt-[11vw] lg:first:mt-0" +
        styleBody
      }
      onClick={() => setCurrBlock(name)}
    >
      <div className="flex gap-2">
        <div
          className={`rounded-full p-1 h-[fit-content] bg-black ${
            name === currBlock
              ? "bg-black text-success"
              : `bg-black group-hover:bg-black group-hover:text-success ${
                  isDark ? "bg-light-gray" : "bg-black text-white"
                }`
          }`}
        >
          {icon}
        </div>

        <div
          className={`text-md mb-6 ${
            name === currBlock
              ? "text-black"
              : `${isDark ? "text-white" : "text-black"} group-hover:text-black`
          }`}
        >
          {name}
        </div>
      </div>

      <div
        className={`mb-3 font-semibold text-3xl ${
          name === currBlock
            ? "text-black"
            : `group-hover:text-black ${isDark ? "text-white" : "text-black"}`
        }`}
      >
        {`${status}`}
      </div>

      <div className="flex gap-3 text-sm font-medium mb-1">
        <div
          className={`flex items-center gap-2 ${
            name === currBlock
              ? "text-minor-success"
              : ` group-hover:text-minor-success ${
                  isDark ? "text-success" : "text-upgrade"
                }`
          }`}
        >
          {arrowUp} {`${weekPercent}%`}
        </div>

        <div
          className={`text-minor-dark ${
            name === currBlock
              ? "text-minor-success"
              : "text-minor-dark group-hover:text-minor-success"
          }`}
        >
          {`+${weekNum} this week`}
        </div>
      </div>
    </div>
  );
};

export default TopBlock;
