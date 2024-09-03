import { useEffect, useState } from "react";

export default function useWindow() {
    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)

    const handleHeight = () => {
        setHeight(window.innerHeight)
    }
    const handleWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleHeight);
        window.addEventListener('resize', handleWidth);

        return () => {
            window.removeEventListener('resize', handleHeight);
            window.removeEventListener('resize', handleWidth);
        };
    }, []);

    return {
        height,
        width,
        handleHeight,
        handleWidth,
    }
}