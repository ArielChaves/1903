function App() {
    const usuario = {
        nome: 'Ariel Chaves',
        avatar: 'https://github.com/ogiansouza.png'
    }
    
    return (
        <div>
            <img src={usuario.avatar}/>
            <h1>{usuario.nome}</h1>
        </div>
    )
}

export default Perfil;