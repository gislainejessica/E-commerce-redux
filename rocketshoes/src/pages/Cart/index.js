import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th> PRODUTO </th>
            <th> QTD </th>
            <th> SUBTOTAL </th>
            <th/>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/4a5e79f062cd44bb9c64a93f01221341_9366/Tenis_Ultraboost_Branco_F36155_01_standard.jpg" alt="tenis"/>
            </td>
            <td>
              <strong>Ténis muito massa</strong>
              <span> R$ 122,77 </span>
            </td>
            <td>
              <div>
              <button>
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={2}/>
              <button>
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
              </div>
              </td>
              <td>
                <strong>R$ 245,54</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>


            </td>
          </tr>
        </tbody>

      </ProductTable>
      <footer>
        <button type='button'>
          Finalizar Pedido
        </button>
        <Total>
            <span> TOTAL </span>
            <strong> R$ 5000,00 </strong>
        </Total>
      </footer>
    </Container>
  );
}
