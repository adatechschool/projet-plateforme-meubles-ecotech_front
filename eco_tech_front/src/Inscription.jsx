import "./style/Inscription.css";

function Inscription() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const Fullname = formData.get("Fullname");

    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ Fullname, email, password });

    form.reset();
  };

  return (
    <>
      <h2>Créer mon compte</h2>
      <div className="Inscription">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Fullname</label>
          <input name="Fullname" type="text" id="Fullname" required />

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
