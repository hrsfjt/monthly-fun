import React from 'react'
import Style from './DateFilter.module.css'
import moment from 'moment'

class DateFilter extends React.Component {
  constructor(props) {
    super(props)
    // init state
    const today = moment().format('yyyy-MM-DD')
    this.state = {
      from: today,
      to: today,
    }
    // bind methods
    this.onChangeDateFrom = this.onChangeDateFrom.bind(this)
    this.onChangeDateTo = this.onChangeDateTo.bind(this)
  }

  onChangeDateFrom(e) {
    this.setState({ from: e.target.value })
  }

  onChangeDateTo(e) {
    this.setState({ to: e.target.value })
  }

  render() {
    const onUpdate = () => {
      const date = {
        from: this.state.from,
        to: this.state.to,
      }
      this.props.handleUpdate(date)
    }
    return (
      <div className={Style.DfContainer}>
        <div className={Style.DfDate}>
          <label className={Style.dateLabel}>
            <span className={Style.label}> {'From'}</span>
            <input
              className={Style.dateFilterFrom}
              type="date"
              name="from"
              value={this.state.from}
              onChange={this.onChangeDateFrom}
            />
          </label>
          <label className={Style.dateLabel}>
            <span className={Style.label}>{'To'}</span>
            <input
              className={Style.dateFilterTo}
              type="date"
              name="to"
              value={this.state.to}
              onChange={this.onChangeDateTo}
            />
          </label>
        </div>
        <div className={Style.DfButton}>
          <button className={Style.updateButton} onClick={onUpdate}>
            {'UPDATE'}
          </button>
        </div>
      </div>
    )
  }
}

export default DateFilter
