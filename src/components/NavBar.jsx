import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'
import AvatarComp from './AvatarComp'
import SearchComp from './SearchComp'

export default function NavBar () {
    return (
        <div className="barraPpal">
            <AvatarComp/>
            <nav className="navbar">
                <button className='botonMenu'><Link className="enlacesBoton" to={'/regala'}>REGALA RENCOR</Link></button>
                <button className='botonMenu'><Link className="enlacesBoton" to={'/apoya'}>APOYA EL RENCOR</Link></button>
                <button className='botonMenu'><Link className="enlacesBoton" to={'/contacta'}>CONTACTA</Link></button>
            </nav>
            <SearchComp/>
            <CartWidget/>
        </div>
    )
}