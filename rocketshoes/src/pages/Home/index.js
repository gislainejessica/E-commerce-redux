import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/4a5e79f062cd44bb9c64a93f01221341_9366/Tenis_Ultraboost_Branco_F36155_01_standard.jpg" alt="chuteira"/>
        <strong> Tênis muito legal </strong>
        <span>R$ 2000,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/4a5e79f062cd44bb9c64a93f01221341_9366/Tenis_Ultraboost_Branco_F36155_01_standard.jpg" alt="chuteira"/>
        <strong> Tênis muito legal </strong>
        <span>R$ 2000,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/4a5e79f062cd44bb9c64a93f01221341_9366/Tenis_Ultraboost_Branco_F36155_01_standard.jpg" alt="chuteira"/>
        <strong> Tênis muito legal </strong>
        <span>R$ 2000,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 4
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/4a5e79f062cd44bb9c64a93f01221341_9366/Tenis_Ultraboost_Branco_F36155_01_standard.jpg" alt="chuteira"/>
        <strong> Tênis muito legal </strong>
        <span>R$ 2000,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 2
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/4a5e79f062cd44bb9c64a93f01221341_9366/Tenis_Ultraboost_Branco_F36155_01_standard.jpg" alt="chuteira"/>
        <strong> Tênis muito legal </strong>
        <span>R$ 2000,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/4a5e79f062cd44bb9c64a93f01221341_9366/Tenis_Ultraboost_Branco_F36155_01_standard.jpg" alt="chuteira"/>
        <strong> Tênis muito legal </strong>
        <span>R$ 2000,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
    </ProductList>
  );
}
