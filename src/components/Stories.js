function Story(props){
    return(
        <div class="story">
            <div class="imagem">
                <img src={props.Story.imagem} />
            </div>
            <div class="usuario">
                {props.Story.nome}
            </div>
       </div>
    )
}

export default function Stories(){
    
    const stories = [
        { nome: "9gag", imagem: "assets/img/9gag.svg" },
        { nome: "meowed", imagem: "assets/img/meowed.svg" },
        { nome: "barked", imagem: "assets/img/barked.svg"},
        { nome: "nathanwpylestrangeplanet" , imagem: "assets/img/nathanwpylestrangeplanet.svg"},
        { nome: "wawawicomics", imagem: "assets/img/wawawicomics.svg"},
        { nome: "respondeai", imagem: "assets/img/respondeai.svg"},
        { nome: "filomoderna", imagem: "assets/img/filomoderna.svg"},
        { nome: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg"}
    ]
    return (
        <div class="stories">
                {stories.map((mostrar) => <Story Story={mostrar}/>)}
            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}