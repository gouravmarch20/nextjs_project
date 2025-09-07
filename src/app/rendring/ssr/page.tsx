export default function ContactPage() {
  async function submitForm(data: FormData) {
    "use server"; // 🚀 runs only on the server

    const name = data.get("name");
    const email = data.get("email");
    

    console.log("Form submitted:", { name, email });
  }

  return (
    <form action={submitForm}>
      <input name="name" placeholder="Your name" />
      <input name="email" placeholder="Your email" />
      <button type="submit">Send</button>
    </form>
  );
}