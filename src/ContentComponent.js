import styles from "./ContentComponent.module.css";

function ContentComponent(props) {
  return (
    <div className={styles.content}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default ContentComponent;
