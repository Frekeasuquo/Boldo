import { ReactNode } from "react";
import { cn } from "../libs/utils";



const MaxWidthWrapper = ({className, children}: {className?: string, children: ReactNode}  ) => {

    return (
        <div className={cn ("mx-auto w-full max-w-screen-xl px-2 md:20px p-6", className)}>
            {children}
        </div>
    )
}


export default MaxWidthWrapper;