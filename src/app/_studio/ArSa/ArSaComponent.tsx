import styles from './ArSa.module.css';

type EArSaProps = {
    label: string;
    img: string
};

export function ArsaComponent(props: EArSaProps) {
    return (
        <div className={styles.arsa}>
            <p>{props.label}</p>
            <img src={props.image} alt="ArSa" />
        </div>
    );
}