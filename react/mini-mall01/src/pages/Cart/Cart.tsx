import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store";

export const Cart = () => {

  const redux = useSelector((state: RootState) => state)
  console.log(redux.user);
  console.log(redux.stock);

  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table> 
    </div>
  )
}