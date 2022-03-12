import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditCar = (props) => {
  const { editCar, cars } = useContext(GlobalContext);
  const [selectedCar, setSelectedCar] = useState({
    id: '',
    name: ''
  })
  const history = useHistory();
  const currentCarId = props.match.params.id;

  useEffect(() => {
    const carId = currentCarId;
    const selectedCar = cars.find(car => car.id === carId);
    setSelectedCar(selectedCar);
  }, [currentCarId, cars])

  const onChange = (e) => {
    setSelectedCar({ ...selectedCar, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editCar(selectedCar);
    history.push("/")
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={selectedCar.name} onChange={onChange} name="name" placeholder="Enter car" required></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}