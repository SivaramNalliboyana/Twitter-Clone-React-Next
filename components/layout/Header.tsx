import { useRouter } from "next/router";
import { useCallback } from "react";

interface HeaderProps {
    label: string
    showBackArrow?: boolean
}



const Header: React.FC<HeaderProps> = ({label, showBackArrow}) =>{
    const router = useRouter();
    const handleBack = useCallback(()=>{
        router.back();
    }, [router])
    return (
       <div className="px-6 py-4 hidden lg:block">
       
       </div>
    );
}

export default Header;