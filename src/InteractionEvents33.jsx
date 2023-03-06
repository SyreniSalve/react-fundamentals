export default function InteractionEvents33() {
  function handlerClick() {
    alert("Button was clicked.");
  }

  function handlerChange() {
    console.log("Hello");
  }

  return (
    <section>
      <button onClick={handlerClick}>Button</button>
      <input type="text"/>
    </section>
  );
}
