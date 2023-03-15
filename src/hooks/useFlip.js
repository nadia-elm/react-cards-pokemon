import {useState} from 'react'

const useFlipCard = () => {
 const [state, setState] = useState(true);
 const toggleState = () => {
    setState( state => !state)
 }
 return [state, toggleState]

  

};
export default useFlipCard;