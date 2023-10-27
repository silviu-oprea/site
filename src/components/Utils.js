import React, { useEffect, useState } from "react";


export function Link({href, children}) {

    return <a target="_blank" rel="noopener noreferrer" href={href}>
        {children}
    </a>
}