import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const CreateDish = () => {
  const [responseError, setResponseError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function createDish(dataForm) {
    const response = await fetch("https://api-dishes.vercel.app/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });
    const data = await response.json();
    if (data.state) {
      navigate("/");
    } else {
      setResponseError(data.data);
    }
  }

  return (
    <>
      <div className="container p-3">
        <h1>Create Dish</h1>
      </div>
      <div className="container p-3">
        <Link to="/">
          <button className="btn btn-primary">Go back</button>
        </Link>
      </div>
      <div className="container d-flex justify-content-center align-items-center p-4">
        <form className="row" onSubmit={handleSubmit(createDish)}>
          <div className="col-6 p-2">
            <label htmlFor="userId" className="form-label fw-bolder">
              Dish id:
            </label>
            <input
              type="text"
              className="form-control border-dark"
              name="idDish"
              id="idDish"
              {...register("idDish", {
                required: true,
              })}
            />
            {errors.idDish?.type === "required" && (
              <div className="text-danger">
                <small>This field is required.</small>
              </div>
            )}
          </div>
          <div className="col-6 p-2">
            <label htmlFor="userName" className="form-label fw-bolder">
              Name:
            </label>
            <input
              type="text"
              className="form-control border-dark"
              name="name"
              id="name"
              autoComplete="nope"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name?.type === "required" && (
              <div className="text-danger">
                <small>This field is required.</small>
              </div>
            )}
          </div>
          <div className="col-6 p-2">
            <label htmlFor="userLastName" className="form-label fw-bolder">
              Calories:
            </label>
            <input
              type="text"
              className="form-control border-dark"
              name="calories"
              id="calories"
              autoComplete="nope"
              {...register("calories", {
                required: true,
                pattern: /[0-9]/,
              })}
            />

            {errors.calories?.type === "required" && (
              <div className="text-danger">
                <small>This field is required.</small>
              </div>
            )}

            {errors.calories?.type === "pattern" && (
              <div className="text-danger">
                <small>Only numbers.</small>
              </div>
            )}
          </div>
          <div className="col-6 p-2">
            <label htmlFor="userPassword" className="form-label fw-bolder">
              Is vegetarian:
            </label>
            <select
              name="isVegetarian"
              id="isVegetarian"
              className="form-select border-dark"
              {...register("isVegetarian", {
                required: true,
              })}
            >
              <option selected>Select Yes or No</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {errors.isVegeratian?.type === "required" && (
              <div className="text-danger">
                <small>This field is required.</small>
              </div>
            )}
          </div>
          <div className="col-6 p-2">
            <label htmlFor="userRePassword" className="form-label fw-bolder">
              Value:
            </label>
            <input
              type="text"
              className="form-control border-dark"
              name="value"
              id="value"
              {...register("value", {
                required: true,
                pattern: /[0-9]/,
              })}
            />

            {errors.value?.type === "required" && (
              <div className="text-danger">
                <small>This field is required.</small>
              </div>
            )}

            {errors.value?.type === "pattern" && (
              <div className="text-danger">
                <small>Only numbers.</small>
              </div>
            )}
          </div>
          <div className="col-6 p-2">
            <label htmlFor="userEmail" className="form-label fw-bolder">
              Comments:
            </label>
            <textarea
              type="text"
              className="form-control border-dark"
              name="comments"
              id="comments"
              {...register("comments", {
                required: true,
              })}
            />
            {errors.comments?.type === "required" && (
              <div className="text-danger">
                <small>This field is required.</small>
              </div>
            )}
          </div>
          <div className="d-grid col-12 mx-auto p-2 my-2">
            <button className="btn btn-primary" type="submit">
              Create Dish
            </button>
          </div>
          {responseError && (
            <div className="text-danger">
              <small>{responseError}</small>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default CreateDish;
