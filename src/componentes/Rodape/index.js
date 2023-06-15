import "./Rodape.css"
const Rodape = ()=>{
    return(
        <footer className="rodape">
            <section >
                <ul>
                <li><a href="#" target="_blank">
                        <img src="./imagens/fb.png" alt="Facebook" />
                    </a>
                 </li>
                 <li> 
                    <a href="#" target="_blank">
                        <img src="./imagens/tw.png" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <img src="./imagens/ig.png" alt="instagram" />  
                    </a>
                </li>
                </ul>



            </section>  
                             
            
            <section >
                <img src="./imagens/logo.png" alt="Logo" />
            </section>
            <div>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape