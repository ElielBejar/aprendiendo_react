export function Button({children, classButton}){

    return (
        <button className={classButton}>
           {children}
        </button>
    );
}