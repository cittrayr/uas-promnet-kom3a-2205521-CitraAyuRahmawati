import React, { Component } from "react";
import UserService from "../services/UserService";

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id) {
    UserService.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
      });
    });
  }

  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }

  editUser(id) {
    this.props.history.push(`/add-user/${id}`);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      if (res.data === null || res.data.length === 0) {
        this.props.history.push("/add-user/_add");
      } else {
        this.setState({ users: res.data });
      }
    });
  }

  addUser() {
    this.props.history.push("/add-user/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center pt-5" 
        style={{ fontWeight: 'bold', fontSize: '60px' }}>Daftar Barang</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addUser}
          style={{ backgroundColor: 'dark blue' }}
          >
            Tambah Barang
          </button>
        </div>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Barang</th>
                <th>Jumlah</th>
                <th>Harga Satuan</th>
                <th>Lokasi</th>
                <th>Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div>{user.id}</div>
                  </td>
                  <td>
                    <div>{user.nama_barang}</div>
                  </td>
                  <td>
                    <div>{user.jumlah}</div>
                  </td>
                  <td>
                    <div>{user.harga_satuan}</div>
                  </td>
                  <td>
                    <div>{user.lokasi}</div>
                  </td>
                  <td>
                    <div>{user.deskripsi}</div>
                  </td>
                  <td>
                    <button
                      onClick={() => this.editUser(user.id)}
                      className="btn btn-info"
                      style={{ backgroundColor: 'red' }}
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "5px", backgroundColor: 'maroon' }}
                      onClick={() => this.deleteUser(user.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "5px",  backgroundColor: 'blue' }}
                      onClick={() => this.viewUser(user.id)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUserComponent;
