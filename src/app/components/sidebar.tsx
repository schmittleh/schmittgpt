import { ReactNode } from "react";
import IconClose from "./icons/iconClose";
import IconAdd from "./icons/iconAdd";

type Props = {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}


export const Sidebar = ({open, onClose, children }: Props)  => {

    return (

        <section  className={`fixed  left-0 top-0 bottom-0 text-white 
        ${open ? 'w-screen bg-gray-600/75' : 'w-0'} md:w-64`}>

            <div className={` transition-all duration-200  flex  h-screen 
            ${open ? 'ml-0' : '-ml-96'} md:ml-0`}>

              <div className="flex flex-col w-64  p-2 bg-gray-900">
                
                    <div className="">
                 <IconAdd width={16} height={16} />
                        Nova conversa
                    </div>



              </div>
                    <div onClick= {onClose} className=" flex justify-center items-center w-10 h-10 cursor-pointer md:hidden">
                    <IconClose width={24} height={24} />
                    </div>
            </div>
        </section>
    );
}