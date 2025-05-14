import React from "react";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const quantity = form.quantity.value;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      quantity,
      name,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-black">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label flex">
              <span className="label-text text-black">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered md:w-full bg-white text-black"
                name="name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label flex">
              <span className="label-text text-black">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered md:w-full bg-white text-black"
                name="quantity"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label flex">
              <span className="label-text text-black">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Supplier Name"
                className="input input-bordered md:w-full bg-white text-black"
                name="supplier"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label flex">
              <span className="label-text text-black">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Taste"
                className="input input-bordered md:w-full bg-white text-black"
                name="taste"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label flex">
              <span className="label-text text-black">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category Name"
                className="input input-bordered md:w-full  bg-white text-black"
                name="category"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label flex">
              <span className="label-text text-black">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Details"
                className="input input-bordered md:w-full  bg-white text-black"
                name="details"
              />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label flex">
              <span className="label-text text-black">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo"
                className="input input-bordered md:w-full  bg-white text-black"
                name="photo"
              />
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-block">
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
