import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'


const POST_MUTATION = gql`
  mutation removeProduct($id: ID!) {
      id
  }
`

class deleteLink extends Component {
    state = {
        id: '',
      }
    
      render() {
        const { id } = this.state
        return (
          <div>
            <div>
              <input
                value={id}
                onChange={e => this.setState({ id: e.target.value })}
                type="text"
                placeholder="A description for the link"
              />
            
            </div>
            <Mutation mutation={POST_MUTATION} variables={{ id }}>
                {postMutation => <button onClick={postMutation}>Eliminar</button>}
            </Mutation>
        </div>
        )
      }
}

export default deleteLink