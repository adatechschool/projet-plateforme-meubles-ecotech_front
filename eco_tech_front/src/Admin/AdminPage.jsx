import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <div>
        <div className="prix">
          <input
            type="int"
            name="searchBar"
            id="searchBar"
            placeholder="prix"
          />
        </div>
        <div className="type">
          <input type="text" name="type" id="typer" placeholder="type" />
        </div>
        <div className="description">
          <input
            type="text"
            name="description"
            id="description"
            placeholder="description"
          />
        </div>
        <div className="image">
          <Link to="/url">image</Link>
        </div>
      </div>
    </>
  );
}
export default Admin;
