import { useAtomValue } from "jotai";
import { sideActive } from "../../contexts/SideBarContext";

const SideBarMobile = () => {
    const active = useAtomValue(sideActive);
  if (!active) return;
  if (active && window.innerWidth <= 1024)
  return (
    <div className='bg-back-dark transp  z-20 absolute overflow-auto top-4 right-4 bottom-4 left-4'>
        <div className="bg-back-dark top-4 right-4 bottom-4 left-4">
            <div>

            </div>

            <div>

            </div>
        </div>
    </div>
  )
}

export default SideBarMobile