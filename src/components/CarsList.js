import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const CarsList = () => {
  const { cars, removeCar } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {cars.length > 0 ? (
        <>
          {cars.map(car => (
            <ListGroupItem className="d-flex" key={car.id}>
              <strong>{car.name}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${car.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => removeCar(car.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Cars</h4>
        )}
    </ListGroup>
  )
}