interface ICardCarroselProps {
    imagem: string;
    rating: number;
    starFilled: string;
    starEmpty: string;
    texto: string;
    nome: string;
    cargo: string;
}

export default function CardCarrosel({
    imagem,
    rating,
    starFilled,
    starEmpty,
    texto,
    nome,
    cargo,
}: ICardCarroselProps) {
    const normalizedRating = Math.max(0, Math.min(5, rating));
    const filledStars = Math.round(normalizedRating);

    return (
        <>
        <div className="carousel-card">
            <img src={imagem} alt="" />
            <span className="testimony">
                <p>{texto}</p>
            </span>
            <span className="rating">
                {Array.from({ length: 5 }, (_, index) => (
                    <img
                        key={index}
                        src={index < filledStars ? starFilled : starEmpty}
                        alt={index < filledStars ? "Estrela preenchida" : "Estrela vazia"}
                    />
                ))}
            </span>
            <span>
                <p className="names">{nome}</p>
                <p>{cargo}</p>
            </span>
        </div>
        </>
    );
}