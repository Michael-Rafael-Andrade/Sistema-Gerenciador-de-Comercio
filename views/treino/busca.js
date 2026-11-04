const produtos = [
    {
        codigo: 101,
        descricao: 'Cadeira Ergonômica'
    },
    {
        codigo: 202,
        descricao: 'Mesa de Escritório'
    },
    {
        codigo: 303,
        descricao: 'Suporte de Monitor 101'
    },
];
const termoBusca = '101'; // Deve encontrar a Cadeira (pelo código) e o Suporte pela descrição)

const listaProdutos = produtos.filter(item => {
    const achouNoCodigo = (String(item.codigo).toLowerCase().includes(String(termoBusca).toLowerCase()));
    const achouNaDescricao = (String(item.descricao).toLowerCase().includes(String(termoBusca).toLowerCase()));

    //retornar as constantes para funcionar
    return achouNoCodigo || achouNaDescricao;
});
console.log(listaProdutos);













// const clientes = [
//     {
//         id: 1,
//         nome: 'Ana Maria'
//     },
//     {
//         id: 2,
//         nome: 'Carlos Eduardo'
//     },
//     {
//         id: 3,
//         nome: 'Mariana Costa'
//     },
//     {
//         id: 4,
//         nome: 'Michael Andrade',
//     },
// ];


// // termo de busca ou palavra para realizar a consulta
// const termo = 'd';

// // filtrar todo o array de clientes procurando por 'termo = 'de''
// const clientesFiltrados = clientes.filter(item => {
//     const achouNoId = String(item.id).toLowerCase().includes(String(termo).toLowerCase());
//     const achouNoNome = String(item.nome).toLowerCase().includes(String(termo).toLowerCase());

//     return achouNoId || achouNoNome;
// });

// console.log(clientesFiltrados);





// const termo = 'an';

// const listaClientes = clientes.filter(item => {
//     const achouNoID = (String(item.id).toLowerCase().includes(String(termo).toLowerCase()));
//     const achouNoNome = (String(item.nome).toLowerCase().includes(String(termo).toLowerCase()));

//     return achouNoID || achouNoNome;
// });
// console.log(listaClientes);
























// const clientes = [
//     {
//         id: 1, nome: 'Ana Maria'
//     },
//     {
//         id: 2,
//         nome: 'Carlos Eduardo'
//     },
//     {
//         id: 3,
//         nome: 'Mariana Costa'
//     }
// ];

// const termo = 'ana';

// // Escreva o .filter() aqui


// // filtrar toda a lista de array clientes para buscar por termo
// const clientesFiltrados = clientes.filter(item => {
//     const achouNoNome =  String(item.nome).toLowerCase().includes(String(termo).toLowerCase());
//     const achouNoId = String(item.id).toLowerCase().includes(String(termo).toLowerCase());

//     // Mantém o item se encontrar no NOME ou no ID
//     return achouNoNome || achouNoId;
// });

// console.log("Resultado com o termo = 2: ");
// console.log(clientesFiltrados);
















// const estoque = {
//     10: 'Monitor Gamer',
//     20: 'Teclado Mecânico',
//     30: 'Mousepad Extra Large'
// };

// // acessar via filtro somente o 'Teclado Mecânico', usando o número 20.

// // Converter o objeto estoque em vetor
// const itensArray = Object.values(estoque);

// const filtro = 20;

// // filtrar o vetor itensArrayFiltro para procurar pelo termo: '20' = 'Teclado Mêcanico'
// const itensArrayFiltro = itensArray.filter(item => String(item).includes(String(filtro).toLowerCase()));

// console.log(itensArrayFiltro);

// // Até aqui eu não consegui obter o número 20 conforme o exercício pediu: 
 

// // solução encontrada porém não é a que preciso treinar
// console.log(estoque[20]);



















// const filtro = 1;
// const objeto = {
//     1: 'nome',
//     2: 'sobrenome',
//     3: 'idade',
//     4: 1,
// }

// console.log(objeto);

// const todosObjetosEmArray = Object.values(objeto);

// console.log(todosObjetosEmArray);

// const todosObjetosEmArrayComFiltro = todosObjetosEmArray.filter(item => String(item).toLowerCase().includes(String(filtro.toLowerCase())));

// console.log("objetos filtrados:");
// console.log(todosObjetosEmArrayComFiltro);