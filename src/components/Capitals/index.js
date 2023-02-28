import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {value: countryAndCapitalsList[0].id}

  onChangeing = event => {
    //  console.log(event.target.value)
    this.setState({value: event.target.value})
  }

  getResults = () => {
    const {value} = this.state
    const countryDetails = countryAndCapitalsList.find(
      each => each.id === value,
    )
    // console.log(countryDetails)
    return countryDetails
  }

  render() {
    const {country} = this.getResults()

    return (
      <div className="forOuter">
        <div className="forInner">
          <h1 className="forheader">Countries And Capitals</h1>
          <div>
            <select
              id="forState"
              className="forselect"
              onChange={this.onChangeing}
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="forState" className="forlabel">
              is Capital of which Country?
            </label>
            <p className="forparaRes">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Capitals
