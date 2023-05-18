import React from 'react'

function NewClock({addClock, updateFormData}){

    const timezones = [
        "Pacific/Midway",
        "Pacific/Honolulu",
        "Pacific/Marquesas",
        "America/Anchorage",
        "America/Los_Angeles",
        "America/Denver",
        "America/Chicago",
        "America/New_York",
        "America/Argentina/Buenos_Aires",
        "America/Santiago",
        "Atlantic/Azores",
        "Europe/London",
        "Europe/Paris",
        "Europe/Istanbul",
        "Europe/Moscow",
        "Asia/Dubai",
        "Asia/Kabul",
        "Asia/Kolkata",
        "Asia/Jakarta",
        "Asia/Bangkok",
        "Asia/Tokyo",
        "Australia/Sydney",
        "Pacific/Guadalcanal",
        "Pacific/Fiji"
      ];
      

    return (
        <div className="new-clock-form">
          <h2>Add New Clock</h2>
          <form onSubmit={addClock}>
            <input onChange={updateFormData} type="text" name="name" placeholder="City" required/>
            <select onChange={updateFormData} name="timezone" placeholder="Timezone" required> 
                {timezones.map((timezone) => (
                    <option key={timezone} value={timezone}>
                        {timezone}
                    </option>
                ))}
            </select>
            <input onChange={updateFormData} type="text" name="imageDay" placeholder="Daytime Image" required/>
            <input onChange={updateFormData} type="text" name="imageNight" placeholder="Nighttime Image" required/>
            <button type="submit">Add Clock</button>
          </form>
        </div>
      )
}

export default NewClock