import React from 'react';

/*export default function Trucks({data}){
    return(
        <div className="truck-card">
        <FavoriteTrucks/>
         <Card>
            <CardHeader>Truck name:{data}</CardHeader>
            <CardBody>
            <CardImg src={data}/>
            <CardTitle>Rating: {data}</CardTitle>
            <Button>Edit truck</Button>
            </CardBody>
            <CardFooter>Address: {data}</CardFooter>
         </Card>
        </div>
    )
}*/
const TruckCard = props => {
    return(
        <div className="truck-card">
            <h1>{props.name}</h1>
            <img src={props.img}/>
            <div>
                <p>Rating: {props.rating}</p>
                <p>Address: {props.address}</p>
            </div>
                <button>Edit Truck</button>
        </div>
    )
}
export default TruckCard;