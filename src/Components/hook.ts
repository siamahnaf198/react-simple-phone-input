import React from 'react';

//Click out side hook
export function useOnClickOutside(ref: React.RefObject<HTMLDivElement>, handler: (e: MouseEvent | TouchEvent) => void) {
    React.useEffect(
        () => {
            const listener = (event: MouseEvent | TouchEvent) => {
                if (!ref.current || ref.current.contains(event.target as Node)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}