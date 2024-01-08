import { ChevronLeft } from "lucide-react";
import React, { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="pt-8 ">
      {/* <div className="flex gap-1 items-center typo-muted">
        <ChevronLeft />
        Go Back
      </div> */}
      {children}
    </div>
  );
}

export default Layout;
