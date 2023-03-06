export default function InteractionEvents33() {
  function handleClick() {
    alert("Button was clicked.");
  }

  function handleChange() {
    console.log(document.getElementById('input').value);
  }

  return (
    <section>
        <button onClick={handleClick}>Button</button>
        <input id='input' type="text" onInput={handleChange}/>
    </section>
  );
}
