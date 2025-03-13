function Identification() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });

    form.reset();
  };

  return (
    <div className="ggeneralIdentification">
      <h2 className="textIdentification">Connectez-vous à votre compte</h2>
      <div className="Identification">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" required />

          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Connection</button>
        </form>
      </div>
    </div>
  );
}

export default Identification;
