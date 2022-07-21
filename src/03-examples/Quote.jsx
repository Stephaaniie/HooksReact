import { useLayoutEffect } from "react";
import { useRef } from "react"

export const Quote = ({author, quote}) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, heigth: 0});
    useLayoutEffect(() => {
        const {heigth, width} = pRef.current.getBoundingClientRect();
        setBoxSize({heigth, width});
    },[quote])
    return (        
        <blockquote 
            className="blockquote text-end"
            style={{display:'flex'}}>
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
            <code>{JSON.stringify(boxSize)}</code>
        </blockquote>
    )
}
