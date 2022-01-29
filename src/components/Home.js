import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios("https://dummyapi.io/data/v1/post?limit=10", {
      headers: {
        "app-id": `61f58ec6551b345a970bab36`,
      },
    })
      .then((res) => setPosts(res.data.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="pt-4">
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
            {posts.map((post) => (
              <div key={post.id} className="col-md-3 pb-3">
                <div className="card">
                  <img
                    src={post.image}
                    className="card-img-top"
                    style={{ maxHeight: 200 }}
                    alt="..."
                  />
                  <div className="card-body text-black">
                    <h6 className="card-title">{post.text}</h6>
                    <button type="button" class="btn btn-warning">
                      Like <span class="badge">{post.likes}</span>
                    </button>{" "}
                     <hr />
                    <label style={{ fontSize: 14 }}> Tags </label>
                    <br />
                    <button style={{fontSize:13,marginRight:7}} type="button" class="btn btn-danger">
                      <span class="badge">{post.tags[0]}</span>
                    </button>
                    <button style={{fontSize:13,marginRight:7}} type="button" class="btn btn-danger">
                      <span class="badge">{post.tags[1]}</span>
                    </button>
                    <button style={{fontSize:13,marginRight:7}} type="button" class="btn btn-danger">
                      <span class="badge">{post.tags[2]}</span>
                    </button>
                    <div></div>
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

export default Home;
