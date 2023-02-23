import "./listuser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableUser from "../../components/datatable/DatatableUser";

const ListUser = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableUser />
        <div className="listUser">
          <div class="row">
            <div class="panel panel-default user_panel">
              <div class="panel-heading">
                <h3 class="panel-title">User List</h3>
              </div>
              <div class="panel-body">
                <div class="table-container">
                  <table class="table-users table" border="0">
                    <tbody>
                      <tr>
                        <td width="10" align="center">
                          <img
                            class="pull-left img-circle nav-user-photo"
                            width="50"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhcCYW4QDWMOjOuUTxOd50KcJvK-rop9qE9zRltSbVS_bO-cfWA"
                          />
                        </td>
                        <td>
                          Tống Hữu Thắm
                          <br />
                          <i class="fa fa-envelope"></i>
                        </td>
                        <td>tonghuutham@gmail.com</td>
                        <td className="label ">Pending</td>
                        <td align="center">
                          Last Login: 6/14/2017
                          <br />
                          <small class="text-muted">2 days ago</small>
                        </td>
                      </tr>
                      <tr>
                        <td width="10">
                          <img
                            class="pull-left img-circle nav-user-photo"
                            width="50"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhcCYW4QDWMOjOuUTxOd50KcJvK-rop9qE9zRltSbVS_bO-cfWA"
                          />
                        </td>
                        <td>
                          Ngô Bảo Sơn
                          <br />
                          <i class="fa fa-envelope"></i>
                        </td>
                        <td>ngobaoson@gmail.com</td>
                        <td className="label labelActive">Active</td>
                        <td align="center">
                          Last Login: 6/10/2017
                          <br />
                          <small class="text-muted">5 days ago</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUser;
