export default function InteractionEvents33() {
  function handlerClick() {
    alert("Button was clicked.");
  }

  function handlerChange() {
    console.log("Hello");
  }

  return (
    <section>
      <form>
        <button onClick={handlerClick}>Button</button>
        <input type="text" />
      </form>
    </section>
  );
}
