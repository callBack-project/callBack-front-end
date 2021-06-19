const EventsForm = () => {
  return (
    <div>
      <h1>Events Form</h1>
      <form>
        <label>
          Event Name:
          <input type="text" value="name"/>
        </label>
        <label>
          Location:
          <input type="text" value="location"/>
        </label>
        <label>
          Description:
          <input type="text" value="description"/>
        </label>
        <label>
          Link:
          <input type="text" value="link"/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
    
  )
}

export default EventsForm