# E-commerce-redux
Aplicação em React  usando os conceitos de Redux para controle dos estados.

### Conceitos iniciais sobre Arquitetura Flux e Redux
#### Redux
- O que é?
Uma biblioteca que implementa a arquitetura Flux, que, basicamente, é uma forma de comunicação dos elementos em tela.

- Para que server?
Para controlar estados globais.

- Quando preciso utiliza-lo?
  - Estado com mais de um "dono"
  - Um estado que precisa ser manipulado por mais de um componente
  - Ações dos usuarios causam efeitos colaterais  
Exemplo de usos:
- Carrinho de compras, dados do usuário, player de música ...

- Componentes de uma arquitetura Flux
__Action__: Uma ação é disparada(deve ter um `type`, pura) => __Redux Store__: Armazena State [único ponto de verdade], é imutável ( __Reducer__: Ouve a ação, pura, lógica e cálculos )

- Inicia sem Redux e sinta a necessidade de uzar-la. Não há necessidade de já começar usando o Redux em qualquer aplicação que se inicia.
