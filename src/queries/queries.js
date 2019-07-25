import {gql} from "apollo-boost";

const getBooksQuery = gql`
{
    books{
        name
        id
    }
}`
const getCategoriesQuery = gql`
{
    categories{
        name
        id
    }
}`

const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}`

const addBookMutation = gql`
mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name:$name, genre:$genre, authorId:$authorId){
        name
        id
    }
}
`
const addProductMutation = gql`
mutation ($nombre: String!, $precio: String!, $categoryId: ID!, $plan: String!, $modalidad: String!, $canal: String!) {
    addProduct(nombre:$nombre, precio:$precio, categoryId:$categoryId, plan:$plan, modalidad: $modalidad, canal:$canal){
        nombre
        id
    }
}
`

const getBookQuery = gql`
    query($id: ID){
        book(id: $id){
            id
            name 
            genre
            author{
                id
                name 
                age
                books{
                    name 
                    id
                }
            }
        }
    }
`
const getProductQuery = gql`
    query($id: ID){
        product(id: $id){
            id
            nombre
            precio
            categoryId{
                id
                name
                products{
                    nombre 
                    id
                }
                }
            plan
            modalidad
            canal
        }
    }
`
const getCategoryQuery = gql`
    query($id: ID){
        category(id: $id){
            id
            name
        }
    }
`
const getProductsQuery = gql`
{
    products{
        nombre
        id
    }
}`

const addAuthorMutation = gql`
mutation ($name: String!, $age: String!) {
    addAuthor(name:$name, age:$age){
        name
        age
    }
}
`

const addCategoryMutation = gql`
mutation ($name: String!) {
    addCategory(name:$name){
        name
    }
}
`

export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery, addAuthorMutation, getProductQuery, getProductsQuery, addProductMutation, getCategoriesQuery, getCategoryQuery, addCategoryMutation};