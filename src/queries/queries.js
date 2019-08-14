import {gql} from "apollo-boost";

// Categories Queries and Mutations

const addCategoryMutation = gql`
mutation ($name: String!) {
    addCategory(name:$name){
        name
    }
}
`
const getCategoriesQuery = gql`
{
    categories{
        name
        id
    }
}`
const getCategoryQuery = gql`
    query($id: ID){
        category(id: $id){
            id
            name
        }
    }
`

//Add Product Queries and Mutations

const addProductMutation = gql`
mutation ($nombre: String!, $precio: String!, $categoryId: ID!, $planId: ID!, $modalidad: String!, $canal: String!) {
    addProduct(nombre:$nombre, precio:$precio, categoryId:$categoryId, planId:$planId, modalidad: $modalidad, canal:$canal){
        nombre
        id
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
                }
            planId{
                 id
                 name
                }
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
        categoryId{
            id
            name
        }
        planId{
            id
            name
        }
    }
}`
// Plan Queries and Mutations 

const addPlanMutation = gql`
mutation ($name: String!) {
    addPlan(name:$name){
        name
    }
}
`
const getPlansQuery = gql`
{
   plans{
        name
        id
    }
}`
const getPlanQuery = gql`
    query($id: ID){
        plan(id: $id){
            id
            name
        }
    }
`

export { getProductQuery, getProductsQuery, addProductMutation, getCategoriesQuery, getCategoryQuery, addCategoryMutation, addPlanMutation, getPlansQuery, getPlanQuery};