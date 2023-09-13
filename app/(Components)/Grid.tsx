export function Grid({ colRange, children = [], className = "" }: { colRange: number, children?: JSX.Element[], className?: string }) {
    return (<div className={"grid " + className} style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${colRange}px, 1fr))` }}>
        {children}
    </div>)
}