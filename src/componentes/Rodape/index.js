import "./Rodape.css"

const Rodape = () => {
    return (
        <footer className="footer">
            <div className="contato">
                <img src="/imagens/fb.png" alt="Facebook"/>
                <img src="/imagens/tw.png" alt="Twitter"/>
                <img src="/imagens/ig.png" alt="Instagram"/>
            </div>
            <img className="logo" src="/imagens/logo.png" alt="Logo Organo"/>
            <p>Desenvolvido por Alura & Massacrua.</p>          
        </footer>
    )
}

export default Rodape