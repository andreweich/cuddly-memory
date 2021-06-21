function PieceOfArt({ longTitle, imgPath, title }) {
    
    // const {longTitle, imgPath, title} = props;

    return (
        <div>
            <h2>{longTitle}</h2>
            <img src={imgPath} alt={title}/>
        </div>
    )
}

export default PieceOfArt;