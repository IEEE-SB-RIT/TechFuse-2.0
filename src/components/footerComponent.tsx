import React from 'react';
import {ArrowUpRight} from "lucide-react";

function FooterComponent({page}: {page: string}) {
    return (
        <div className="flex items-center gap-3 text-white hover:text-[#66FFFF] transition transition">
            <span>{page}</span>
            <ArrowUpRight size={14}/>
        </div>
    );
}

export default FooterComponent;