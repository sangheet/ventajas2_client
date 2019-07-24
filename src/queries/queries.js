import {gql} from "apollo-boost";

const getBooksQuery = gql`
{
    books{
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
            categoria
            plan
            modalidad
            canal
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

export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery, addAuthorMutation, getProductQuery, getProductsQuery};