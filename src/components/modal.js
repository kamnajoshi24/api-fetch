import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Form, Label, Input, Main } from "../styles/modal";
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

const Modals = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    props?.fun(data);
  };

  return (
    <Main >
      <Modal isOpen={props?.show} ariaHideApp={false}>
        <button onClick={props?.close}>close</button>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Id</Label>
          <Input defaultValue={props?.data.id} {...register("ID")} />
          <Label>Title</Label>
          <Input defaultValue={props?.data.title} {...register("Title")} />
          <Label>Description</Label>
          <Input
            defaultValue={props?.data.description}
            {...register("Description")}
          />
          <Label>Category</Label>
          <Input
            defaultValue={props?.data.category}
            {...register("Category")}
          />
          <Label>Price</Label>
          <Input defaultValue={props?.data.price} {...register("Price")} />
          <Label>Image</Label>
          <Input defaultValue={props?.data.image} {...register("Image")} />

          <Input  type="submit"/>
        </Form>
      </Modal>
    </Main>
  );
};

export default Modals;
