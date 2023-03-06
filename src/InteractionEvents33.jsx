export default function InteractionEvents33() {
  function handleClick() {
    alert("Button was clicked.")
  }
 
  function handleChange(event) {
    const value = event.target.value
    console.log(value);
  }

  return (
    <section>
        <button onClick={handleClick}>Button</button>
        <input type="text" onChange={handleChange} value={handleChange.value} />
    </section>
  )
}
