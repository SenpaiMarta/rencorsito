import CartWidget from './CartWidget'
import AvatarComp from './AvatarComp'
import SearchComp from './SearchComp'

export default function NavBar () {
    return (
        <div className="barraPpal">
            <AvatarComp/>
            <nav className="navbar">
                <button className='botonMenu'>EL TEAM</button>
                <button className='botonMenu'>REGALA RENCOR</button>
                <button className='botonMenu'>APOYA EL RENCOR</button>
                <button className='botonMenu'>CONTACTA</button>
            </nav>
            <SearchComp/>
            <CartWidget/>
        </div>
    )
}