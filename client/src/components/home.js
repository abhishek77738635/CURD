import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const res = await axios.get("http://localhost:8000/api/v1/users");
    setUsers(res?.data);
  };

  const onFinish = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/v1/users", inputData);
    setInputData({
      name: "",
      email: "",
      age: "",
    });
    getAllUsers();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/v1/users/${id}`);
    const newUsers = users?.filter((item) => {
      return item._id !== id;
    });

    setUsers(newUsers);
  };
  return (
    <>
      <div className="container"         style={{
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh", // Set a minimum height to cover the entire viewport
        }}
>
        <div className="row">
          <div className="col-md-12">
            <div style={{ background: "blue" }}>
              <h1 className="text-white text-center mt-2">CURD OPPERATIONS</h1>
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={onFinish}>
              <div class="mb-3">
                <label for="name">Name</label>
                <input
                  value={inputData?.name}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  aria-describedby="nameHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1">Email</label>
                <input
                  name="email"
                  value={inputData?.email}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="age">Age</label>
                <input
                  name="age"
                  value={inputData?.age}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  class="form-control"
                  placeholder="Age"
                  id="age"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Email</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((x) => (
                  <tr>
                    <td>{x.name}</td>
                    <td>{x.age}</td>
                    <td>{x.email}</td>
                    <td>
                      <Link to={`/edit/${x._id}`}>
                        <button className="btn btn-primary">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(x._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
