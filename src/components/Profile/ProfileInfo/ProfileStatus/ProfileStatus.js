import React from 'react'

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
  }

  render() {
    return (
      <>
        {this.state.editMode ?
          <div>
            <input type="text" autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
          </div> :
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>}
      </>
    )
  }
}

export default ProfileStatus