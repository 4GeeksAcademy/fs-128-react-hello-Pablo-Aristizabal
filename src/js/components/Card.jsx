export const Card = (props) => {

    console.log(props);

    return (
        <div className="col-md-3 col-sm-6 p-2" >
            <div className="card" style= {{height:"100%"}}>
                <div className="d-flex" style={{width:"100%", aspectRatio:"3/4", objectFit:"fill", overflow: "hidden"}}>
                    <img src={props.character.image} className="card-img-top p-2" style= {{objectFit:"cover"}} alt="..." />
                </div>
                <div className="card-body"  >
                    <h5 className="card-title">{props.character.name}</h5>
                    <p className="card-text">{props.character.description}</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>

    )
}