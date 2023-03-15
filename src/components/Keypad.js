// Code Keypad Component Here

function Keypad (){
    const handleChange = ()=> {
        console.log('Entering password...')
    }
    return (
        <form>
            <input onChange={handleChange} type="password"/>
        </form>
    )
}

export default Keypad;