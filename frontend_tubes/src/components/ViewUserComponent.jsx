import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div>
        <br />
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">Detail Item</h3>
          <div className="card-body">
            <div className="row2">
              <label>Nama Barang:</label>
              <div className="roww">{this.state.user.nama_barang}</div>
            </div>
            <div className="row2">
              <label>Jumlah :</label>
              <div className="roww">{this.state.user.jumlah}</div>
            </div>
            <div className="row2">
              <label>Harga Satuan :</label>
              <div className="roww">{this.state.user.harga_satuan}</div>
            </div>
            <div className="row2">
              <label>Lokasi :</label>
              <div className="roww">{this.state.user.lokasi}</div>
            </div>
            <div className="row2">
              <label>Deskripsi :</label>
              <div className="roww">{this.state.user.deskripsi}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
