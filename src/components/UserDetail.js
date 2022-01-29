import React from "react";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
function Users() {
  const [user, setService] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: {
        "app-id": `61f58ec6551b345a970bab36`,
      },
    })
      .then((res) => setService(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <div className="text-center">
        {isLoading && <img src="https://www.cekuonline.com/img/loading.gif" />}
      </div>
      {!isLoading && (
        <div className="pt-4">
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img width="250px" src={user.picture} />
              </div>
              <div className="col-md-6">
                ID: {user.id} <br />
                Name: {user.firstName} {user.lastName} <br />
                Gender: {user.firstName} {user.gender} <br />
                Email: {user.firstName} {user.email} <br />
                Phone: {user.firstName} {user.phone} <br />
                Date of Birthday: {user.dateOfBirth} <br />
              </div>
              <div className="col-md-12 pt-5">
                <Link className="btn btn-danger" to={`/users/`}>
                  Back To Users List
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
