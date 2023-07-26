"use client"

import { useState } from "react";
import { Sidebar } from "./components/sidebar";

const page = () => {
const [sidebarOpened,  setSidebarOpened] = useState(false);

const  closeSidebar = () => {
  setSidebarOpened(false);
}

return (
  <main className="flex min-h-screen bg-gpt-gray">

<Sidebar
  open={sidebarOpened}
  onClose={closeSidebar}
>

</Sidebar>
<section className=" flex  flex-col w-full">
   <button onClick={() => setSidebarOpened (true)}>Abrir sidebar</button>
</section>
  </main>
 );

}

export default page;