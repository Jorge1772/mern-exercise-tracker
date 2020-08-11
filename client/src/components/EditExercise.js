import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const EditExercise = (props) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [durationInMinutes, setDurationInMinutes] = useState();
  const [users, setUsers] = useState([""]);
  let history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/exercises/" + props.match.params.id)
      .then((response) => {
        setUsername(response.data.username);
        setDescription(response.data.description);
        setDurationInMinutes(response.data.durationInMinutes);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/api/users/")
      .then((response) => {
        setUsers(response.data.map((user) => user.username));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const changeDurationInMinutes = (e) => {
    setDurationInMinutes(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      durationInMinutes: durationInMinutes,
    };
    console.log(exercise);
    axios
      .post(
        "http://localhost:5000/api/exercises/" + props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data));
    history.push("/");
  };

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            refs="userInput"
            className="form-control"
            defaultValue={username}
            onChange={changeUsername}
          >
            {users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            defaultValue={description}
            onChange={changeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            defaultValue={durationInMinutes}
            onChange={changeDurationInMinutes}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
