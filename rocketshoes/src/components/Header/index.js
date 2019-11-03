import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/Logo.svg'
import { Container , Cart } from './styles';
import { MdShoppingBasket } from 'react-icons/md'

export default function Header() {
  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt="RocketShoes"/>
      </Link>
      <Cart to='/cart'>
        <div>
          <strong> Meu Carrinho </strong>
          <span> 3 itens </span>
        </div>
        <MdShoppingBasket size={36} color='#fff' />
      </Cart>

    </Container>
  );
}
