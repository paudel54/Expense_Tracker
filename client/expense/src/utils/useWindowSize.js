import { useEffect, useState } from "react"


export const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])
    // when screen size changes useEffect is called. It's called on every change on screen SIze

    useEffect(() => {
        const updateSize = () => {
            // window is global object
            setSize([window.innerWidth, window.innerHeight])
        }
        // call and update on every change in screenSize;
        window.addEventListener('resize', updateSize)
        // cleanup Listeners
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return {
        width: size[0],
        height: size[1]
    }
}