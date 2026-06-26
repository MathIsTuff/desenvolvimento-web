interface ICardVantagemProps {
    imagem: string;
    titulo: string;
    descricao: string;
}

export default function CardVantagem({imagem, titulo, descricao}: ICardVantagemProps) {
    return (
        <>
            <div className="card">
                <span>
                    <img src={imagem} alt="ícone campeão" width={64} height={64} />
                </span>
                <div>
                    <h3>
                        {titulo}
                    </h3>
                    <p>
                        {descricao}
                    </p>
                    <hr />
                </div>
            </div>
        </>
    )
}