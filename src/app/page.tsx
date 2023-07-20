"use client"

import { useState } from "react";
import { Sidebar } from "./components/sidebar";

const page = () => {
const [sidebarOpened,  satSidebarOpened] = useState(true);

const  closeSidebar = () => {

}

return (
  <main className="flex min-h-screen bg-gpt-gray">

<Sidebar
  open={sidebarOpened}
  onClose={closeSidebar}
>

</Sidebar>
<section className=" flex  flex-col w-full">
  ....
</section>
  </main>
 );

}

export default page;