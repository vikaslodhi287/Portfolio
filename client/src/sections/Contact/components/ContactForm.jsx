import { useForm } from "react-hook-form";
import styles from "../styles/Contact.module.scss";
import { Send } from "lucide-react";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // Backend API will be connected in next step
    reset();
  };

  return (
    <form
      className={styles.formCard}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.formGroup}>
        <label>Name</label>

        <input
          type="text"
          placeholder="Your Name"
          {...register("name", {
            required: "Name is required",
          })}
        />

        {errors.name && (
          <span className={styles.error}>
            {errors.name.message}
          </span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label>Email</label>

        <input
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
          })}
        />

        {errors.email && (
          <span className={styles.error}>
            {errors.email.message}
          </span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label>Subject</label>

        <input
          type="text"
          placeholder="Subject"
          {...register("subject")}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Message</label>

        <textarea
          rows="6"
          placeholder="Write your message..."
          {...register("message", {
            required: "Message is required",
          })}
        />

        {errors.message && (
          <span className={styles.error}>
            {errors.message.message}
          </span>
        )}
      </div>

      <div className={styles.actions}>
        <button
          type="submit"
          className={styles.submitBtn}
        >
          <Send size={18} />
          <span>Send Message</span>
        </button>
      </div>
    </form>
  );
}

export default ContactForm;