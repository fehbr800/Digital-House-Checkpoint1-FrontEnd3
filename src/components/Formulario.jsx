import{ useState } from 'react';
import Modal from './Modal';

export default function Formulario(){

    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')
    const [assunto, setAssunto ] = useState('')

function getName(isName){
    setName(isName) 

}

function getEmail(isEmail){
    setEmail(isEmail) 

}
function getAssunto(isAssunto){
    setAssunto(isAssunto) 

}




}