import React, {Component} from 'react';
// import Home from './Home';

class AddBook extends Component {
  // constructor(){
  //   super();
  //   this.addBook = this.addBook.bind(this);
  // }
  addBook = () => {
    console.log(this.refs.test.value);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-10 toppad cls-tb-user" >
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Them sach</h3>
              </div>
              <form className="form-horizontal">
                <div className="panel-body">
                  <div className="form-group">
                    <label className="control-label col-md-3 pull-left">Id</label>
                    <div className="col-md-7">
                      <input type="text" name="id" className="form-control cls-login" ref="test"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-3">Tên sách</label>
                    <div className="col-md-7">
                      <input type="text" name="name" ref='name' className="form-control cls-login"  />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-3">Tác giả</label>
                    <div className="col-md-7">
                      <input type="text" name="phone" className="form-control cls-login"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-3">Tóm tắt</label>
                    <div className="col-md-7">
                      <input type="text" name="phone" className="form-control cls-login"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-3">Hình ảnh</label>
                    <div className="col-md-7">
                      <input type="file" name="image" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className ="panel-footer clearfix cls-register">
                  <button type ="button" className="btn btn-success pull-right" onClick={this.addBook}>
                    Xác nhận
                  </button>
                  <button className="btn btn-warning pull-left" type="reset">
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBook;