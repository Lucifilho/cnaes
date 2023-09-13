import Link from 'next/link'

export default function Navbar(){

    const date = new Date();
    const year = date.getFullYear();

    return (
        
        <>
        <div className='rodape text-bg-dark d-flex justify-content-center'>
            
            <span> &copy; Todos direitos reservados Luciel Filho. {year}</span>

        </div>
        </>
    )
}