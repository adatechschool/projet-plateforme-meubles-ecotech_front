import "./style/Inscription.css";

function Inscription() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const firstname = formData.get("firstname");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ name, firstname, email, password });

    form.reset();
  };

  return (
    <>
      <h2>Créer mon compte</h2>
      <div className="Inscription">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom</label>
          <input name="name" type="text" id="name" required />

          <label htmlFor="firstname">Prénom</label>
          <input name="firstname" type="text" id="firstname" required />

          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" required />

          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </>
  );
}

export default Inscription;
