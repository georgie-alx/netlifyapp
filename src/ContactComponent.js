import styles from "./ContentComponent.module.css";
// did not create another stylesheet as they can share the same stylesheet

function ContactComponent(props) {
  return (
    <div className={styles.content}>
      <h2>Contact Me</h2>
      <p>
        Email: {props.email} | {props.linktext}:
        <a href={props.url}> {props.url}</a>
      </p>
    </div>
  );
}

export default ContactComponent;
