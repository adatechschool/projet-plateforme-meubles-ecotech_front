function Identification() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });

    form.reset();

    const fetchTest = async () => {
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTest();
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

          <button type="submit">Connexion</button>
        </form>
      </div>
    </div>
  );
}
export default Identification;
