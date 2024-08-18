import './follower.css';

export function Follower({coords}){

    /*function positions(){
        return {
            top:`${coords.x}`,
            left:`${coords.y}`
        }
    }*/

    return (
        <div className='div' style={{'top':`${coords.y-25}px`, 'left':`${coords.x-25}px`}}>
        </div>
    );
}