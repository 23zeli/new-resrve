import React from 'react'

const [availableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);

function Form() {
  return (
        <fieldset>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px", margin: "auto"}}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time ">
                   <option>17:00</option>
                   <option>18:00</option>
                   <option>19:00</option>
                   <option>20:00</option>
                   <option>21:00</option>
                   <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                   <option>Birthday</option>
                   <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </fieldset>
  )
}

export default Form
