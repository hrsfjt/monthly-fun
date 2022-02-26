import React from 'react'
import Style from './Loading.module.css'

class Loading extends React.Component {
  render() {
    if (this.props.isLoading) {
      return (
        <div className={Style.loaderOverlay}>
          <div className={Style.loader}></div>
        </div>
      )
    }
    return ''
  }
}

export default Loading
