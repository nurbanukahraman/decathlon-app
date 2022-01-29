import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios("https://dummyapi.io/data/v1/user?limit=10", {
      headers: {
        "app-id": `61f58ec6551b345a970bab36`,
      },
    })
      .then((res) => setUsers(res.data.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1>USERS LIST</h1>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12 text-center">
              <img
                style={{ maxWidth: 250 }}
                src="https://www.cekuonline.com/img/loading.gif"
              />
            </div>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="container">
          <div className="row">
            {users.map((user) => (
              <div key={user.id} className="col-md-3 pb-3">
                <div className="card">
                  <img src={user.picture} className="card-img-top" alt="..." />
                  <div className="card-body d-flex justify-content-between align-items-center text-black">
                    <h5 className="card-title">
                      {user.title}. {user.firstName} {user.lastName}
                    </h5>
                    <div>
                      <Link className="btn btn-danger" to={`/user/${user.id}`}>
                        Detail{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
